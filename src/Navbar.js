import React from 'react'
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navcontainer'>
            <span className="logo">Booking.com</span>
            <div className='navitem'>
                <button className='navbtn'>login</button>
                <button className='navbtn'>register</button>
            </div>
           
        </div>
    </div>
  )
}
