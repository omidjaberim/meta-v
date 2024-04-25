import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';
import Image from "next/image";

const Container = styled(Box)(({theme})=>({  
display: 'flex',
padding: '0px 125px',
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
    return(
        <Container id="tokenomics"   className="bg-black  flex flex-col " >
           <Title className='mt-[75px] text-[28px] font-Oxanium font-bold' >Tokenomics</Title>
            <TokenShares>
                {tokenShareData.map((share,index)=>{
                    return (
                    <TokenShareWrapper key={index} className="hover:animate-pulse hover:scale-105 transition-all bg-[url('/tokenNoise.png')] bg-auto" > 
                        <Box borderRadius={'12px'} display={"flex"} flexDirection={"column"} alignItems={"center"} padding={"16px"} width={"100%"} height={"100%"}  style={{backgroundImage:"linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(184, 135, 255, 0.32) 80%)"}}  >
                            <Typography  whiteSpace={'nowrap'} fontSize={'14px'} fontWeight={400} lineHeight={'24px'} color={"#FFF"}> {share.type} </Typography> 
                            <Typography  whiteSpace={'nowrap'} fontSize={'28px'} fontWeight={600} lineHeight={'36px'} color={"#FFF"}> {share.percentage} </Typography> 
                        </Box>
                     </TokenShareWrapper>
                    )
                })}
            </TokenShares>
            <Box className="relative w-full h-full flex justify-center items-center mt-[40px] transition-all" >
                <Image src={"/assets/ring.svg"} alt="ring-meta" width={450} height={450} className="w-full h-full"  style={{animation: 'pulse 5.4s cubic-bezier(0.4, 0, 0.6, 1) infinite'} } />     
                <Image alt='' width={170} height={100} src={"/tokensRemain.png"} className='w-[26%] lg:w-[20%] absolute top-[52%] text-[#FFAE9C] ' />
            </Box>
        </Container>
    )
}
export default Tokenomics;