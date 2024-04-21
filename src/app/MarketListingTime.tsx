import React from "react";
import { Box,  styled, useMediaQuery } from "@mui/system";
import {
  Typography,
} from "@mui/material";
import PresaleBox from "@/app/components/PresaleBox";
import Image from "next/image"
import ArrowRight from "@/assets/arrowRight.svg"
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
    const typoStyle = {
      color: "#FFF",
      textAlign: "center",
      /* Heading/1 */
      fontSize: { lg :"54px" , xs:"40px", xl:"54px"},
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "110%",
    };
    const subTypeStyle = {
      marginTop : "16px",        
      color:  "#D7D8DD",
      textAlign: "center",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "140%"
    }

    return (
        <Section component={"section"}  id="presale" className="w-full font-Roboto" >
            <Box  sx={{
                  width:"100%",
                  position:"absolute",
                  inset:0,
                  zIndex:0,
            }}>
              <Image alt="bg" src={"/star-img.svg"} width={24} height={24} className="absolute z-50 top-[32%] left-[10%]" style={{animation: 'pulse 2.2s cubic-bezier(0.4, 1, 0.6, 1) infinite'}} />
              <Image alt="bg" src={"/star3.svg"} width={22} height={22} className="absolute z-50 top-[52%] left-[35%]" style={{animation: 'pulse 2.3s cubic-bezier(0.4, 1, 0.6, 1) infinite'}}/>
              <Image alt="bg" src={"/star2.svg"} width={16} height={16} className="absolute z-50 top-[72%] left-[15%]" style={{animation: 'pulse 3.2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
              <Image alt="bg" src={"/star3.svg"} width={22} height={22} className="absolute z-50 top-[92%] left-[3%] " style={{animation: 'pulse 3.6s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
              <Image alt="bg" src={"/star-img.svg"} width={28} height={28} className="absolute z-50 top-[32%] right-[34%] " style={{animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
              <Image alt="bg" src={"/star3.svg"} width={16} height={16} className="absolute z-50 top-[52%] right-[28%]" style={{animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
              <Image alt="bg" src={"/star2.svg"} width={14} height={14} className="absolute z-50 top-[72%] right-[11%] " style={{animation: 'pulse 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
              <Image alt="bg" src={"/star3.svg"} width={18} height={18} className="absolute z-50 top-[92%] right-[38%] " style={{animation: 'pulse 3.2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
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
                <Typography className="flex justify-center pt-[24px] pb-[0px] text-white leading-5	font-semibold" >
                    Audit <Image src={ArrowRight} alt="audit" className="mx-1" />
                </Typography>
            </Box>
            <PresaleBox />
        </Section>
      )
} 

export default PresaleSection;