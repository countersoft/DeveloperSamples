package com.countersoft.gemini.api.entity;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import com.countersoft.gemini.api.Constants.ProjectTemplatePageType;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Template extends BaseEntity
{

	public String Guid;
	public String Name;
	public String Description;
	public String Publisher;
	public String Published;
	public String Version;

	public ProjectTemplatePageType HomePage;

	public String TemplateKey;

}
