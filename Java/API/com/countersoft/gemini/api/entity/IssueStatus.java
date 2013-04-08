package com.countersoft.gemini.api.entity;

import com.countersoft.gemini.api.Constants.IssueStatusType;

public class IssueStatus extends BaseMetaEntity
{

	public String Image;
	public String Comment;
	public IssueStatusType Type;
	public boolean IsFinal;
	public String Color;
	public int TemplateId;
	public int Sequence;

}
