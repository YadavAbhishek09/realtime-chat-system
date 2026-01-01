package com.abhishek.Chat.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
@Entity
public class Messages {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String sender;
	private String content;
	private LocalDateTime timeStamp;
	
	
	public Messages(String sender, String content) {
		super();
		this.sender = sender;
		this.content = content;
		this.timeStamp = LocalDateTime.now();
	}

//
//	public Messages(String sender, String content, LocalDateTime timeStamp) {
//		super();
//		this.sender = sender;
//		this.content = content;
//		this.timeStamp = timeStamp.now();
//	}


	public String getSender() {
		return sender;
	}


	public void setSender(String sender) {
		this.sender = sender;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}


	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp.now();
	}
	
	public Messages()
	{
		
	}
	
	  @PrePersist
	    private void onCreate() {
	        this.timeStamp = LocalDateTime.now();
	        
	        System.err.println(this.timeStamp);
	    }
	

	
	
	
	
	
	
	

}
