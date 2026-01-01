package com.abhishek.Chat.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker // ye ek broker ya intermediator hota hai jo server par message ko route karta
								// hai.
public class webSocketConfig implements WebSocketMessageBrokerConfigurer {
	 
	/* WebSocketConfigurer ek interface hai jo kuch aise methods provide karta hai
	 jis se ham message handling configure kar sakte hai with STOMP(simple text
	 oriented messaging protocol. from web socket client  */
	

	@Override
	public void configureMessageBroker(MessageBrokerRegistry config) {
		config.enableSimpleBroker("/topic");   //अगर client message भेजेगा, तो /app prefix के साथ होगा।
		config.setApplicationDestinationPrefixes("/app");  //अगर server किसी client को message भेजेगा, तो वो /topic prefix के साथ होगा
	}

	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
	
		registry.addEndpoint("/chat")			// url for connection establishment 
							.setAllowedOrigins("http://localhost:5173")
							.withSockJS();
	}

	

	
	
	
	
	
	
	

}
