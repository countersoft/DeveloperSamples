package com.countersoft.gemini.api.entity;

import com.countersoft.gemini.api.Constants.SourceControlProvider;

public class CodeCommit extends BaseEntity
{
	public int IssueId;
    public String Fullname;
    public String Comment;
    public String Data;
    public SourceControlProvider Provider;
}
