import React, { useEffect, useRef, useState } from "react";
import "react-icons";
import { MdAttachFile, MdSend } from "react-icons/md";
import { useChatContext } from "../CONTEXT/ChatContext";
import { useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import { baseURL } from "../config/AxiosHelper";
import { Stomp } from "@stomp/stompjs";
import toast from "react-hot-toast";
import { getmessageApi } from "../service/RoomService";
import { timeAgo } from "../config/TimeHelper";



const ChatPage = () => {
  const [input, setInput] = useState(null);
  const [stompClient, setstompClient] = useState([]);
  const inputref = useRef(null);
  const chatBoxRef = useRef(null);
  const [messages, setMessages] = useState([

  ]);

  
  
  
  
  const { roomId, name, connected, setroomId, setName ,setConnected } =
  useChatContext();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!connected) {
      navigate("/");
    }
  }, [connected, roomId, name]);
  
  // page init
  
  // messages load karne honge
  // loadMessages();
  useEffect(() => {
    async function loadmessages() {
      try {
        const Oldmessages = await getmessageApi(roomId);
        console.log(Oldmessages);
        setMessages(Oldmessages);
      } catch (error) {
        console.log(error);
      }
    }
    loadmessages();
  }, [roomId]);
  
  // StompClient ko init karna hoga
  // subscribe kar lenge jis se ki hame server se messagges milte rahe ...
  useEffect(() => {
    const connectWebSocket = () => {
      // sock js for fallback
      const client = Stomp.over(() => new SockJS(`${baseURL}/chat`));
      
      client.connect({}, () => {
        setstompClient(client);
        toast.success("connected");
        
        client.unsubscribe(`/topic/room/${roomId}`);
        
        client.subscribe(`/topic/room/${roomId}`, (msg) => {
          const newMsg = JSON.parse(msg.body);
          setMessages((prev) => [...prev, newMsg]);
          // rest of work after successfully recieving message
        });
      });
    };
     if (connected) {
      connectWebSocket();
      
     }
    
    // clean up when roomId changes
    
    
    
  }, [roomId]);
  
  // send ko handle karna hoga
  
  const sendMessage = async () => {
    if (stompClient && connected && input.trim()) {
      console.log(input);
      const message = {
        roomId: roomId,
        sender: name,
        content: input,
      
      };
      
      stompClient.send(
        `/app/sendMessage/${roomId}`,
        {},
        JSON.stringify(message)
      );
      // setMessages((prev)=>[...prev,message])
      
      setInput("");
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scroll({
        top:chatBoxRef.current.scrollHeight,
        behavior:"smooth"
      })
    }
  }, [messages]);


  const handleLogout = ()=>{
    
    stompClient.disconnect();
    navigate('/');
  }

 
 
  
  

  return (
    <div className="h-screen bg-gray-700">
      {/* HEADER PORTION  */}

      <header className="flex justify-around items-center w-full fixed  dark:bg-gray-900 px-2 py-3">
        <div>
          <h1 className="text-xl font-semibold">
            Room : <span>{roomId} </span>
          </h1>
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            User : <span> {name} </span>
          </h1>
        </div>
        <div>
          <button onClick={handleLogout} className=" dark: bg-red-500 hover:dark:bg-red-700 px-3 py-2 rounded">
            Leave Room
          </button>
        </div>
      </header>

      {/* MAIN SECTION  */}

      <main ref={chatBoxRef} className="dark:bg-slate-400 h-screen w-2/3 mx-auto flex flex-col overflow-auto pt-20 pb-16 bg-gray-700 px-4">
        <div className="" > 
          
          {messages.map((message, index) => (

             
            <div
              key={index}
              className={`flex py-2 ${
                message.sender === `${name}` ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-6 py-2 rounded-lg text-white ${
                  message.sender === `${name}` ? "bg-blue-700" : "bg-gray-800"
                }`}
              >
                <div className="">
                 
                  <div className="text-yellow-200 ">{message.sender}</div>
                  <div className="font-bold ">{message.content}</div>
                    <p className="text-xs text-red-100">{timeAgo(message.timeStamp)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER SECTION */}

      <div className="z-10 fixed bottom-0 h-10 w-full overflow-hidden dark:bg-inherit">
        <div className="dark:bg-gray-800  border-gray-100 h-full mx-auto w-2/3 flex rounded-full gap-4">
          <input
             onKeyDown={(e)=>{
                if (e.key==="Enter") {
                  sendMessage();
                  
                }
             }} 
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Type Your message here "
            className="dark:border-gray-700 dark:bg-gray-800 w-full h-full rounded-full focus:outline-none relative left-4"
          />
          <div className="flex dark:bg-green-500 rounded-full">
            <button
              className="hover:dark:dark:bg-green-600 px-3 py-2 rounded-full "
              title="Attach file"
            >
              {" "}
              <MdAttachFile />
            </button>
            <button
              onClick={sendMessage}
              title="send"
              className="hover:dark:dark:bg-green-600 px-3 py-2 rounded-full "
            >
              <MdSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
