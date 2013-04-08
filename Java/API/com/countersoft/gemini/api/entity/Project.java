package com.countersoft.gemini.api.entity;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import com.countersoft.gemini.api.Constants.AssignmentMode;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Project extends BaseEntity
{

	public String Code;
	public String Name;
	public String Description;
	public boolean ReadOnly;
	public int LabelId;
	public int LeadId;
	public boolean DescriptionRequired;
	public int PermissionId;
	public int WorkflowId;
	public AssignmentMode ResourceAssignmentMode;
	public AssignmentMode ComponentAssignmentMode;
	public int TemplateId;
	public String Color;

	public ProjectOptions Options;

}