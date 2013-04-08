package com.countersoft.gemini.api.dto;

import com.countersoft.gemini.api.entity.IssueLink;

public class IssueLinkDto extends BaseDto
{

	public String CreatedRelative;
	public IssueDto Issue;
	public IssueDto OtherIssue;
	public String LinkType;

	public IssueLink BaseEntity;

}
