package com.countersoft.gemini.api;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

import com.countersoft.gemini.api.Constants.IssueOriginatorType;
import com.countersoft.gemini.api.dto.IssueAttachmentDto;
import com.countersoft.gemini.api.dto.IssueAuditDto;
import com.countersoft.gemini.api.dto.IssueCommentDto;
import com.countersoft.gemini.api.dto.IssueDto;
import com.countersoft.gemini.api.dto.IssueLinkDto;
import com.countersoft.gemini.api.dto.IssueTimeTrackingDto;
import com.countersoft.gemini.api.dto.IssueWatcherDto;
import com.countersoft.gemini.api.entity.CodeCommit;
import com.countersoft.gemini.api.entity.CustomFieldData;
import com.countersoft.gemini.api.entity.Issue;
import com.countersoft.gemini.api.entity.IssueAttachment;
import com.countersoft.gemini.api.entity.IssueComment;
import com.countersoft.gemini.api.entity.IssueLink;
import com.countersoft.gemini.api.entity.IssueTimeTracking;
import com.countersoft.gemini.api.entity.IssueWatcher;
import com.countersoft.gemini.api.entity.IssuesFilter;
import com.countersoft.gemini.api.entity.NavigationCard;
import com.countersoft.gemini.api.entity.SourceControlFile;

public class ItemService extends BaseService
{

	public ItemService(String authentication, String baseUrl)
	{
		super(authentication, baseUrl);
	}

	/* Start of issues */	
	public IssueDto GetIssue(int issueId) throws NoSuchAlgorithmException,
			UnsupportedEncodingException, InstantiationException,
			IllegalAccessException
	{
		return GetResponse("items/" + issueId, "GET", null, IssueDto.class);
	} /* This is broken! Fix this!! */

	public IssueDto CreateIssue(Issue issue) throws NoSuchAlgorithmException,
			UnsupportedEncodingException, InstantiationException,
			IllegalAccessException
	{
		return GetResponse("items", "POST", issue, IssueDto.class);
	}

	public IssueDto UpdateIssue(Issue issue) throws NoSuchAlgorithmException,
			UnsupportedEncodingException, InstantiationException,
			IllegalAccessException
	{
		return GetResponse("items", "PUT", issue, IssueDto.class);
	}

	public IssueDto DeleteIssue(int issueId) throws NoSuchAlgorithmException,
			UnsupportedEncodingException, InstantiationException,
			IllegalAccessException
	{
		return GetResponse("items/" + issueId, "DELETE", null, IssueDto.class);
	}
	/* End of issues */
	
	/* Start of filtered issues */
	public IssueDto[] GetFilteredIssues(IssuesFilter filter) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/filtered", "POST", filter, IssueDto[].class);
	}
	/* End of filtered issues */
	
	/* Start of repeated issues */
	public IssueDto[] GetRepeatedIssues() throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/repeated", "GET", null, IssueDto[].class);
	}
	
	public IssueDto GetLastIssueForOriginator(IssueOriginatorType type, String name) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/originator/" + type.type() + "/name/" + name, "GET", null, IssueDto.class);
	}
	
	public IssueDto[] GetLastIssuesForOriginator(IssueOriginatorType type, String name) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/originator/all/" + type.type() + "/name/" + name, "GET", null, IssueDto[].class);
	}
	/* End of repeated issues */
	
	/* Start of source control files */
	public SourceControlFile[] GetSourceControlFiles(int issueId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/sourcecontrolfiles", "GET", null, SourceControlFile[].class);
	}
	
	public SourceControlFile GetSourceControlFile(int issueId, int fileId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/sourcecontrolfiles/" + fileId, "GET", null, SourceControlFile.class);
	}
	
	public SourceControlFile CreateSourceControlFile(SourceControlFile file) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + file.IssueId + "/sourcecontrolfiles", "POST", file, SourceControlFile.class);
	}
	
	public SourceControlFile UpdateSourceControlFile(SourceControlFile file) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + file.IssueId + "/sourcecontrolfiles", "PUT", file, SourceControlFile.class);
	}
	
	public SourceControlFile DeleteSourceControlFile(int issueId, int fileId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/sourcecontrolfiles/" + fileId, "DELETE", null, SourceControlFile.class);
	}
	/* End of source control files */
	
	/* Start of code commits */
	public CodeCommit CreateCodeCommit(CodeCommit commit) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + commit.IssueId + "/codecommits", "POST", commit, CodeCommit.class);
	}
	/* End of code commits */
	
	/* Start of custom field data */
	public CustomFieldData CreateCustomFieldData(CustomFieldData data) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + data.IssueId + "/customfield/data", "POST", data, CustomFieldData.class);
	}
	
	public CustomFieldData UpdateCustomFieldData(CustomFieldData data) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + data.IssueId + "/customfield/data", "PUT", data, CustomFieldData.class);
	}
	/* End of custom field data */
	
	/* Start of times */
	public IssueTimeTrackingDto[] GetIssueTimes(int issueId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/times", "GET", null, IssueTimeTrackingDto[].class);
	}
	
	public IssueTimeTrackingDto GetIssueTime(int issueId, int timeId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/times/" + timeId, "GET", null, IssueTimeTrackingDto.class);
	}
	
	public IssueTimeTrackingDto LogIssueTime(IssueTimeTracking time) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + time.IssueId + "/times", "POST", time, IssueTimeTrackingDto.class);
	}
	
	public IssueTimeTrackingDto EditIssueTime(IssueTimeTracking time) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + time.IssueId + "/times", "PUT", time, IssueTimeTrackingDto.class);
	} 
	
	public IssueTimeTrackingDto DeleteIssueTime(int issueId, int timeId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/times/" + timeId, "DELETE", null, IssueTimeTrackingDto.class);
	}
	/* End of times */
	
	/* Start of attachments */
	public IssueAttachmentDto[] GetIssueAttachments(int issueId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/attachments", "GET", null, IssueAttachmentDto[].class);
	}
	
	public IssueAttachmentDto GetIssueAttachment(int issueId, int attachmentId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/attachments/" + attachmentId, "GET", null, IssueAttachmentDto.class);
	}
	
	public IssueAttachmentDto CreateIssueAttachment(IssueAttachment attachment) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + attachment.IssueId + "/attachments", "POST", attachment, IssueAttachmentDto.class);
	}
	
	public IssueAttachmentDto UpdateIssueAttachment(IssueAttachment attachment) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + attachment.IssueId + "/attachments", "PUT", attachment, IssueAttachmentDto.class);
	}
	
	public IssueAttachmentDto DeleteIssueAttachment(int issueId, int attachmentId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/attachments/" + attachmentId, "DELETE", null, IssueAttachmentDto.class);
	}
	/* End of attachments */
	
	/* Start of roadmaps */
	public IssueDto[] GetRoadmap(int versionId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + versionId + "/roadmap", "GET", null,
				IssueDto[].class);
	}
	/* End of roadmaps */
	
	/* Start of histories */
	public IssueAuditDto[] GetHistory(int issueId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/history", "GET", null,
				IssueAuditDto[].class);
	}
	/* End of histories */
	
	/* Start of changelogs */
	public IssueDto[] GetChangelog(int versionId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + versionId + "/changelog", "GET", null,
				IssueDto[].class);
	}
	/* End of changelogs */
	
	/* Start of dependencies */
	public IssueDto[] GetDependencies(int issueId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/dependencies", "GET", null,
				IssueDto[].class);
	}
	/* End of dependencies */

	/* Start of links */
	public IssueLinkDto[] GetIssueLinks(int issueId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/links", "GET", null,
				IssueLinkDto[].class);
	}
	
	public IssueLinkDto CreateIssueLink(IssueLink link) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + link.IssueId + "/links", "POST", link,
				IssueLinkDto.class);
	}
	/* End of links */
	
	/* Start of comments */
	public IssueCommentDto[] GetIssueComments(int issueId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/comments", "GET", null,
				IssueCommentDto[].class);
	}

	public IssueCommentDto GetIssueComment(int issueId, int commentId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/comments/" + commentId,
				"GET", null, IssueCommentDto.class);
	}

	public IssueCommentDto CreateIssueComment(IssueComment comment)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + comment.IssueId + "/comments", "POST",
				comment, IssueCommentDto.class);
	}

	public IssueCommentDto UpdateIssueComment(IssueComment comment)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + comment.IssueId + "/comments", "PUT",
				comment, IssueCommentDto.class);
	}

	public IssueCommentDto DeleteIssueComment(int issueId, int commentId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/comments/" + commentId,
				"DELETE", null, IssueCommentDto.class);
	}
	/* End of comments */
	
	/* Start of watchers */
	public IssueWatcherDto[] GetIssueWatchers(int issueId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/watchers",
				"GET", null, IssueWatcherDto[].class);
	}
	
	public IssueWatcherDto CreateIssueWatcher(int issueId, int userId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/watchers/" + userId,
				"POST", new IssueWatcher(issueId, userId), IssueWatcherDto.class);
	}
	
	public IssueWatcherDto[] DeleteIssueWatcher(int issueId, int userId) throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/" + issueId + "/watchers/" + userId,
				"DELETE", null, IssueWatcherDto[].class);
	}
	/* End of watchers */
	
	/* Start of navigation cards */
	public NavigationCard[] GetNavigationCards() throws NoSuchAlgorithmException, UnsupportedEncodingException, InstantiationException, IllegalAccessException
	{
		return GetResponse("items/navcards",
				"GET", null, NavigationCard[].class);
	}
	/* End of navigation cards */

}
