package com.countersoft.gemini.api;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

import com.countersoft.gemini.api.dto.ComponentDto;
import com.countersoft.gemini.api.dto.ProjectDto;
import com.countersoft.gemini.api.dto.VersionDto;
import com.countersoft.gemini.api.entity.Component;
import com.countersoft.gemini.api.entity.Project;
import com.countersoft.gemini.api.entity.Version;

public class ProjectService extends BaseService
{

	public ProjectService(String authentication, String baseUrl)
	{
		super(authentication, baseUrl);
	}

	/* Start of projects */
	public ProjectDto[] GetProjects() throws NoSuchAlgorithmException,
			UnsupportedEncodingException, InstantiationException,
			IllegalAccessException
	{
		return GetResponse("projects", "GET", null, ProjectDto[].class);
	}

	public ProjectDto GetProject(int projectId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + projectId, "GET", null,
				ProjectDto.class);
	}

	public ProjectDto CreateProject(Project project)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects", "POST", project, ProjectDto.class);
	}

	public ProjectDto UpdateProject(Project project)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects", "PUT", project, ProjectDto.class);
	}

	public ProjectDto DeleteProject(int projectId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + projectId, "DELETE", null,
				ProjectDto.class);
	}

	/* End of projects */

	/* Start of components */
	public ComponentDto[] GetComponents(int projectId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + projectId + "/components", "GET",
				null, ComponentDto[].class);
	}

	public ComponentDto GetComponent(int projectId, int componentId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + projectId + "/components/"
				+ componentId, "GET", null, ComponentDto.class);
	}

	public ComponentDto CreateComponent(Component component)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + component.ProjectId + "/components",
				"POST", component, ComponentDto.class);
	}

	public ComponentDto UpdateComponent(Component component)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + component.ProjectId + "/components/"
				+ component.Id, "PUT", component, ComponentDto.class);
	}

	public ComponentDto DeleteComponent(int projectId, int componentId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + projectId + "/components/"
				+ componentId, "DELETE", null, ComponentDto.class);
	}

	/* End of components */

	/* Start of versions */
	public VersionDto[] GetVersions(int projectId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + projectId + "/versions", "GET", null,
				VersionDto[].class);
	}

	public VersionDto GetVersion(int projectId, int versionId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + projectId + "/versions/" + versionId,
				"GET", null, VersionDto.class);
	}

	public VersionDto CreateVersion(Version version)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + version.ProjectId + "/versions",
				"POST", version, VersionDto.class);
	}

	public VersionDto UpdateVersion(Version version)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		return GetResponse("projects/" + version.ProjectId + "/versions/"
				+ version.Id, "PUT", version, VersionDto.class);
	}

	public void DeleteVersion(int projectId, int versionId)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		GetResponse("projects/" + projectId + "/versions/" + versionId,
				"DELETE", null, VersionDto.class);
	}
	/* End of versions */
}