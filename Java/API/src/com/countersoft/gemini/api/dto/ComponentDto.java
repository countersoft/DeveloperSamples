package com.countersoft.gemini.api.dto;

import com.countersoft.gemini.api.entity.Component;

public class ComponentDto extends BaseDto
{
	public Component BaseEntity;
	public ProjectDto Project;
	public int HierarchyLevel;
	public String ParentComponentName;
}
