package com.countersoft.gemini.api.entity;

import java.util.Date;

public class IssueTimeTracking extends BaseEntity
{

	public int ProjectId;
	public int IssueId;
	public int UserId;
	public int Hours;
	public int Minutes;
	public int TimeTypeId;
	public String Comment;
	public Date EntryDate;

}
