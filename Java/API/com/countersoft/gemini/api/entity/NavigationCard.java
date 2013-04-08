package com.countersoft.gemini.api.entity;

import java.util.Date;

import com.countersoft.gemini.api.Constants.ProjectTemplatePageType;

public class NavigationCard extends BaseEntity
{
	public int ProjectId;
    public int IssueId;
    public int UserId;
    public ProjectTemplatePageType CardType;
    public String Key;
    public String Title;
    public String Options;
    public String Url;
    public int OriginatorCardId;
    public Date LastSeen;
    public int BadgeCount;
    public String SharedWithGroups;
    public int Sequence;
    public boolean IsGenerated;
    public String BadgeCountLabel;
    public String ShortDisplay;
    public String Color;
    public boolean VisibleToAnonymousUser;
    public boolean VisibleToAuthenticatedUser;
}
