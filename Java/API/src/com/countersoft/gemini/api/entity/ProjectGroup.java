package com.countersoft.gemini.api.entity;

public class ProjectGroup extends BaseEntity
{
	public String Name;
	public String Description;
	
	public ActiveDirectoryGroupMapping[] ADGroups;
	
	public ProjectGroupMembership[] Members;
	public ProjectGroupMembership[] Members2;
	
	public int[] InteractionGroups;
}
