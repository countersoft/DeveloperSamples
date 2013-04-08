package com.countersoft.gemini.api.entity;

public class IssueAudit extends BaseEntity
{

	public int IssueId;
	public int ProjectId;
	public int UserId;
	public String Fullname;

	public com.countersoft.gemini.api.Constants.ItemAttributeVisibility AttributeChanged;
	public String FieldChanged;
	public String ValueBefore;
	public String ValueAfter;
	public String IdBefore;
	public String IdAfter;
	public boolean IsCustom;

}
