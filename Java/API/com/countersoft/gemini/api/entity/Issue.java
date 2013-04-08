package com.countersoft.gemini.api.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import com.countersoft.gemini.api.Constants.*;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Issue extends BaseEntity
{
	public int ProjectId;

	public int ReportedBy;

	public int MailboxId;
	public IssueOriginatorType OriginatorType;
	public IssueOriginatorReply OriginatorReply;
	public String OriginatorData;
	public Date OriginatorProcessed;

	public boolean IsParent;
	public int ParentIssueId;
	public String HierarchyKey;
	public String Repeated;

	public int FixedInVersionId;
	public int TypeId;
	public int PriorityId;
	public int SeverityId;
	public int StatusId;
	public int ResolutionId;

	public IssueAttachment[] Attachments;

	public String Watchers;
	public int Votes;
	public int Points;

	public int PercentComplete;
	public int EstimatedHours;
	public int EstimatedMinutes;
	public int LoggedHours;
	public int LoggedMinutes;

	public int Visibility;

	public String Title;
	public String Description;

	public String Tag1;
	public String Tag2;
	public String Tag3;

	public Date StartDate;
	public Date DueDate;
	public Date ResolvedDate;
	public Date ClosedDate;

	public boolean IsSubIssue = (ParentIssueId != 0) ? true : false;
	
	public Issue()
	{
		Date now = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat timeFormat = new SimpleDateFormat("kk:mm:ss");
        String currentDateTime = (dateFormat.format(now) + "T" + timeFormat.format(now));
         
        Created = currentDateTime;
        Revised = currentDateTime;
        
        OriginatorType = IssueOriginatorType.API;
        OriginatorReply = IssueOriginatorReply.NONE;
        
        OriginatorData = new String();
        HierarchyKey = new String();
        Repeated = new String();
        Watchers = new String();
        Title = new String();
        Description = new String();
        Tag1 = new String();
        Tag2 = new String();
        Tag3 = new String();
        
        Visibility = 1;
        
        Attachments = new IssueAttachment[0];
	}
}