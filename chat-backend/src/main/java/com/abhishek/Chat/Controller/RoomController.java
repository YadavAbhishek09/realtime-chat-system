package com.abhishek.Chat.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.GetExchange;

import com.abhishek.Chat.Entity.Messages;
import com.abhishek.Chat.Entity.Room;
import com.abhishek.Chat.Repository.RoomRepo;

import jakarta.websocket.server.PathParam;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/api/rooms")
public class RoomController {
	
	
	private RoomRepo repo;
	public RoomController(RoomRepo repo)
	{
		this.repo=repo;
	}
	
	
	// create room
     @PostMapping()
	public ResponseEntity<?> createRoom(@RequestBody String roomId)
	{
		
    	 
    	 roomId = roomId.replace("=", ""); // Remove '=' if it exists
    	

		
		
		if (repo.findByRoomId(roomId) != null ) {
			
			return ResponseEntity.badRequest().body("Room is already Present ");
		}
		Room room = new Room();
	  room.setRoomId(roomId.trim());
	  
	  repo.save(room);
	  
	  return ResponseEntity.status(HttpStatus.CREATED).body(room);
	}
	  
	// get room  --->  join room
	
	@GetMapping("/{roomId}")
	public ResponseEntity<?> joinRoom(@PathVariable String roomId)
	{
		Room room = repo.findByRoomId(roomId);
		
		if (room == null) {
			
			return ResponseEntity.badRequest().body(" OOPs room nhi mila ");
			
		}
		
		return ResponseEntity.ok(room);
		
		
	}
	// get message of room 
	
	@GetMapping("/{roomId}/messages")
	public ResponseEntity<List<Messages>> getMessages(@PathVariable String roomId )
	{
		Room room = repo.findByRoomId(roomId);
		
		if (room == null) {
			
			return ResponseEntity.badRequest().build();
			
		}
		
		// get messages 
		
		   
		

	 
		List<Messages> messages = room.getMessages();
		
		
//		int start = Math.max(0, messages.size() - (page+1)* size);
//		int end = Math.min(messages.size(), size+start);
//		
//		List<Messages> paginatedMessages = messages.subList(start, end);
//		
//		System.out.println("Total messages: " + messages.size());
//		System.out.println("Start index: " + start);
//		System.out.println("End index: " + end);
//		System.out.println("Paginated messages: " + paginatedMessages);
//
//		
//		System.out.println(messages.size());
//		
//		return ResponseEntity.ok(paginatedMessages);
		
		return ResponseEntity.ok(messages);
		
		
		
		
	}
	
			
			
			
			
		
	
	
	
	
	

}
