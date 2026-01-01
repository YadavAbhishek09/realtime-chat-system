import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Nav = () => {

    


  return (
    <>
        <div className='bg-gray-500 flex justify-center items-center p-2 fixed w-full'>
           <div  className='w-full'>
              <h1 className='ml-1 font-semibold font-serif'>
                Explore Yourself !!!
              </h1>
           </div>

           
           

            <div className="flex justify-center gap-10 mr-1">
                <NavLink  to='/' style={( {isActive })=>({
                  color:isActive?'yellow':'beige'
                })}className='a'> Home </NavLink>
                  <NavLink to='/chat' style={( {isActive })=>({
                    color:isActive?'yellow':'beige'
                  })} className='a'> Chat </NavLink>
                <NavLink to='/about' style={( {isActive })=>({
                  color:isActive?'yellow':'beige'
                })} className='a'> About </NavLink>
               
                <NavLink to='/contact'  style={( {isActive })=>({
                  color:isActive?'yellow':'beige'
                })}className='a'> Contact </NavLink>
            </div>
        </div>
    </>
  )
}

export default Nav;