import React from 'react';
import aboutImage from "@/assets/about.svg";
import waveformImage from "@/assets/waveform.png";
import Image from "next/image"
import { makeStyles } from '@mui/styles';
import { forwardRef } from 'react';


const useStyles = makeStyles((theme) => ({
    about : {
        width: "100%",
        display: 'flex',
    },
    
    frame29 : {
        fontFamily: 'Oxanium',
        position: 'relative',
        display: 'flex',
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        minHeight: '700px',
        padding: '80px 133px',
        gap: '10px',
        alignSelf: 'stretch',
    },
    
    sectionText: {
        display: 'flex',
        maxWidth: '758px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px',
    },
    
    sectionTop: {
         display: "flex", 
        padding: '8px 0px',
        justifyContent: "center", 
        alignItems: "center",
        alignSelf: 'stretch',
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    
    sectionTopImg : {
        display: 'block',
        width: '110px',
        height: '100%',
        marginRight: '1rem',
    },
    
    metaV: {
        display: 'block',
    fontFamily: 'Oxanium',
    fontSize: '40px',
    lineHeight:"40px",
    fontStyle: 'normal',
    fontWeight: 600,
    textAlign: 'center',
    background: 'linear-gradient(to right, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-background-clip': 'text',
    backgroundClip: 'text',
    whiteSpace: 'nowrap',
    marginTop: '4px',
    },
    
    sectionDescription: {
        color: "#9A9DAB",
        textAlign: "center",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px",
        alignSelf: "stretch",
    },
    
    waveform : {
        position:"relative",
        flex:1,
        width: "100%",
        minHeight:"400px",
    },
    waveformImg:{
        scale: "1.1",
        top: "-10vw",//"-1rem",
        left: "-12rem",
        position: "absolute",
        width: "100vw",
        objectFit: "cover",
        transform: "translate(-0px , -200px)",
    },
    [`@media (min-width: ${theme.breakpoints?.values.md}px)`]:{
        frame29:{
            padding:"80px"
        },
        waveform : {
            position: 'relative',
            flex: 1,
            width: '100%',
        },
        waveformImg:{
            scale: "1.2",
            top: "10vw",
            left: "-7rem",
            position: "absolute",
            width: "100vw",
            objectFit: "cover",
            transform: "translate(-20px , -200px)",
        },
    },


    [`@media (max-width: ${theme.breakpoints?.values.md}px)`]:{
        waveform : {
            position: 'relative',
            flex: 1,
            width: '100%',
        },
        frame29:{
            padding:"80px"
        },
        waveformImg:{
            scale: "2",
            top: "-10vw",
            left: "-10rem",
            position: "absolute",
            width: "100vw",
            objectFit: "cover",
            transform: "translate(-20px , -0px)",
        },
    },

    [`@media (min-width: ${theme.breakpoints?.values.lg}px)`]:{
        
        waveform : {
            position: 'relative',
            flex: 1,
            width: '100%',
        },
        waveformImg:{
            scale: "1.2",
            top: "-20vw",
            left: "-6vw",
            position: "absolute",
            width: "100vw",
            objectFit: "cover",
            transform: "translate(-50px , -0px)",
        },
    },

    [`@media (min-width: ${theme.breakpoints?.values.xl}px)`]:{
        
        frame29:{
            height:"1000px",
        },
        waveform :{
            position: 'relative',
            flex: 1,
            width: '100%',
        },
        waveformImg:{
            scale: "1.2",
            top: "10",
            left: "-5vw",
            position: "absolute",
            width: "100vw",
            objectFit: "cover",
            transform: "translate(-50px , -0px)",
        },
    },
    [`@media (max-width: ${theme.breakpoints?.values.sm}px)`]:{
        frame29: {
            display: 'flex',
            maxHeight: '500px',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '10px',
            alignSelf: 'stretch',
            flexDirection: 'column',
            padding: '16px',
            overflow:"hidden",

        },
        sectionText :{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '8px',
            maxWidth: '100%',
        },
        waveform : {
            position: 'relative',
            flex: 1,
            width: '100%',
        },
        waveformImg:{
    
        },

        sectionTopImg : {
            width: '90.097px',
            height: '24px',
            marginRight: '8px',
            
        },
        metaV : {
            fontSize: '32px',
        },
        sectionDescription : {
            color: 'var(--Neutral-300, #9A9DAB)',
            textAlign: 'center',
            fontFamily: 'Oxanium',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '24px',
        }
    }
}));

const About =  forwardRef((props,ref)=>{
  const classes = useStyles();
  return (
    <section id='about' className={classes.frame29 + " bg-black"} ref={ref} >
        <div className={classes.sectionText}>
            <div className={classes.sectionTop + " mt-[56px] lg:mt-0"} >
                <img src={aboutImage.src} className={classes.sectionTopImg} alt="about"></img>
                <div className={classes.metaV}>META-V</div>
            </div>
            <div className={classes.sectionDescription +" flex md:hidden"}>                 
                `META-V embodies the essence of a second life, a realm where dreams once confined to the realm of aspiration in the real world are transformed into reality without boundaries. This innovative metaverse offers an unparalleled opportunity for everyone to
                live a life unrestricted by physical limitations. From pursuing degrees at top universities to participating in grand events, celebrations, and delving into games and interactions`                
            </div>
            <div className={classes.sectionDescription +" hidden md:flex" } >
            `META-V offers a cutting-edge XR experience by merging VR, AI, Blockchain, and Cryptocurrencies in the metaverse. Users can immerse themselves in virtual environments for work, education, and recreation, while also participating in a digital economy and
                global connections. This innovative frontier blurs the lines between physical and digital realms, fostering limitless innovation and collaboration opportunities. META-V symbolizes a second life, enabling users to engage in education, event
                participation, and diverse interactions beyond physical boundaries.`
            </div>
        </div>
        <div className={classes.waveform }>
            <Image alt="about" src={waveformImage.src} sizes="100vw" fill/>
        </div>
    </section>
  );
});

export default About