package com.countersoft.gemini.api.entity;

import java.util.Date;

public class Version extends BaseEntity
{

	public int ProjectId;
	public String Name;
	public String Label;
	public boolean Released;
	public int Sequence;
	public Date StartDate;
	public Date ReleaseDate;
	public int ParentId;

}
