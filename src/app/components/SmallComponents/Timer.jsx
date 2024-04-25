import React, { useState, useEffect } from "react";
import moment from "moment";
import { Box } from "@mui/material";

export default function TimerCountDown({ time }) {

  const [countTime, setCountDateTime] = useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });
  const startTime = async () => {
    let until = moment.unix(time).format("x");
    let interval = setInterval(() => {
      let now = moment().format("x");
      const distance = +until - +now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setCountDateTime({
          ...countTime,
          time_days: days,
          time_Hours: hours,
          time_Minusts: minuts,
          time_seconds: seconds,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    startTime();
  }, [time]);

  return (
      <Box display="flex" alignItems="center" justifyContent="space-evenly" width={"100%"} >       
        <Box  
          className="bg-[url('/timeNoise2.png')] bg-auto bg-[#231b2ada]  pt-2 w-[88px] h-[90px]  rounded-[16px] border border-[#303136]  " display="flex" flexDirection="column" alignItems="center"   >
            <Box className="text-[28px] font-semibold	 md:text-3xl	leading-10  bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text" >
              {countTime.time_days > 9 ? "" : 0}
              {countTime.time_days}              
            </Box>
            <span className="text-[12px] leading-6 font-normal	text-white font-Oxanium">Day</span>          
        </Box>
        <Box  
          className="bg-[url('/timeNoise2.png')] bg-auto pt-2 w-[90px] h-[88px]   bg-[#231b2ada]  rounded-[16px] border border-[#303136] text-gradient-to-r from-[#FED3CA] to-[#FFA998]" display="flex" flexDirection="column" alignItems="center"   >
            <Box className="text-[28px] font-semibold	md:text-3xl	leading-10  bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text" >            
            {countTime.time_Hours > 9 ? "" : 0}
            {countTime.time_Hours}
            </Box>
            <span className={"text-[12px]  leading-6 text-white"}>{"Hours"}</span>          
        </Box>
        <Box  
          className="bg-[url('/timeNoise2.png')] bg-cover  bg-[#231b2ada] pt-2 w-[90px] h-[88px]  rounded-[16px] border border-[#303136] text-gradient-to-r from-[#FED3CA] to-[#FFA998]" display="flex" flexDirection="column" alignItems="center"   >
            <Box className="text-[28px] font-semibold	 md:text-3xl	leading-10  bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text" >            
            {countTime.time_Minusts > 9 ? "" : 0}
            {countTime.time_Minusts}
            </Box>
            <span className={"text-[12px]  leading-6 text-white"}>{"Minutes"}</span>          
        </Box>
        <Box  
          className="bg-[url('/timeNoise2.png')] bg-cover  bg-[#231b2ada] pt-2 w-[90px] h-[88px]  rounded-[16px] border border-[#303136] text-gradient-to-r from-[#FED3CA] to-[#FFA998]" display="flex" flexDirection="column" alignItems="center"   >
            <Box className="text-[28px] font-semibold	 md:text-3xl	leading-10  bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text" >          
            {countTime.time_seconds > 9 ? "" : 0}
            {countTime.time_seconds}
            </Box>
            <span className={"text-[12px]  leading-6 text-white"}>{"Seconds"}</span>          
        </Box>
      </Box>
  );
}
