
import React from 'react';
import { Box,  styled } from '@mui/system';
import { Typography } from '@mui/material';
import Image from "next/image"
import arrowImage from "@/assets/ArrowUp.png"

import { Grid } from '@mui/material';
const RoadMapWrapper = styled(Box)(({theme})=>({  
display: "flex",
flexDirection:"column",
padding: "0px 60px",
justifyContent: "space-between",
alignItems: "flex-start",
flexShrink: "0",
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
}));

const Gradient = styled(Box)(({ theme }) => ({
  zIndex:0,
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "50%",
  height: "50%",
  transform: "translate(-50%, -50%)",
  flexShrink: "0",
  borderRadius: "50%",
  opacity: "0.36",
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

const CardStyle = styled(Box)(({theme})=>({  
       display: "flex",
       width: "224px",
       minWidth: "224px",
       padding: "16px",
       flexDirection: "column",
       alignItems: "flex-start",
       gap: "4px",
       borderRadius: "12px",
       border: "1px solid  rgba(255, 255, 255, 0.05)",
       justifyItems:"start", 
}));




const Card = ({title,subtitle,points})=>{
    return (
      <CardStyle 
          className='bg-[#000] hover:scale-105 transition-all font-Oxanium h-[380px]' 
        >
        <Box  display={"flex"} alignItems={"center"} gap={"8px"} alignSelf={"stretch"}>
            <Image  src={arrowImage} width={"24px"} height={"24px"}/>
            <Typography component={'span'} color={"#B887FF"}  fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"32px"}>{title}</Typography>
        </Box>
        <Typography component={'div'}  color={"#FFF"}  fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"32px"}>{subtitle}</Typography>
        <ol className='pl-[16px] text-[#9A9DAB] text-[16px] leading-7 flex flex-col' >
        {points.map((point,index)=>{
            return <li key={point+index} className='flex justify-center items-baseline' ><div className=' mr-2 rounded-[5px] w-[5px] p-[4px] bg-[#9A9DAB]' ></div> {point}</li>
        })}   
        </ol>
      </CardStyle>
    )
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
        " Release of Mobile App"],  
},{
    title : "Phase 5",
    subtitle:"Integrating Advanced Tech",
    points :["AI Integration Metaverse Governance"," VR Integration Immersive Metaverse Experience"],  
}]

const Roadmap = ()=>{
    return (
          <RoadMapWrapper id='roadmap'  margin={"auto"} className='bg-black w-full h-full' >
            <Grid className="w-full h-full backdrop-blur-xl backdrop-brightness-150 bg-[url('/horizontalLineBg.svg'),url('/verticalLineBg.svg')] bg-top bg-no-repeat" >
            <RoadMapContainer className='mt-[216px] lg:mt-0' >
            <Title className='mt-[80px]' >RoadMap</Title>
            <Grid className='w-full grid xl:grid-cols-5 gap-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 place-content-center	 place-items-center	place-self-center' >
            {
                roadMapData.map((data,index)=>{
                return <Card key={index} title={data.title} subtitle={data.subtitle} points={data.points}></Card>
                })
            }
            </Grid>
            <Gradient/>
            </RoadMapContainer>
            </Grid>
          </RoadMapWrapper>
    )
}

export default Roadmap