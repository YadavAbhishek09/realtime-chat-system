import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import 'react-hot-toast';
import { Toaster } from "react-hot-toast";
import AppRoutes from "./AppRoutes.jsx";
import { ChatProvider } from "./CONTEXT/ChatContext.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Toaster/>
  {/* <App/> */}
  <ChatProvider>
    <AppRoutes/>
  </ChatProvider>
    

  </BrowserRouter>
);
