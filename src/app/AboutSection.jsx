import React from 'react';
import aboutImage from "@/assets/about.svg";
import Image from "next/image"
import {   styled } from '@mui/system';
import { Typography } from '@mui/material';

const Title =  styled(Typography)(({theme})=>({  
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
    })
)

const About = ()=>{
  return (
    <section id='about' className={"w-full flex flex-col items-center  bg-black font-Oxanium"}  >        
        <div className={"w-full flex justify-center items-center mt-[156px]"} >
            <img src={aboutImage.src} className="w-[108.097px] h-[34px] mr-[4px] md:w-[90.097px] md:h-[24px] md:mx-[4px]" alt="about"/>
            <Title className={" md:text-[32px] text-[41px] mx-3 font-bold"}>META-V</Title>            
        </div>
        <span className='bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text mx-1 md:mx-3' >LLC Company</span>
        <div className={"flex md:hidden  text-center text-[#9A9DAB] lg:w-[60%] mt-[35px] px-5 lg:px-0 text-[14px]"}>                 
            `META-V embodies the essence of a second life, a realm where dreams once confined to the realm of aspiration in the real world are transformed into reality without boundaries. This innovative metaverse offers an unparalleled opportunity for everyone to
            live a life unrestricted by physical limitations. From pursuing degrees at top universities to participating in grand events, celebrations, and delving into games and interactions`                
        </div>
        <div className={"hidden md:flex text-center text-[#9A9DAB] lg:w-[60%] mt-[15px] px-5 lg:px-0 text-[14px]" } >
        `META-V offers a cutting-edge XR experience by merging VR, AI, Blockchain, and Cryptocurrencies in the metaverse. Users can immerse themselves in virtual environments for work, education, and recreation, while also participating in a digital economy and
            global connections. This innovative frontier blurs the lines between physical and digital realms, fostering limitless innovation and collaboration opportunities. META-V symbolizes a second life, enabling users to engage in education, event
            participation, and diverse interactions beyond physical boundaries.`
        </div>
        <div className='w-full flex justify-center items-center'>
            <Image alt='' src="/WaveformSmall.svg" width={420} height={260} className='lg:w-[100%] flex md:hidden' />
             <Image alt='' src="/Waveformfull.png" width={420} height={260} className='lg:w-[70%] hidden md:flex '  /> 
        </div>
    </section>
  );
};

export default About