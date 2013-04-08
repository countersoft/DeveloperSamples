package com.countersoft.gemini.api.dto;

import com.countersoft.gemini.api.entity.Version;

public class VersionDto extends BaseDto
{

	public ProjectDto Project;
	public int HierarchyLevel;
	public String ParentVersionName;
	public Version BaseEntity;

}
