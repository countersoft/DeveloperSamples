using System;
using Countersoft.Foundation.Commons.Extensions;
using Countersoft.Gemini.Contracts.Business;
using Countersoft.Gemini.Infrastructure.Managers;
using Countersoft.Gemini.Infrastructure.TimerJobs;
using Countersoft.Gemini.Extensibility.Apps;

namespace TimerApp
{
    [AppType(AppTypeEnum.Timer),
    AppGuid("926A9148-CA7E-42C7-BFEA-47F861157BC7"),
    AppName("My Timer App"),
    AppDescription("Sample timer app")]
    public class MyTimerApp : TimerJob 
    {
        public override bool Run(IssueManager issueManager)
        {
           // app logic for run event

            LogDebugMessage("Started Run");

            return true;
        }

        public override void Shutdown()
        {
            // app logic for shutdown event
        }

        public override TimerJobSchedule GetInterval(IGlobalConfigurationWidgetStore dataStore)
        {
            var data = dataStore.Get<TimerJobSchedule>(AppGuid);

            if (data == null || data.Value == null || (data.Value.Cron.IsEmpty() 
                && data.Value.IntervalInHours.GetValueOrDefault() == 0 
                && data.Value.IntervalInMinutes.GetValueOrDefault() == 0))
            {
                // Default interval for timer app
                return new TimerJobSchedule(5);
            }

            return data.Value;
        }
    }
}
