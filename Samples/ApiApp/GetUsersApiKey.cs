using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Routing;
using Countersoft.Gemini.Extensibility.Apps;
using Countersoft.Gemini;
using Countersoft.Gemini.Commons;
using Countersoft.Foundation.Commons.Extensions;
using Countersoft.Gemini.Infrastructure;
using System.Web;
using System.Web.Mvc;
using System.Web.Http;
using RestSharp;
using Countersoft.Gemini.Infrastructure.Api;

namespace ApiApp
{
    public class GetUsersApiKeyRoutes : IAppRoutes
    {
        public void RegisterRoutes(RouteCollection routes)
        {
            routes.MapHttpRoute(null, "api/getapikey/{username}", new { controller = "GetUsersApiKey", action = "Get" }, new { httpMethod = new HttpMethodConstraint(new string[] { "GET" }) });
            routes.MapHttpRoute(null, "api/getapikey", new { controller = "GetUsersApiKey", action = "Post" }, new { httpMethod = new HttpMethodConstraint(new string[] { "POST" }) });
            routes.MapHttpRoute(null, "api/getapikey/key/{apikey}", new { controller = "GetUsersApiKey", action = "PostAPIKey" }, new { httpMethod = new HttpMethodConstraint(new string[] { "POST" }) });
        }
    }

    public class GetUsersApiKeyController : BaseApiController
    {
        [System.Web.Mvc.HttpGet]
        public string Get(string username)
        {
            string response = "error: Wrong username";

            var user = UserManager.Get(username);
            if (user != null)
            {
                response = user.Entity.ApiKey;
            }

            return response;
        }

        [System.Web.Mvc.HttpPost]
        public string PostAPIKey([FromBody] string username, string apikey)
        {
            if (username.IsEmpty() || apikey.IsEmpty() || GeminiApp.Config.ApiKey.IsEmpty() || string.Compare(apikey, GeminiApp.Config.ApiKey, true) != 0)
            {
                string response = string.Empty;

                if (username.IsEmpty())
                {
                    response = "Missing Username ";
                }
                
                if (GeminiApp.Config.ApiKey.IsEmpty())
                {
                    response += "Web.config is missing API key ";
                }
                else
                {
                    response += "Wrong API key: " + apikey + " ";
                }

                return response;
            }

            var user = UserManager.Get(username);

            if (user == null)
            {
                return "Wrong username";
            }
            else
            {
                return user.Entity.ApiKey;
            }
        }

        [AuthorizeApi]
        [System.Web.Mvc.HttpPost]
        public string Post([FromBody] string username)
        {
            if (username.IsEmpty())
            {
                return "Missing Username";
            }

            var user = UserManager.Get(username);

            if (user == null)
            {
                return "Wrong username";
            }
            else
            {
                return user.Entity.ApiKey;
            }
        }
    }
}
