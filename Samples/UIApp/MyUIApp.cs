using System;
using System.Collections.Specialized;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.UI;
using Countersoft.Gemini.Commons.Entity;
using Countersoft.Gemini.Extensibility.Apps;
using Countersoft.Gemini.Infrastructure;
using Countersoft.Gemini.Infrastructure.Apps;

namespace UIApp
{
    internal static class Constants
    {
        public static string AppId = "de0a3507-c397-416b-8f4d-ccd3070aa67c";
        public static string ControlId = "da065ac7-c4aa-4772-a6e0-9de480d8cb8d";
    }

    public class MyUiApp : ItemContentWidget
    {
        public MyUiApp()
        {
            ControlId = Constants.ControlId;
        }

        public override WidgetResult GetCaption(ItemWidgetArguments args)
        {
            WidgetResult result = new WidgetResult();

            result.Success = true;
            result.Markup.Html = "Checklist";

            return result;
        }

        public override WidgetResult OnShow(ItemWidgetArguments args)
        {
            WidgetResult result = new WidgetResult();

            IssueWidgetData<string> data = args.GeminiContext.IssueWidgetStore.Get<string>(args.Item.Id, AppId, ControlId);

            if (data == null || data.Value == null)
            {
                data = new IssueWidgetData<string>();
                data.Value = "Default!";
                data.IssueId = args.Item.Id;

                args.GeminiContext.IssueWidgetStore.Save(args.Item.Id, AppId, ControlId, data.Value);
            }

            result.Markup = new WidgetMarkup("views\\my-view.cshtml", data);
            result.Success = true;

            return result;
        }

        public override WidgetResult OnButtonAction(ItemWidgetArguments args, string action, NameValueCollection form)
        {
            return OnShow(args);
        }
    }

    public class ChecklistRoutes : IAppRoutes
    {
        public void RegisterRoutes(RouteCollection routes)
        {
            routes.MapRoute(null, "apps/my-ui-app/{issueid}", new { controller = "MyUiApp", action = "Save" }, new { issueid = @"\d{1,10}" });
        }
    }

    [ValidateInput(false)]
    [OutputCache(Duration = 0, NoStore = false, Location = OutputCacheLocation.None)]
    public class MyUiAppController : BaseController
    {
        public ContentResult Save(int issueId)
        {
            string someValue = Request["some-value"];

            GeminiContext.IssueWidgetStore.Save(issueId, Constants.AppId, Constants.ControlId, someValue);

            return JsonSuccess(
                AppManager.Instance.ItemContentWidgetsOnShow(this, UserContext, GeminiContext, 
                Cache, UserContext.Issue, Constants.AppId, Constants.ControlId), string.Empty);
        }
    }
}
