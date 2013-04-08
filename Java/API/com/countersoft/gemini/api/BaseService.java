package com.countersoft.gemini.api;

import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation.Builder;
import javax.ws.rs.core.Response;

import org.apache.commons.io.IOUtils;
import org.jboss.resteasy.client.jaxrs.ResteasyClient;
import org.jboss.resteasy.client.jaxrs.ResteasyClientBuilder;
import org.jboss.resteasy.client.jaxrs.ResteasyWebTarget;

public class BaseService
{

	private String _authentication;
	private String _baseUrl;
	private Object test;

	public BaseService(String authentication, String baseUrl)
	{
		_authentication = authentication;
		_baseUrl = baseUrl;
	}

	public <T, R> R GetResponse(String endPoint, String method, T data,
			Class<R> clazz) throws NoSuchAlgorithmException,
			UnsupportedEncodingException, InstantiationException,
			IllegalAccessException
	{
		ResteasyClient client = new ResteasyClientBuilder().build();
		ResteasyWebTarget target = client.target(String.format("%s/%s",
				_baseUrl, endPoint));
		Builder request = target.request();
		request.header("Authorization",
				String.format("Basic %s", _authentication));
		Response response;

		switch (method.toLowerCase())
		{
			case "get":
				response = request.get();
			break;
			case "post":
				response = request
						.post(Entity.entity(data, "application/json"));
			break;
			case "put":
				response = request.put(Entity.entity(data, "application/json"));
			break;
			case "delete":
				response = request.delete();
				return null;
			default:
				throw new UnsupportedOperationException();

		}
		int status = response.getStatus();
		if (status == 200)
		{			
			return (R) response.readEntity(clazz);
		}
		else
		{
			
		}

		return null;
	}
	/*
	 * public <T> T[] GetResponseArray(String endPoint, String method, T data,
	 * Class<T[]> clazz) throws NoSuchAlgorithmException,
	 * UnsupportedEncodingException, InstantiationException,
	 * IllegalAccessException { ResteasyClient client = new
	 * ResteasyClientBuilder().build(); //ResteasyWebTarget target =
	 * client.target(_apiUrl + "/items/48"); ResteasyWebTarget target =
	 * client.target(endPoint); Builder request = target.request();
	 * request.header("Authorization", String.format("Basic %s",
	 * ServiceManager.getBase64(String.format("%s:%s", "manager",
	 * ServiceManager.getMD5Hash("manager"))))); Response response =
	 * request.get(); if(response.getStatus() == 200) { return
	 * (T[])response.readEntity(clazz);
	 * 
	 * } return null; }
	 */

}
