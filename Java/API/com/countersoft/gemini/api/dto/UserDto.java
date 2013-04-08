package com.countersoft.gemini.api.dto;

import org.codehaus.jackson.annotate.JsonIgnore;

import com.countersoft.gemini.api.entity.NavigationCard;
import com.countersoft.gemini.api.entity.ProjectGroup;
import com.countersoft.gemini.api.entity.User;

public class UserDto extends BaseDto
{
	public User BaseEntity;
	public String CultureInfo;
	public String DateFormat;
	public String Fullname;
	public String GeminiDateFormat;
	public boolean IsGlobalAdmin;
	public NavigationCard[] NavigationCards;
	public ProjectGroup[] ProjectGroups;
	public ProjectDto[] RecentProjects;
	
	@JsonIgnore
	public Object TimeZone;
}
