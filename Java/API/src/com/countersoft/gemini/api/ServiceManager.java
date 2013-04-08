package com.countersoft.gemini.api;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.jboss.resteasy.spi.ApplicationException;
import org.jboss.resteasy.util.Base64;

import com.countersoft.gemini.api.entity.Issue;

public class ServiceManager
{
	private String _url, _apiUrl, _username, _password, _apiKey;
	private boolean _windowsAuthentication;

	public static void main(String[] args) throws NoSuchAlgorithmException,
			UnsupportedEncodingException, InstantiationException,
			IllegalAccessException
	{		
		ServiceManager smngr = new ServiceManager("http://localhost/gemini", "manager", "manager", "", false);
	}

	public ServiceManager(String url, String username, String password,
			String apiKey, Boolean windowsAuthentication)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InstantiationException, IllegalAccessException
	{
		_url = url.trim();
		if (_url.endsWith("/"))
			_url = _url.substring(0, _url.length());

		_username = username.trim();
		_password = password == null ? "" : password.trim();
		_apiKey = apiKey == null ? "" : apiKey.trim();
		_windowsAuthentication = windowsAuthentication;

		_apiUrl = String.format("%s/api", _url);
		String authorization;

		if (_password.length() > 0)
		{
			authorization = getBase64(String.format("%s:%s", _username,
					getMD5Hash(_password)));
		}
		else
		{
			authorization = getBase64(String
					.format("%s:%s", _username, _apiKey));
		}

		ItemService itemService = new ItemService(authorization, _apiUrl);
		Issue issue = new Issue();
		itemService.DeleteIssue(1774);

		if (username.isEmpty())
		{
			throw new ApplicationException("Specify username", null);
		}
	}

	public static String getMD5Hash(String value)
			throws NoSuchAlgorithmException, UnsupportedEncodingException
	{
		MessageDigest m = MessageDigest.getInstance("MD5");
		byte[] bytes = value.getBytes("UTF-8");

		return Base64.encodeBytes(m.digest(bytes));
	}

	public static String getBase64(String value)
			throws NoSuchAlgorithmException, UnsupportedEncodingException
	{
		return Base64.encodeBytes(value.getBytes("UTF-8"));
	}
}