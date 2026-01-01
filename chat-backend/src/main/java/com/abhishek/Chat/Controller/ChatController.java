package com.abhishek.Chat.Controller;

import java.time.LocalDateTime;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.Chat.Entity.Messages;
import com.abhishek.Chat.Entity.Room;
import com.abhishek.Chat.Repository.RoomRepo;
import com.abhishek.Chat.payload.MessageRequest;

import jakarta.transaction.Transactional;

@RestController
@CrossOrigin("http://localhost:5173")
public class ChatController {
	
	private RoomRepo repo;
	
	public ChatController(RoomRepo repo)
	{
		this.repo= repo;
	}
	
	// for sending and recieving messages 
	@Transactional
    @MessageMapping("sendMessage/{roomId}")  // app/sendMessage/roomId par message bheja jayega 
    @SendTo("/topic/room/{roomId}")          // jisne bhi topic/room/roomId ko subscribe kiya hoga bo dekh payega messages
    public Messages sendMessages(
    		@RequestBody MessageRequest request,
    		@DestinationVariable String roomId)
    {
    	Room room = repo.findByRoomId(roomId);
    	
    	
    	System.out.println(request.getContent());
    	System.out.println(request.getSender());
    	
    	
    	
    	
    	Messages messages = new Messages();
    	messages.setContent(request.getContent());
    	messages.setSender(request.getSender());
    	messages.setTimeStamp(LocalDateTime.now());
    	

       
    	 
    	
       
    	
    	if (room!=null) {
    		
    		room.getMessages().add(messages);
    		repo.save(room);
			
		}
    	else
    		
    	{
    		throw new RuntimeException("Room Hi nhi Mila !!!");
    	}
    	
    	
    	return messages;
    	
    	
    	
    	
    }

}
