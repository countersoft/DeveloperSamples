package com.countersoft.gemini.api.entity;

public class ScreenField
{

	public enum FieldType
	{
		Internal, CustomField, App
	}

	public int[] ProjectGroups;
	public boolean Required;
	public int Sequence;
	public String Label;
	public String Id;
	public FieldType Type;

}
