import React from 'react'
import { Route,Routes } from 'react-router-dom'
// import App from './App'
import ChatPage from './component/ChatPage'
import RoomCreateJoinChat from './component/RoomCreateJoinChat'
import About from './component/About'
import Contact from './component/Contact'
import Nav from './component/Nav'

const AppRoutes = () => {
  return (
    <>
        
         <Nav/>
         <Routes>
          <Route path='/' element={<RoomCreateJoinChat/>}/>
          <Route path='/chat' element={<ChatPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
       </Routes>  
    </>
  )
}

export default AppRoutes