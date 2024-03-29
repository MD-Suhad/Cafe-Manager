import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";

const Calender = () => {
   const [value, onChange] = useState(new Date());
  return (
   <div className="calender-header">
            <h1>Calendar - Right Click Solution</h1>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
  );
};

export default Calender;
