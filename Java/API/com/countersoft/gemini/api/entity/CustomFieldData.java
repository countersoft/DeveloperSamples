package com.countersoft.gemini.api.entity;

import java.util.Date;

public class CustomFieldData extends BaseEntity
{
	public int CustomFieldId;
    public int UserId;
    public int IssueId;
    public int ProjectId;
    public String Data;
    public double NumericData;
    public Date DateData;
}
