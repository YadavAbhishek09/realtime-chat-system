import React, {useState } from "react";
import icon from "../Icon/dialog.png";
import toast from "react-hot-toast";
import { createRoomApi, joinRoomApi } from "../service/RoomService";
import { useNavigate } from "react-router-dom";
import ChatPage from "./ChatPage";
import { useChatContext } from "../CONTEXT/ChatContext";


const RoomCreateJoinChat = () => {
  const navigate = useNavigate();

  const { roomId,name,connected,setroomId,setName,setConnected} = useChatContext();
  const [detail, setDetails] = useState({
    name: "",
    roomId: "",
  });

  function handleChange(event) {
    setDetails({ ...detail, [event.target.name]: event.target.value });
  }
  function FormValidate() {
    
   

    if (detail.name === ""|| detail.roomId === "") {

      
      return false;
     
    }
    return true;
    
    
    }
  

  async function createRoom() {
    
    if (FormValidate()) {
      // create room \

      try {
        const response = await createRoomApi(detail.roomId);
        console.log(response);
        toast.success("Room Created Successfully ! ");

        // room create hone ke baad seedhe redirect kar do chat page

        setName(detail.name);
        setroomId(response.roomId);
        setConnected(true);
        
        navigate('/chat');
        
       
      } catch (error) {
        console.log(error);
        if (error.status == 400) {
          toast.error("Room Already Exists! ");
        } else toast("Error In Creating Room !");
      }
    } else {
      toast.error("Invalid input");
    }
  }
  async function joinRoom() {
    if (FormValidate()) {
     // join room 

      try {
        const room = await joinRoomApi(detail.roomId.trim());
        toast.success("Room Joined !");

        // console.log(room);

        setroomId(room.roomId);
        setConnected(true)
        setName(detail.name);

          navigate('/chat')
      } catch (error) {
       if (error.status==400) {
         toast.error(error.response.data);
        
       }
       else
          toast.error("Error While Joining Room! ")
      }
    } else {
     toast.error("Invalid Input");
   }  
  }
  return (
    <div className="min-h-screen flex justify-center items-center  ">
      <div className="p-5 w-80 rounded dark:bg-gray-900 shadow flex-col border-gray-600 ">
        <div className="flex justify-center">
          <img src={icon} alt=" Baate Karo !" className="w-30 h-10" />
        </div>

        <h1 className="text-2xl font-semibold text-center">
          
          Join Room / Create Room{" "}
        </h1>

        {/* Name Field  */}
        <div className="m-5">
          <label htmlFor="name" className="mb-2 font-medium block">
            Your Name
          </label>
          <input
           
            onChange={handleChange}
            name="name"
            type="text"
            value={detail.name}
            id="name"
            className="px-4 py-2 border  dark:border-gray-700 rounded-lg focus:outline-none focus: ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        {/* Room Id field  */}

        <div className="m-5">
          <label htmlFor="roomId" className="mb-2 font-medium block">
            Room ID
          </label>
          <input
            
            onChange={handleChange}
            name="roomId"
            value={detail.roomId}
            type="text"
            id="roomId"
            className="px-4 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus: ring-2 focus:ring-blue-500 text-black"
          />
        </div>
        {/* buttons  */}
        <div className="flex gap-2 justify-center">
          <button
            type="submit"
            onClick={joinRoom}
            className="px-5 py-1 dark:bg-blue-500 hover:dark:bg-blue-900 rounded-lg "
          >
            {" "}
            Join
          </button>
          <button
            type="submit"
            onClick={createRoom}
            className="px-5 py-1 dark:bg-orange-500 hover:dark:bg-orange-900 rounded-lg "
          >
            {" "}
            Create{" "}
          </button>
        </div>
      </div>

      
     
    </div>
  );
};

export default RoomCreateJoinChat;
