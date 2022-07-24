import * as React from "react";
import { useState ,useEffect} from "react";
import { users } from "./data";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "./app.css"
import axios from 'axios';

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import {Images} from './Images';

const Home = () => {
  const [inptext, setInpText] = useState("");
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [opendate, setOpendate] = useState(false);

  const navigate = useNavigate()
  const [options, setOptions] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });

  const handleoptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handlesearch = () => {
    navigate("/list",{state:{inptext,date,options}});
};

 

  console.log(inptext, date, opendate);
  return (
    <>
      hello
      <Navbar />
      <Header />
      <div className="searchbar">
        <div className="searchitem">
          <input
            type="text"
            placeholder="what's your destination?"
            value={inptext}
            onChange={(e) => {
              setInpText(e.target.value);
            }}
          />
          <ul className="searchlist">
            {users
              .filter((item) =>
                item.firstname.toLowerCase().includes(inptext.toLowerCase())
              )
              .map((val, key) => (
                <li key={val.userid} style={{listStyleType:"none"}}> {val.firstname}</li>
              ))}
          </ul>
        </div>
        <div className="searchitem">
          <span
            onClick={() => setOpendate(!opendate)}
            className="calendar"
          >{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {opendate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setdate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          )}
        </div>
        <div className="searchitem">
          <div className="options">
            <div className="optionsitem">
              <span className="optionstext">adult</span>
              <div className="optioncounter">
                <button
                  className="optionbtn"
                  onClick={() => {
                    handleoptions("adult", "i");
                  }}
                >
                  +
                </button>
                <span className="optionsnumber">{options.adult}</span>
                <button
                  className="optionbtn"
                  disabled={options.adult <= 1 ? true : false}
                  onClick={() => {
                    handleoptions("adult", "d");
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="optionsitem">
              <span className="optionstext">child</span>
              <div className="optioncounter">
                <button
                  className="optionbtn"
                  onClick={() => {
                    handleoptions("child", "i");
                  }}
                >
                  +
                </button>
                <span className="optionsnumber">{options.child}</span>
                <button
                  className="optionbtn"
                  disabled={options.child <= 0 ? true : false}
                  onClick={() => {
                    handleoptions("child", "d");
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="optionsitem">
              <span className="optionstext">room</span>
              <div className="optioncounter">
                <button
                  className="optionbtn"
                  onClick={() => {
                    handleoptions("room", "i");
                  }}
                >
                  +
                </button>
                <span className="optionsnumber">{options.room}</span>
                <button
                  className="optionbtn"
                  disabled={options.room <= 1 ? true : false}
                  onClick={() => {
                    handleoptions("room", "d");
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="searchitem">
          <div className="searchbtn">
            <button className="btn btn-primary" onClick={() => handlesearch()}>
              search
            </button>
          </div>
        </div>
      </div>
      <Images/>
    </>
  );
};

export default Home;
// import  {LocalizationProvider}  from '@mui/lab';
// import  {DateRangePicker }  from '@mui/lab';
// import { DateRange } from '@mui/lab';
// import { DateRangePicker, DateRange, DateRangeDelimiter } from "@material-ui/pickers";
// import  {DateRangePicker ,DateRange}  from '@mui/lab'

// import TextField from "@material-ui/core/TextField";
// import TextField from '@mui/material/TextField';

// import  AdapterDateFns  from '@mui/lab/AdapterDateFns';
// import Box from '@mui/material/Box';
// const [value, setValue] = useState<DateRange<Date>>(["12.07.2022", null]);
// console.log(inptext,value)

/* <LocalizationProvider
      dateAdapter={AdapterDateFns}
    > */

/* <DateRangePicker
//  startText='check-in'
//  endText='check-out'
//      value={value}
//   onChange={(newValue) => {
//     setValue(newValue);
//   }}
//   renderInput={(startProps, endProps) => (
//     <React.Fragment>
//       <TextField {...startProps} />
      {/* <DateRangeDelimiter> to </DateRangeDelimiter> */
/* <Box sx={{ mx: 2 }}> to </Box>
      <TextField {...endProps} />
    </React.Fragment>
  )}
/>
</LocalizationProvider> */
