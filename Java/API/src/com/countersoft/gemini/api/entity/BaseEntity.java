package com.countersoft.gemini.api.entity;

import java.util.Date;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class BaseEntity extends Base
{

	public boolean Active;
	public boolean Archived;
	public String Created;
	public boolean Deleted;
	public boolean HasErrors;
	public boolean IsExisting;
	public boolean IsNew;
	public String Revised;

}
