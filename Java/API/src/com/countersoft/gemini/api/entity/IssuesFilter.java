package com.countersoft.gemini.api.entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.codehaus.jackson.annotate.JsonIgnore;

import com.countersoft.gemini.api.Constants.IssueOriginatorType;
import com.countersoft.gemini.api.Constants.SortDirection;
import com.countersoft.gemini.api.Constants.SystemFilterTypes;

public class IssuesFilter extends BaseEntity
{
	public IssuesFilter() throws InstantiationException, IllegalAccessException
    {
        SortField = "DateRevised";
        SortOrder = SortDirection.DESCENDING.toString();
        Projects = new String();
        Components = new String();
        Versions = new String();
        AffectedVersions = new String();
        Resources = new String();
        Types = new String();
        Priorities = new String();
        Severities = new String();
        Statuses = new String();
        Resolutions = new String();
        CreatedAfter = new String();
        CreatedBefore = new String();
        FilterName = new String();
        Issues = new String();
        SearchKeywords = new String();
        RevisedAfter = new String();
        RevisedBefore = new String();
        InitialStartDate = new String();
        FinalStartDate = new String();
        InitialDueDate = new String();
        FinalDueDate = new String();
        InitialClosedDate = new String();
        FinalClosedDate = new String();
        InitialResolvedDate = new String();
        FinalResolvedDate = new String();
        TestFilter = new String();
        CustomFields =  new IntStringPair[0];
        TimeLoggedBy = new String();
        TimeLoggedBefore = new String();
        TimeLoggedAfter = new String();
        TimeTypes = new String();

        SavedCustomFieldValues = new String();
        MaxItemsToReturn = 0;
        
        Date now = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat timeFormat = new SimpleDateFormat("kk:mm:ss");
        String currentDateTime = (dateFormat.format(now) + "T" + timeFormat.format(now));
         
        Created = currentDateTime;
        Revised = currentDateTime;

        //TypesByProject = (Pair<Integer, String>[]) new Object[]{};
        ViewOwnProjects = new int[]{};
        Source = new String();
        SourceType = null;
        
        SystemFilter = SystemFilter.NOTYPE;
        SourceType = null;
    }
	
	public boolean Transformed;
	public String FilterName;
	public int UserId;
	public int SavedFromProjectId;
	public String Projects;
	public String Issues;
	public String Components;
	public String Versions;
	public String AffectedVersions;
	public String Resources;
	public Pair<Integer, String>[] TypesByProject;
	public String Types;
	public String Priorities;
	public String Severities;
	public String Statuses;
	public String Resolutions;
	public String TimeLoggedBy;
	public String TimeTypes;
	
	public String SearchKeywords;
	public boolean IncludeClosed;
	public SystemFilterTypes SystemFilter;
	public String SortField;
    public String SortOrder;
    public boolean GroupDependencies;
    public int WatchedBy;
    public boolean ShowSequenced;
    public int MaxItemsToReturn;

    public String CreatedBefore;
    public String CreatedAfter;
    public String RevisedBefore;
    public String RevisedAfter;
    public String InitialStartDate;
    public String FinalStartDate;
    public String InitialDueDate;
    public String FinalDueDate;
    public String InitialClosedDate;
    public String FinalClosedDate;
    public String InitialResolvedDate;
    public String FinalResolvedDate;
    public String TimeLoggedBefore;
    public String TimeLoggedAfter;

    public int ReportedByUserId;
    public IntStringPair[] CustomFields;
    public boolean SavedFromReports;
    public String SavedCustomFieldValues;
    public String TestFilter;

    public String Source;
    public IssueOriginatorType SourceType;
    
    @JsonIgnore
    public IssuesFilter TransformedFilter;
    
    public int[] ViewOwnProjects;
}
