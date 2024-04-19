import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";

const theme  =createTheme({
    typography:{
        fontFamily:"Oxanium"
    },
    palette:{
        gr1: 'linear-gradient(93deg, #979BFF 0.48%, #FED6FF 50.74%, #FFAE9C 100%)',
    }
})


const ThemeProvider = ({children})=>{
return (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
    )
}

export default ThemeProvider;
