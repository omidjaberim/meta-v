import React from 'react';
import { Box, styled, useMediaQuery } from '@mui/system';
import { Typography, useTheme } from '@mui/material';
import Spline from "@splinetool/react-spline";

const Container = styled(Box)(({theme})=>({  
display: 'flex',
padding: '80px 125px',
flexDirection: 'column',
alignItems: 'center',
gap: '40px',
alignSelf: "stretch",
[`@media (max-width: ${theme.breakpoints.values.sm}px)`]:{       
    padding: "80px 16px",
    paddingBottom:"80px",
}
}));


const TokenShares = styled(Box)(({theme})=>({

fontFamily:"Oxanium",
display:'flex',
maxWidth:"950px",
gridTemplateColumns: 'repeat(6, 1fr)',
alignItems: 'center',
justifyContent:"center",
gap: '32px',
flexWrap:"wrap",
    [`@media (max-width: 1000px)`]:{       
        gap: '12px',
    }
}))

const TokenShareWrapper = styled(Box)(({theme})=>({
    color: 'white',
    minWidth:"131px",
    maxWidth:"131px",
    height: '100px',
    display: 'flex',
    padding: '2px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    flex: '1 0 0',
    borderRadius: '12px',
    background: 'linear-gradient(to bottom, rgba(184, 135, 255, 0.32), rgba(185, 135, 255, 0.077))',
    flexWrap:"wrap",
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]:{      
        minWidth:"100px",
        maxWidth:"100px", 
    }

}));


const Title = styled(Box)(({theme})=>({
 textAlign: 'center',
fontFamily: 'Oxanium',
fontSize: '36px',
fontStyle: 'normal',
fontWeight: '400',
lineHeight: '44px', 
background: 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)',
WebkitBackgroundClip:'text',
WebkitTextFillColor:'transparent',
backgroundClip:'text',

[`@media (max-width: ${theme.breakpoints.values.sm}px)`]:{    
fontSize: "28px",
}

}))



const tokenShareData = [
    {
        type: "Ecosystem",
        percentage :"26%" ,
    },
    {
        type: "Community",
        percentage :"4%" ,
    },    {
        type: "Reserve",
        percentage :"5%" ,
    },    {
        type: "Advisors",
        percentage :"4%" ,
    },    {
        type: "Staking",
        percentage :"8%" ,
    },    {
        type: "Development",
        percentage :"7%" ,
    },    {
        type: "Marketing",
        percentage :"10%" ,
    },    {
        type: "Team",
        percentage :"10%" ,
    },    {
        type: "Liquidity",
        percentage :"10%" ,
    },    {
        type: "Private Sale",
        percentage :"2%" ,
    },    {
        type: "Presale",
        percentage :"10%" ,
    },    {
        type: "Public Sale",
        percentage :"4%" ,
    },   
    
]
const Tokenomics = ()=>{
    const theme =  useTheme();

    return(
        <Container component={"section"} id="tokenomics" className='bg-black  ' >
           <Title className='mt-[76px] lg:mt-0' >Tokenomics</Title>
            <TokenShares>
                {tokenShareData.map((share,index)=>{
                    return (<TokenShareWrapper key={index} className='hover:animate-pulse hover:scale-110' > 
                <Box borderRadius={'12px'} display={"flex"} flexDirection={"column"} alignItems={"center"} padding={"16px"} width={"100%"} height={"100%"}  style={{backgroundImage:"linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(184, 135, 255, 0.32) 80%)"}}  >
                     <Typography  whiteSpace={'nowrap'} fontSize={'14px'} fontWeight={400} lineHeight={'24px'} color={"#FFF"}> {share.type} </Typography> 
                     <Typography  whiteSpace={'nowrap'} fontSize={'28px'} fontWeight={600} lineHeight={'36px'} color={"#FFF"}> {share.percentage} </Typography> 
                </Box>
                     </TokenShareWrapper>
                )
                })}
            </TokenShares>

<Box sx={{
    position:"relative",
    width:"100%",
    height:"max-content",
    maxWidth:"lg",
}}>
    {/* <Spline scene="https://prod.spline.design/St8gnTY5GrEZpKpp/scene.splinecode"  />  */}
</Box>

 
        </Container>
    )
}

export default Tokenomics;