package com.countersoft.gemini.api.entity;

public class BaseAttachment extends BaseEntity
{
	public int ProjectId;
	public String Name;
	public byte[] Content;
	public String ContentType;
	public int ContentLength;
	public String Size;
}