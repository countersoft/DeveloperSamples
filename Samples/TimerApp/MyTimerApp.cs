using System;
using Countersoft.Foundation.Commons.Extensions;
using Countersoft.Gemini.Contracts.Business;
using Countersoft.Gemini.Infrastructure.Managers;
using Countersoft.Gemini.Infrastructure.TimerJobs;

namespace TimerApp
{
    public class MyTimerApp : TimerJob 
    {
        public override bool Run(IssueManager issueManager)
        {
           // app logic for run event

            LogDebugMessage("Your debug message here");

            return true;
        }

        public override void Shutdown()
        {
            // app logic for shutdown event
        }

        public override TimerJobSchedule GetInterval(IGlobalConfigurationWidgetStore dataStore)
        {
            var data = dataStore.Get<TimerJobSchedule>(AppId);

            if (data == null || data.Value == null || (data.Value.Cron.IsEmpty() 
                && data.Value.IntervalInHours.GetValueOrDefault() == 0 
                && data.Value.IntervalInMinutes.GetValueOrDefault() == 0))
            {
                // Sleep for 5 minutes is default
                return new TimerJobSchedule(5);
            }

            return data.Value;
        }

        public override string AppId
        {
            get { return "8b3130e-af4d-45eb-9472-2d6bb3e04d4c"; }
        }

        public override string Description
        {
            get { return "Sample timer app"; }
        }

        public override string Title
        {
            get { return "My Timer App"; }
        }
    }
}
