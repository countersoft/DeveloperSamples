package com.countersoft.gemini.api.dto;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import com.countersoft.gemini.api.entity.*;

@JsonIgnoreProperties(ignoreUnknown = true)
public class IssueDto extends BaseDto
{
	public Issue BaseEntity;

	public Project Project;
	public String Status;
	public String StatusImage;
	public String Resolution;
	public String Priority;
	public String PriorityImage;
	public String Severity;
	public String SeverityImage;
	public String FixedInVersion;
	public String Type;
	public String TypeImage;
	public String Reporter;
	public String Reviser;
	public String EstimatedEffort;
	public String ComponentNames;
	public String ResourceNames;
	public String AffectedVersionNumbers;
	public String Visibility;
	public boolean IsClosed;
	public boolean IsResolved;

	public IssueCommentDto[] Comments;
	public SourceControlFile[] SourceControlFiles;
	public IssueWatcherDto[] Watchers;
	public IssueResourceDto[] Resources;
	public ComponentDto[] Components;
	public IssueAttachmentDto[] Attachments;
	public IssueTimeTrackingDto[] TimeEntries;

	public String ProjectName;
	public String ProjectCode;

	DateFormat fmt = new SimpleDateFormat("dd/mm/yy");

	public int Id;
	public String Title;
	public String Description;
	public String Created;
	public String CreatedString;
	public String CreatedRelative;
	public String Revised;
	public String RevisedRelative;
	public Date DueDate;
	public String DueDateString;
	public Date StartDate;
	public String StartDateString;
	public Date ClosedDate;
	public String ClosedDateString;
	public String ClosedDateRelative;
	public Date ResolvedDate;
	public String ResolvedDateString;
	public String ResolvedDateRelative;

	public int EstimatedHours;
	public int EstimatedMinutes;
	public String HierarchyKey;
	public String OriginatorData;
	public int ParentIssueId;
	public int PercentComplete;
	public String Repeated;
	public int LoggedHours;
	public int LoggedMinutes;
	public int Votes;
	public int Points;
	public int Sequence;

	//public Pair<Integer, IssueDto>[] Hierarchy;
	public IssueLinkDto[] Links;
	public IssueAuditDto[] History;
}