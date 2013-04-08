package com.countersoft.gemini.api.entity;

public class ItemWorkflow
{

	public int ReferenceId;

	public WorkflowItem[] Status;

	public ItemWorkflow()
	{
		Status = new WorkflowItem[0];
	}

}
