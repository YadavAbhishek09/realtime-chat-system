package com.abhishek.Chat.Entity;

import java.util.ArrayList;
import java.util.List;


import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;



@Entity
public class Room {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String roomId;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JoinColumn(name = "room_id") // Maps the messages to the room
    private List<Messages> messages = new ArrayList<>();
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRoomId() {
		return roomId;
	}
	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}
	public Room(int id, String roomId) {
		super();
		this.id = id;
		this.roomId = roomId;
	}
	
	public Room(){}
	
	// room will have messages so map to messages 
	

	public List<Messages> getMessages() {
		return messages;
	}
	public void setMessages(List<Messages> messages) {
		this.messages = messages;
	}
	public Room(int id, String roomId, List<Messages> messages) {
		super();
		this.id = id;
		this.roomId = roomId;
		this.messages = messages;
	}
	
	
	
	
	
	

}
