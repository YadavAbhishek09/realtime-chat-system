package com.abhishek.Chat.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.Chat.Entity.Room;

public interface RoomRepo extends JpaRepository<Room, String> {
	
//	get room using roomId
	
 	Room findByRoomId(String roomId);

}
