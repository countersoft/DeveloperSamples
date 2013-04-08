package com.countersoft.gemini.api.dto;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import com.countersoft.gemini.api.entity.InstalledProjectTemplate;
import com.countersoft.gemini.api.entity.Project;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProjectDto extends BaseDto
{
	public Project BaseEntity;
	public InstalledProjectTemplate Template;
	public String HomePageUrl;
	public String Label;
	public PermissionSetDto Permissions;
}