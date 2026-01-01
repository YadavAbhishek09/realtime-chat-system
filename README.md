# Real-Time Chat System

A real-time, room-based chat application built using **Java, Spring Boot, and React**.
The system allows users to create or join chat rooms and exchange messages instantly
using WebSocket-based communication.

This project focuses on real-time messaging, session management, and clean
backend–frontend separation, following product-grade engineering practices.

---

## Project Structure

realtime-chat-system/
├── chat-backend/
└── chat-frontend/


- **chat-backend**: Spring Boot backend handling WebSocket connections and REST APIs
- **chat-frontend**: React frontend providing the user interface

---

## Problem Statement

Design and implement a real-time chat system that supports:
- Multiple chat rooms
- Concurrent users
- Low-latency message delivery
- Clean separation of frontend and backend responsibilities

---

## Tech Stack

### Backend
- Java
- Spring Boot
- Spring WebSocket
- REST APIs

### Frontend
- React
- JavaScript

### Communication
- WebSockets for real-time messaging

---
## High-Level Architecture
Client (React)
     |
 WebSocket / REST
     |
Spring Boot Backend
     |
 Room & Session Management



### Architectural Principles
- Event-driven communication
- Stateless REST APIs combined with stateful WebSocket sessions
- Clear separation of concerns
- Backend-focused system design

---

## Core Features

### Room Management
- Create chat rooms
- Join existing rooms
- Broadcast messages within a room

### Real-Time Messaging
- WebSocket-based bidirectional communication
- Instant message delivery to all users in a room
- Supports multiple concurrent users

### Session Handling
- WebSocket session lifecycle management
- Handles user connect and disconnect events
- Cleans up sessions when users leave rooms

---

## Backend Design (chat-backend)

### WebSocket Flow
1. Client establishes a WebSocket connection
2. User joins a specific room
3. Messages are routed based on room ID
4. Messages are broadcast to all connected users in the room
5. Sessions are cleaned up on disconnect

### Concurrency Considerations
- Supports multiple active WebSocket sessions
- Thread-safe message broadcasting
- Proper handling of concurrent room access

---

## API & Communication Endpoints

### WebSocket Endpoint
- `/chat` – WebSocket endpoint for real-time communication

### REST Endpoints (if applicable)
- Create room
- List available rooms

---

## Error Handling

- Graceful handling of invalid room joins
- Handles WebSocket connection failures
- Safe cleanup of disconnected sessions

---

## How to Run Locally

### Backend (chat-backend)

1. Navigate to backend directory:
2. Run the Spring Boot application:
3. Backend runs on: http://localhost:8080


---

### Frontend (chat-frontend)

1. Navigate to frontend directory: cd chat-frontend
2. Install dependencies: npm install
3. Start the application
4. Open browser at:  http://localhost:3000
  

---

## Current Limitations

- Messages are stored in-memory
- No authentication or authorization
- No message persistence
- Not horizontally scalable in current form

---

## Future Improvements

- Persist messages using a database
- Add user authentication and authorization
- Introduce Redis-based pub/sub for horizontal scaling
- Message ordering guarantees
- Rate limiting and abuse prevention
- Dockerization for deployment
- Monitoring and logging

---

## Engineering Learnings

- Practical use of WebSockets for real-time communication
- Managing concurrent client sessions
- Designing event-driven backend systems
- Coordinating frontend and backend integration

---

## Author

**Abhishek Kumar**  
Java Backend  Full-Stack Engineer



