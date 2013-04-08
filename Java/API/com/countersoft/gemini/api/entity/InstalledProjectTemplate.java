package com.countersoft.gemini.api.entity;

import java.util.Date;

public class InstalledProjectTemplate extends BaseEntity
{
	public String TemplateKey;
	public String Name;
	public String Description;
	public com.countersoft.gemini.api.Constants.HomePageType HomePageType;
	public String Publisher;
	public String Published;
	public String VersionNumber;
	public Template Template;
}