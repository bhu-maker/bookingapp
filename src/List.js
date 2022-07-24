import React, { useState } from 'react'
import {Navbar} from './Navbar';
import {Header} from './Header';
import './list.css';
import {useLocation} from "react-router-dom";
import {format} from 'date-fns';


export const List = () => {
    const location = useLocation()
    console.log(location)
    const [inptext,setInptext] = useState(location.state.inptext)
    const[date,setdate]=useState(location.state.date)
    const[options,setoptions]=useState(location.state.options)
    
  return (
    <div>List
        <Navbar/>
        <Header/>
        <div className='formcontainer'>
            <div className='formtitle'>
                <h2>search</h2>
                <div className='formdestination'>
                    <span>destination</span>
                    <input type="text" className="form-control" style={{width:"80px"}} value={inptext}/>
                    <div className='formdate'>
                        <span>check in && check out </span>
                        <input type="text" style={{width:"120px"}} value={`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}/>
                        <div className='formoptions'>
                            <div className='formoptionsitem'>
                                <span>adult</span>
                                <input type="text" style={{width:"20px"}} value={options.adult}/>
                                <span>children</span>
                                <input type="text" style={{width:"20px"}} value={options.child}/>
                                <span>room</span>
                                <input type="text" style={{width:"20px"}} value={options.room} />
                            </div>
                        </div>
                        <button className='formbtn'>search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
