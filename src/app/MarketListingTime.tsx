import React from "react";
import { Box,  styled, useMediaQuery } from "@mui/system";
import {
  Typography,
} from "@mui/material";
import PresaleBox from "@/app/components/PresaleBox";
import Image from "next/image"
import heroMask from "@/assets/heroMask.svg"

const Section = styled(Box)(({ theme }) => ({
  position:"relative",
  overflow: "hidden",
  display: "flex",
  padding: "32px 80px",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
  borderTop: "1px solid rgba(255, 255, 255, 0.16)", 
  maxWidth:"100%", 
  paddingTop: "100px",
  [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
    gap: "16px",
    padding: "32px",
    width: "100%",
    paddingTop: "40px",
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    gap: "16px",
    padding: "16px",
    width: "100%",
    paddingTop: "32px",
  },
}))



const PresaleSection = ()=>{
    const matches = useMediaQuery("(max-width:1150px)");
    const matchesTwo = useMediaQuery("(max-width:1350px)");
  
    const typoStyle = {
      color: "#FFF",
      textAlign: "center",
      /* Heading/1 */
      fontFamily: "Roboto",
      fontSize: { lg :"54px" , xs:"40px", xl:"54px"},
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "110%",
    };
    const subTypeStyle = {
      marginTop : "16px",        
      color:  "#D7D8DD",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "140%"
    }

    return (
        <Section component={"section"}  id="presale" className="w-full bg-black " >
            <Box  zIndex={0} sx={{
                width:"100%",
                position:"absolute",
                inset:0,
                zIndex:0,
            }}>
              <Image alt="bg" src={heroMask} className="w-full " />
              <Image alt="bg" src={"/star-img.svg"} width={24} height={24} className="absolute z-50 top-[32%] left-[10%]" />
              <Image alt="bg" src={"/star1.svg"} width={24} height={24} className="absolute z-50 top-[52%] left-[5%]" />
              <Image alt="bg" src={"/star2.svg"} width={24} height={24} className="absolute z-50 top-[72%] left-[15%]" />
              <Image alt="bg" src={"/star3.svg"} width={24} height={24} className="absolute z-50 top-[92%] left-[3%]" />
              <Image alt="bg" src={"/star-img.svg"} width={24} height={24} className="absolute z-50 top-[32%] right-[10%]" />
              <Image alt="bg" src={"/star2.svg"} width={24} height={24} className="absolute z-50 top-[52%] right-[5%]" />
              <Image alt="bg" src={"/star1.svg"} width={24} height={24} className="absolute z-50 top-[72%] right-[15%]" />
              <Image alt="bg" src={"/star3.svg"} width={24} height={24} className="absolute z-50 top-[92%] right-[3%]" />
            </Box>
            <Box zIndex={2} pb={{xs:1}}>
                <Typography sx={typoStyle} display={"flex"} flexWrap={"wrap"} gap={{ xs:"2px", md:"2px", xl:"8px" }} width={"100%"} justifyContent={"center"}>
                <Box component="span"  whiteSpace={"nowrap"} ml={{lg:"8px" ,xs:"8px"}}  >META-V,</Box>  
                <Box component="span"   ml={{lg:"8px" ,xs:"8px"}} >Epitomizes a</Box>  
                <Box component="span"  ml={{lg:"8px" ,xs:"8px"}} sx={{
                        color: "rgba(256,256,256,0.16)",
                    WebkitTextFillColor: "rgba(256,256,256,0.16)",
                    WebkitTextStroke: "1px white",
                }} >Secound Life</Box>
                </Typography>
                <Typography  sx={subTypeStyle}>
                        The convergence of reality and innovation, where aspirations are converted into digital realms.
                </Typography>
            </Box>
            <PresaleBox />
        </Section>
      )
} 

export default PresaleSection;