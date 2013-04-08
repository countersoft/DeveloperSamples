package com.countersoft.gemini.api.entity;

public class IssueWatcher extends BaseEntity
{
	public int IssueId;
	public int ProjectId;
	public int UserId;
	
	public IssueWatcher(int issueId, int userId)
	{
		this.IssueId = issueId;
		this.UserId = userId;
	}
	
	public IssueWatcher()
	{
		
	}
}
