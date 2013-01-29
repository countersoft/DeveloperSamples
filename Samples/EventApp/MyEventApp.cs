using System;
using Countersoft.Gemini.Extensibility.Events;

namespace EventApp
{
    public class AppConstants
    {
        // Unique to your app
        public static string AppId = "6452a35b-8964-4b34-88ff-8fbcee8d40f7";
    }

    public class MyEventApp : AbstractIssueListener
    {
        public override string Description
        {
            get { return "Sample event app"; }
            set { }
        }

        public override string Title
        {
            get { return "My Event App"; }
            set { }
        }

        public override string AppId
        {
            get { return AppConstants.AppId; }
        }

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

