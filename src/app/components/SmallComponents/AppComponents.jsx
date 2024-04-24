import { Alert, Box, Snackbar, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
      key={"top center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#131315",
          background:
            "linear-gradient(92.51deg, #979BFF 0.48%, #FED6FF 50.74%, #FFAE9C 100%)",
          fontSize: "22px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textTransform: "capitalize",
          borderRadius: "12px",
          fontWeight: "600",
          width: props.width,
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background:
              "linear-gradient(92.51deg, #FFAE9C 0.48%, #FED6FF 50.74%, #979BFF 100%)",
          },
        }}
        className="font-Oxanium"
      >
        {children}
      </Button>
    </>
  );
}

export function StyledText({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "20px",
          fontFamily: "Oxanium",
          fontWeight: "600",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTitle({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "28px",
          fontFamily: "Oxanium",
          fontWeight: "600",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export const StyledInput = ({ color, borderColor, ...props }) => {
  const[active,setActive] = useState(false)
  return (
    <Box sx={{
      height:"60px",
      borderRadius:"12px",
    }}     
    >
    <TextField
      {...props}
      onMouseDown={()=>setActive(true)}
      onMouseOut={()=>setActive(false)}
      sx={{
        background: "#2a2730",
        borderRadius: "inherit",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "inherit",
          pr: 0.6,
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },

          background: active ? "linear-gradient(#2a2730 0 0) padding-box,linear-gradient(92.51deg,#979BFF  0.48%, #FED6FF 50.74%, #FFAE9C 100%) border-box" : "linear-gradient(#2a2730 0 0)",
          border: active ?  "2px solid transparent" : "2px solid rgba(255, 255, 255, 0.05)",
          color:"#FFF",
          display: "flex",
        },
        
        input: {
          "&::placeholder": {
            color: "#66656D !important",
            opacity: 1,
          },
          color: `${color}`,
          paddingTop: "16px",
          paddingBottom: "16px",
          fontSize: "20px",
          fontWeight: "600",
          fontFamily: "Oxanium",
          lineHeight: "32px",
        },
      }}
    />
    </Box>
  );
};
