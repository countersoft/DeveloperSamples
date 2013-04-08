package com.countersoft.gemini.api.entity;

public class IssueComment extends BaseEntity
{

	public int IssueId;
	public int ProjectId;
	public int UserId;
	public String Comment;
	public String Fullname;
	public boolean IsClosing;
	public int Visibility;
	public IssueAttachment[] Attachments;

	public Object clone()
	{
		try
		{
			return super.clone();
		}
		catch (Exception e)
		{
			return null;
		}
	}

}
