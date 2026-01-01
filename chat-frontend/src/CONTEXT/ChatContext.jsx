import { createContext, useContext, useState } from "react";

const Chatcontext = createContext();
export const ChatProvider = ({ children }) => {
  const [roomId, setroomId] = useState("");
  const [name, setName] = useState("");
  const [connected,setConnected] = useState(false);

  return (
    <Chatcontext.Provider value={{roomId, name,connected, setroomId,setName,setConnected }}>
      {children}
    </Chatcontext.Provider>
  );
};

// const useChatContext = () => {
//   useContext(Chatcontext);
// };
// export default useChatContext;

export const useChatContext = () => {
    const context = useContext(Chatcontext);
  
    if (!context) {
      throw new Error("useChatContext must be used within a ChatProvider");
    }
  
    return context;
}