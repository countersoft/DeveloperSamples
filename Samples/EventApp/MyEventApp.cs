using System;
using Countersoft.Gemini.Extensibility.Events;
using Countersoft.Gemini.Extensibility.Apps;

namespace EventApp
{
    [AppType(AppTypeEnum.Event),
    AppGuid("1E272B64-D892-4151-A177-1F0529EEE7E4"),
    AppName("My Event App"),
    AppDescription("Sample event app")]
    public class MyEventApp : AbstractIssueListener
    {
        public override void AfterCreateFull(IssueDtoEventArgs args)
        {
            // Do something with args.Issue
        }

        public override void AfterUpdateFull(IssueDtoEventArgs args)
        {
            // Do something with args.Issue
        }
    }
}

