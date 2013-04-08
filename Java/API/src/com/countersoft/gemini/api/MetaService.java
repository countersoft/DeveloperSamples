package com.countersoft.gemini.api;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

import com.countersoft.gemini.api.dto.*;
import com.countersoft.gemini.api.entity.*;

public class MetaService extends BaseService
{

	public MetaService(String authentication, String baseUrl)
	{
		super(authentication, baseUrl);
	}

	/* Start of issue types */
	public IssueTypeDto[] GetIssueTypes() throws NoSuchAlgorithmException,
			UnsupportedEncodingException, InstantiationException,
			IllegalAccessException
	{
		return GetResponse("type", "GET", null, IssueTypeDto[].class);
	}

	public IssueTypeDto[] GetIssueTypesForTemplate(int templateId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("type/template/" + templateId, "GET", null,
				IssueTypeDto[].class);
	}

	public IssueTypeDto GetIssueType(int id) throws NoSuchAlgorithmException,
			UnsupportedEncodingException, InstantiationException,
			IllegalAccessException
	{
		return GetResponse("type/" + id, "GET", null, IssueTypeDto.class);
	}

	public IssueTypeDto CreateIssueType(IssueType type)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("type", "POST", type, IssueTypeDto.class);
	}

	public IssueTypeDto UpdateIssueType(IssueType type)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("type", "PUT", type, IssueTypeDto.class);
	}

	public IssueTypeDto DeleteIssueType(int id)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("type/" + id, "DELETE", null, IssueTypeDto.class);
	}

	/* End of issue types */

	/* Start of statuses */
	public IssueStatusDto[] GetIssuesStatuses()
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("status", "GET", null, IssueStatusDto[].class);
	}

	public IssueStatusDto[] GetStatusesForTemplate(int templateId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("status/template/" + templateId, "GET", null,
				IssueStatusDto[].class);
	}

	public IssueStatusDto GetIssueStatus(int id)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("status/" + id, "GET", null, IssueStatusDto.class);
	}

	public IssueStatusDto CreateIssueStatus(IssueStatus status)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("status", "POST", status, IssueStatusDto.class);
	}

	public IssueStatusDto UpdateIssueStatus(IssueStatus status)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("status", "PUT", status, IssueStatusDto.class);
	}

	public IssueStatusDto DeleteIssueStatus(int id)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("status/" + id, "DELETE", null, IssueStatusDto.class);
	}

	/* End of statuses */

	/* Start of priorities */
	public IssuePriorityDto[] GetIssuePriorities()
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("priority", "GET", null, IssuePriorityDto[].class);
	}

	public IssuePriorityDto[] GetPrioritiesForTemplate(int templateId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("priority/template/" + templateId, "GET", null,
				IssuePriorityDto[].class);
	}

	public IssuePriorityDto GetIssuePriority(int id)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("priority/" + id, "GET", null,
				IssuePriorityDto.class);
	}

	public IssuePriorityDto CreateIssuePriority(IssuePriority priority)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("priority", "POST", priority, IssuePriorityDto.class);
	}

	public IssuePriorityDto UpdateIssuePriority(IssuePriority priority)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("priority", "PUT", priority, IssuePriorityDto.class);
	}

	public IssuePriorityDto DeleteIssuePriority(int id)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("priority/" + id, "DELETE", null,
				IssuePriorityDto.class);
	}

	/* End of priorities */

	/* Start of severities */
	public IssueSeverityDto[] GetIssueSeverities()
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("severity", "GET", null, IssueSeverityDto[].class);
	}

	public IssueSeverityDto[] GetSeveritiesForTemplate(int templateId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("severity/template/" + templateId, "GET", null,
				IssueSeverityDto[].class);
	}

	public IssueSeverityDto GetIssueSeverity(int id)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("severity/" + id, "GET", null,
				IssueSeverityDto.class);
	}

	public IssueSeverityDto CreateIssueSeverity(IssueSeverity severity)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("severity", "POST", severity, IssueSeverityDto.class);
	}

	public IssueSeverityDto UpdateIssueSeverity(IssueSeverity severity)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("severity", "PUT", severity, IssueSeverityDto.class);
	}

	public IssueSeverityDto DeleteIssueSeverity(int id)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("severity/" + id, "DELETE", null,
				IssueSeverityDto.class);
	}

	/* End of severities */

	/* Start of resolutions */
	public IssueResolution[] GetIssueResolutions()
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("resolution", "GET", null, IssueResolution[].class);
	}

	public IssueResolution[] GetByTemplateResolution(int templateId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("resolution/template/" + templateId, "GET", null,
				IssueResolution[].class);
	}

	public IssueResolution GetIssueResolution(int id)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("resolution/" + id, "GET", null,
				IssueResolution.class);
	}

	public IssueResolution CreateIssueResolution(IssueResolution resolution)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("resolution", "POST", resolution,
				IssueResolution.class);
	}

	public IssueResolution UpdateIssueResolution(IssueResolution resolution)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("resolution", "PUT", resolution,
				IssueResolution.class);
	}

	public IssueResolution DeleteIssueResolution(int id)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("resolution/" + id, "DELETE", null,
				IssueResolution.class);
	}

	/* End of resolutions */

	/* Start of links */
	public IssueLinkType[] GetIssueLinkTypes() throws NoSuchAlgorithmException,
			UnsupportedEncodingException, InstantiationException,
			IllegalAccessException
	{
		return GetResponse("linktype", "GET", null, IssueLinkType[].class);
	}

	public IssueLinkType GetIssueLinkType(int templateId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("linktype/template/" + templateId, "GET", null,
				IssueLinkType.class);
	}
	/* End of links */
}
