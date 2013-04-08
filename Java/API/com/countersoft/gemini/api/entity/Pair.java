package com.countersoft.gemini.api.entity;

public class Pair<K, V>
{
	public K Key;
	public V Value;

	public Pair(K key, V value)
	{
		Key = key;
		Value = value;
	}
	
	public Pair()
	{
		
	}

	/*
	 * public Pair() { Key = default(K); Value = default(V); }
	 */
}
