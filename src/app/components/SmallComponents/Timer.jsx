import React, { useState, useEffect } from "react";
import moment from "moment";
import { Box, useMediaQuery } from "@mui/material";

export default function TimerCountDown({ time }) {
  const matches = useMediaQuery("(max-width:650px)");

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


  const timerWrapperStyle = {
    justifyContent:"center",
    width:matches ? "70px" : "92px",
    borderRadius: "16px",
    padding:"1px",
    }

  const timerStyle = {
    borderRadius: "inherit",
    background:"#231b2a",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    color: "#e4acb2",
    fontSize: matches ? "28px" : "36px",//{ xs: "28px", md: "36px" },
    fontWeight: 600,//{ xs: "600", md: "600" },
    textAlign: "center",
    lineHeight: "2rem",//matches ? "36px" : "44px",//{ xs: "36px", sm: "44px" },
    fontFamily: "Oxanium",
    aspectRatio:1,
    width:"100%",
    height:"100%"
  };

  const timerValueStyle = {
    fontSize: "12px",
    lineHeight: "24px",//{ xs: "20px", sm: "24px" },
    fontWeight: "400",
    color: "#FFF",
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" width={"100%"} >
       
        <Box  className="border border-[#303136] text-gradient-to-r from-[#FED3CA] to-[#FFA998]" display="flex" flexDirection="column" alignItems="center"  sx={timerWrapperStyle} >
          <Box sx={timerStyle}>
            {countTime.time_days > 9 ? "" : 0}
            {countTime.time_days}
            <br />
            <span style={timerValueStyle}>Day</span>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" sx={timerWrapperStyle}>
          <Box sx={timerStyle} >
            {countTime.time_Hours > 9 ? "" : 0}
            {countTime.time_Hours}
            <br />
            <span style={timerValueStyle}>{"Hours"}</span>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" sx={timerWrapperStyle}>
          <Box sx={timerStyle} >
            {countTime.time_Minusts > 9 ? "" : 0}
            {countTime.time_Minusts}
            <br />
            <span style={timerValueStyle}>{"Minutes"}</span>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" sx={timerWrapperStyle}>
          <Box sx={timerStyle}>
            {countTime.time_seconds > 9 ? "" : 0}
            {countTime.time_seconds}
            <br />
            <span style={timerValueStyle}>{"Seconds"}</span>
          </Box>
        </Box>
      </Box>
    </>
  );
}
