package com.countersoft.gemini.api.entity;

import java.util.Date;

import org.codehaus.jackson.annotate.JsonIgnore;

public class User extends BaseEntity
{
	public String Username;
	public String OpenId;
	public String Firstname;
	public String Surname;
	public String Email;
	public String Culture;
	public String Timezone;
	public String Language;
	public String Theme;
	public String IpLastLogin;
	public String IpRegisterLogin;
	public Date PreviouslyLoggedIn;
	public Date LastLoggedIn;
	public byte[] Password;
	public byte[] PasswordReset;
	public String ApiKey;
	public boolean EmailMe;
	public boolean EmailMeMyChanges;
	public String Settings;
	public String Fullname;
	public ProjectGroupMembership[] ProjectGroups;

}
