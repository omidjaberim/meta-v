
import React from 'react';
import { Box,  styled } from '@mui/system';
import { Typography } from '@mui/material';

import gridLine from "@/assets/gridLine.svg";
import Image from "next/image"
import arrowImage from "@/assets/ArrowUp.png"


const RoadMapWrapper = styled(Box)(({theme})=>({  
display: "flex",
flexDirection:"column",
padding: "0px 60px",
justifyContent: "space-between",
alignItems: "flex-start",
flexShrink: "0",
height:"700px",   

  backgroundSize: "contain",
  backgroundRepeat: "repeat",
  backgroundImage: `url(${gridLine})`,
[`@media (max-width: 1440px)`]:{ 
    flexWrap: "wrap",
    gap: "24px",   
    height:"max-content",
    paddingBottom: "140px",
},
[`@media (max-width: ${theme.breakpoints.values.sm}px)`]:{     
},

[`@media (max-width: ${theme.breakpoints.values.md}px)`]:{     
    padding:"16px",  
    height:"max-content",
}
}));


const RoadMapContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  gap: "50px",
  padding: "0px 74px",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexShrink: "0",
  flexDirection: "column",
  alignSelf: "stretch",
  height :"max-content",

  [`@media (min-width: 1440px)`]: {
    gap:"80px",
  },
  [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
    padding:0,
    paddingBottom: "80px",
    gap:"80px",
    minHeight:"max-content",
    
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    gap:"40px",
  },
}));

const Gradient = styled(Box)(({ theme }) => ({
  zIndex:0,
  position: "absolute",
  top: "75%",
  left: "50%",
  width: "80%",
  height: "80%",
  transform: "translate(-50%, -50%)",
  flexShrink: "0",
  borderRadius: "50%",
  opacity: "0.56",
  background: "var(--gr3, linear-gradient(93deg, #5659C4 0.48%, #D8A1BC 100%))",
  filter: "blur(77px)",
  '&:nth-child(1)': {
   display:"none"
  },

  [`@media (max-width: 1440px)`]: {
    top:"50%",
    width:"50%",
    height:"60%",
  },

  [`@media (max-width: ${theme.breakpoints.values.lg}px)`]: {
    top:"50%",
    width:"50%",
    height:"80%",
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
  top:"8%",
  left:"0%",  
  width:"200px",
  height:"200px",  
  filter: "blur(47px)",
  borderRadius: "297px",
  '&:nth-child(1)': {
    display:'block',
    position: 'absolute',
    top: '100%',
    left:'110%'
  },
  },
}));

const Title =  styled(Typography)(({theme})=>({  
width: "100%",
textAlign: "center",
fontFamily: "Oxanium",
fontSize: "36px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "44px", 
background: 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)',
WebkitBackgroundClip:'text',
WebkitTextFillColor:'transparent',
backgroundClip:'text',
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]:{       
    }
}))



const CardWrapper = styled(Box)(({theme})=>({  
    zIndex:1,
    width:"100%",
    display: "flex",
    position: "relative",
    gap: "8px",
    justifyContent:"space-between",   
    [`@media (max-width: 1440px)`]:{ 
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: "16px",   
    },

    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]:{ 
        width:"100%",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
        padding: "0px",    
        maxHeight:"max-content"
    },
    
}))


const CardStyle = styled(Box)(({theme})=>({  
       backgroundColor:"#00000066",  
       display: "flex",
       width: "244px",
       minWidth: "244px",
       height:'max-content',
       padding: "16px",
       flexDirection: "column",
       alignItems: "flex-start",
       gap: "8px",
       borderRadius: "12px",
       border: "1px solid var(--dark-glass, rgba(255, 255, 255, 0.05))",
       background: "url(<path-to-image>) lightgray 0% 0% / 40.625px 40.625px repeat, rgba(0, 0, 0, 0.48)",
       backdropFilter: "blur(100px)",
      

      [`@media (min-width: 1441px)`]:{ 
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "16px",    
        '&:nth-child(even)': {
            position: 'relative',
            top: '200px',
          }
    },

    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]:{ 
        width:"100%",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0rem",
        padding: "16px",    
    },
}));




const Card = ({title,subtitle,points})=>{
    return (
    <CardStyle>
    <Box component='div' display={"flex"} alignItems={"center"} gap={"8px"} alignSelf={"stretch"}>
        <Image  src={arrowImage} width={"24px"} height={"24px"}/>
        <Typography component={'span'} color={"#B887FF"} fontFamily={"Oxanium"} fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"32px"}>{title}</Typography>
    </Box>
    <Typography component={'div'}  color={"#FFF"} fontFamily={"Oxanium"} fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"32px"}>{subtitle}</Typography>

    <Box component={'ul'} paddingLeft={"16px"} color={"#9A9DAB"} fontFamily={"Roboto"} fontSize="16px" fontStyle={"normal"} fontWeight={"400"} lineHeight={"140%" } maxHeight={'max-content'} display={"flex"} flexDirection={"column"}>
     {points.map((point,index)=>{
        return <Box key={point+index} component={"li"}>{point}</Box>
     })}   
    </Box>
    </CardStyle>)
} 

const roadMapData = [{
    title : "Phase 1",
    subtitle:"Foundation",
    points :["Market Research & Feasibility Study" ,"Business Model Development", "Document Preparation & Project Economy", "Smart Contract Development - Token, Presale Staking"],  
},{
    title : "Phase 2",
    subtitle:"Initial ",
    points :["Token Presale & Community Formation",
        "Dev & Release of Project Demo",
       "Selection of 10 Professions & Presale of First 10 NFTs"],  
},{
    title : "Phase 3",
    subtitle:"Initial Launch",
    points :["First Version Desktop App for 10 Users" , "Partnerships & Project Development", "Token Listing on DEX & CEX"],  
},{
    title : "Phase 4",
    subtitle:"Expansion",
    points :["Expansion of Professions and App Capacity",
        "Release of Mobile App"],  
},{
    title : "Phase 5",
    subtitle:"Integrating Advanced Tech",
    points :["AI Integration Metaverse Governance"," VR Integration Immersive Metaverse Experience"],  
}]

const Roadmap = ()=>{
    return (
    <RoadMapWrapper id='roadmap'  margin={"auto"} className='bg-black w-full' >
      <RoadMapContainer>
      <Gradient/>
      <Title>RoadMap</Title>
      <CardWrapper>
      {
          roadMapData.map((data,index)=>{
          return <Card key={index} title={data.title} subtitle={data.subtitle} points={data.points}></Card>
          })
      }
      </CardWrapper>
      <Gradient/>
      </RoadMapContainer>
    </RoadMapWrapper>)
}

export default Roadmap