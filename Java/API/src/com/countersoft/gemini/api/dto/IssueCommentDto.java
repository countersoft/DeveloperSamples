package com.countersoft.gemini.api.dto;

import com.countersoft.gemini.api.entity.IssueComment;

public class IssueCommentDto extends BaseDto
{

	public String CreatedRelative;
	public String Visibility;
	public IssueAttachmentDto[] Attachments;
	public IssueComment BaseEntity;

}
