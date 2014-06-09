using System;
using System.Collections.Specialized;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.UI;
using Countersoft.Gemini.Commons.Entity;
using Countersoft.Gemini.Extensibility.Apps;
using Countersoft.Gemini.Infrastructure;
using Countersoft.Gemini.Infrastructure.Apps;
using Countersoft.Gemini.Commons.Dto;

namespace UIApp
{
    [AppType(AppTypeEnum.FullPage),
    AppGuid("D8715D86-E601-4B54-98AB-EDDB8DCEA914"),
    AppControlGuid("880576C9-4920-499F-903B-0560D88185FB"),
    AppAuthor("Countersoft"), AppKey("UIApp"),
    AppName("My UI App"),
    AppDescription("Sample UI app"),
    AppControlUrl("view"), AppRequiresCreatePermission(false), AppRequiresViewPermission(true)]
    public class MyUiApp : BaseAppController
    {
        public override WidgetResult Caption(IssueDto issue = null)
        {
            return new WidgetResult() { Success = true, Markup = new WidgetMarkup(AppName) };
        }

        public override WidgetResult Show(IssueDto issue = null)
        {
            WidgetResult result = new WidgetResult();

            IssueWidgetData<string> data = GeminiContext.IssueWidgetStore.Get<string>(issue.Id, AppGuid, AppControlGuid);

            if (data == null || data.Value == null)
            {
                data = new IssueWidgetData<string>();
                data.Value = "Default!";
                data.IssueId = issue.Id;

                GeminiContext.IssueWidgetStore.Save(issue.Id, AppGuid, AppControlGuid, data.Value);
            }

            result.Markup = new WidgetMarkup("views\\my-view.cshtml", data);
            result.Success = true;

            return result;
        }

        [AppUrl("my-ui-app")]
        public ContentResult Save(int issueId)
        {
            string someValue = Request["my-value"];

            GeminiContext.IssueWidgetStore.Save(issueId, AppGuid, AppControlGuid, someValue);

            return JsonSuccess(RenderPartialViewToString(this, AppManager.Instance.GetAppUrl(AppGuid, "views\\my-view.cshtml"), string.Empty));
            /*return JsonSuccess(
                AppManager.Instance.ItemContentWidgetsOnShow(this, UserContext, GeminiContext,
                Cache, UserContext.Issue, AppGuid, AppControlGuid), string.Empty);*/
        }
    }
   
}
