package com.countersoft.gemini.api;

public class Constants
{
	public enum IssueStatusType
	{
		NONE(0), FINAL(1), RESOURCED(2), INPROGRESS(4);

		private int type;

		IssueStatusType(int type)
		{
			this.type = type;
		}

		public int type()
		{
			return type;
		}
	};

	public enum ProjectTemplatePageType
	{
		CUSTOM(0), ITEMS(1), PLANNER(2), ROADMAP(3), CHANGELOG(4), BURNDOWN(5), TESTING(
				6), REPORTS(7), DOCUMENTS(8), ACTIVITY(9), NONE(10), ITEM(11), ACTIVITYOVERDUE(
				12), ACTIVITYDUETODAY(13), ACTIVITYDUETOMORROW(14), ACTIVITYOPENEDRECENTLY(
				15), ACTIVITYCLOSEDRECENTLY(16), MYWORK(17), MYWATCHED(18), TIMELINE(
				19), CALENDAR(20), ALLPROJECTSHOME(21);

		private int type;

		ProjectTemplatePageType(int type)
		{
			this.type = type;
		}

		public int type()
		{
			return type;
		}
	};

	public enum AssignmentMode
	{
		SINGLE(0), MULTIPLE(1);

		private int mode;

		AssignmentMode(int mode)
		{
			this.mode = mode;
		}

		public int type()
		{
			return mode;
		}
	};

	public enum IssueOriginatorType
	{
		GEMINI(0), EMAIL(1), URL(2), TESTRUN(3), REPEAT(4), API(5);

		private int type;

		IssueOriginatorType(int type)
		{
			this.type = type;
		}

		public int type()
		{
			return type;
		}
	};

	public enum IssueOriginatorReply
	{
		NONE(0), ACKNOWLEDGE(1), NOTIFY(2), BREEZE(3);

		private int reply;

		IssueOriginatorReply(int reply)
		{
			this.reply = reply;
		}

		public int type()
		{
			return reply;
		}
	};

	public enum SystemFilterTypes
	{
		NOTYPE(0), OPENISSUES(1), CLOSEDISSUES(2), LATEISSUES(3), RECENTLYCREATEDISSUES(
				4), RECENTLYUPDATEDISSUES(5), DUEYESTERDAYISSUES(6), DUETODAYISSUES(
				7), DUETOMORROWISSUES(8), DUENEXT7DAYSISSUES(9), DUENEXT14DAYSISSUES(
				10), DUENEXT30DAYSISSUES(11), SUBMITTEDBYMEISSUES(12), TOSYNCH(
				13), DUENEXT7DAYSISSUESAFTERTOMORROW(14), RECENTLYCLOSEDISSUES(
				15);

		private int type;

		SystemFilterTypes(int type)
		{
			this.type = type;
		}

		public int type()
		{
			return type;
		}
	}

	public enum ItemAttributeVisibility
	{
		ANY(0), ISSUEKEY(1), DESCRIPTION(2), TITLE(3), SEVERITY(4), VISIBILITY(
				5), REPORTEDBY(6), ASSIGNEDTO(7), TYPE(8), PRIORITY(9), STATUS(
				10), RESOLUTION(11), FIXEDINVERSION(12), COMPONENT(13), PERCENTCOMPLETE(
				14), ESTIMATEDEFFORT(15), STARTDATE(16), DUEDATE(17), DATECREATED(
				18), DATEREVISED(19), RESOLVEDDATE(20), CLOSEDDATE(21), VOTES(
				22), AFFECTEDVERSIONS(23), SOURCE(24), REPEAT(25), PROJECTCODE(
				26), PROJECTNAME(27), CALCULATEDAGE(28), CALCULATEDDAYSLEFT(29), CALCULATEDTIMELOGGED(
				30), CALCULATEDTIMEREMAINING(31), CALCULATEDTIMEEXCEEDED(32), ASSOCIATEDTIME(
				33), ASSOCIATEDSOURCECONTROL(34), ASSOCIATEDWATCHERS(35), ASSOCIATEDCOMMENTS(
				36), ASSOCIATEDHISTORY(37), ASSOCIATEDATTACHMENTS(38), ASSOCIATEDLINKS(
				39), ASSOCIATEDHIERARCHY(40), ASSOCIATEDTESTCASES(41), POINTS(
				42), ASSOCIATEDCUSTOMFIELDS(43), ELAPSED(44);

		private int attribute;

		ItemAttributeVisibility(int attribute)
		{
			this.attribute = attribute;
		}

		public int type()
		{
			return attribute;
		}
	};

	public enum HomePageType
	{
		CUSTOM(0), ITEMS(1), PLANNER(2), ROADMAP(3), CHANGELOG(4), BURNDOWN(5), TESTING(
				6), REPORTS(7), DOCUMENTS(8), ACTIVITY(9), NONE(10), ITEM(11), ACTIVITYOVERDUE(
				12), ACTIVITYDUETODAY(13), ACTIVITYDUETOMORROW(14), ACTIVITYOPENEDRECENTLY(
				15), ACTIVITYCLOSEDRECENTLY(16), MYWORK(17), MYWATCHED(18), TIMELINE(
				19), CALENDAR(20), ALLPROJECTSHOME(21);

		private int type;

		HomePageType(int type)
		{
			this.type = type;
		}

		public int type()
		{
			return type;
		}
	}

	public enum MemberType
	{
		NULL(0), USER(1), GLOBALGROUP(2), PROJECTGROUP(3);

		private int type;

		MemberType(int type)
		{
			this.type = type;
		}

		public int type()
		{
			return type;
		}
	}

	public enum SourceControlProvider
	{
		NULL(0), TFS2010(1), TFS2012(2), GITHUB(3), GIT(4), SVN(5), MERCURIAL(6);

		private int provider;

		SourceControlProvider(int provider)
		{
			this.provider = provider;
		}

		public int provider()
		{
			return provider;
		}
	}
	
	public enum SortDirection
	{
		NONE(0), ASCENDING(1), DESCENDING(2);
		
		private int direction;
		SortDirection(int direction)
		{
			this.direction = direction;
		}
		
		public int direction()
		{
			return direction;
		}
	}

	public Constants()
	{
		// TODO Auto-generated constructor stub
	}

}
