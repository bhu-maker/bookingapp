import React from 'react'
import HotelIcon from '@mui/icons-material/Hotel';
import "./header.css"

export const Header = () => {
  return (
    <div className='header'>
        
        <div className='headeritemactive'>
            <span><HotelIcon/> stays</span>
        </div>
        <div className='headeritem'>
            <span><HotelIcon/> Flights</span>
        </div>
        <div className='headeritem'>
            <span><HotelIcon/> Car rentals</span>
        </div>
        <div className='headeritem'>
            <span><HotelIcon/> Taxi</span>
        </div>
        <div className='headeritem'>
            <span><HotelIcon/> Attractions</span>
        </div>
    </div>
  )
}
