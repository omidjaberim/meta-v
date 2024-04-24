import React, { useState } from "react";
import { Box, styled, useMediaQuery } from "@mui/system";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useTheme,
  Grid
} from "@mui/material";

import minus from "@/assets/minus-icon.svg";
import plus from "@/assets/plus-icon.svg";
import Image from "next/image";
import gridLine from "@/assets/gridLine.svg";
import faq from "@/assets/webglPreview/BlackGlassCube.png" 

const ExpandPlusMinus = ({ isExpanded }) => {
  return (
    <Box
      width="24px"
      height="24"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {isExpanded ? <Image src={minus} /> : <Image src={plus} />}
    </Box>
  );
};

const FAQ = ({ question, answer, expanded, handleChange, index }) => {
  const theme =  useTheme();
  const isMediumScreen  = useMediaQuery(theme.breakpoints.down('md'));
  return (
      <Accordion
        expanded={index == expanded}
        onChange={() => {
          handleChange(index);
        }}
        sx={{
          maxWidth: isMediumScreen ? "100%" :"491px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          background: "#131315",
          backdropFilter: "blur(16px)",
        }}
      >
        <AccordionSummary
          sx={{ width: "100%" }}
          expandIcon={<ExpandPlusMinus isExpanded={index === expanded} />}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-around",
              color: "#FFF",
              textAlign: "start",
              fontSize:  isMediumScreen ? "16px" :"20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
            }}
          >
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderRadius: 0 }}>
          <Typography
            sx={{
              color: "#9A9DAB",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
            }}
          >
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
};

const FaqWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "0 0", 
  justifyContent: "flex-start",
  flex: 1,

  alignItems: "flex-start",
  [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
    alignItems:"center",
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    width: "unset",
    padding: "0",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  display: "flex",
  padding: "80px 80px", 
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "64px",
  alignSelf: "stretch",
  minHeight: "max-content",
  height:"800px",
  backgroundSize: "contain",
  backgroundRepeat: "repeat",
  backgroundImage: `url(${gridLine})`,

  [`@media (max-width: ${theme.breakpoints.values.lg}px)`]: {
  },

  [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {

    minHeight: "max-content",
    justifyContent: "space-between",
    height: "max-content",
    gap: "32px",
    padding: "32px 32px",
    
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    minHeight: "667px",
    justifyContent: "space-between",
    gap: "32px",
    padding: "24px 16px",
  },
}));

const GradientText = styled("div")(({ theme, active }) => ({
  textAlign: "center",
  fontSize: "36px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "44px",
  background:
    "linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",

  [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
    textAlign: "center",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "36px",
    width: "100%",
  },

  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    textAlign: "center",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "36px",
    width: "100%",
  },
}));

const Gradient = styled(Box)(({ theme }) => ({
  zIndex:0,
  position: "absolute",
  top: "75%",
  left: "100%",
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

const sampleFaqs = [
  {
    question: "What is META-V?",
    answer:
      "The META-V economy relies on its cryptocurrency and a marketplace for NFTs. In this metaverse, individuals can buy, sell, or trade NFTs representing digital assets and properties, ensuring ownership and potential value growth. META-V's (MV) token facilitates secure transactions, creating a smooth and safe economic system in the metaverse.",
  },
  {
    question: "How does the META-V economy work?",
    answer:
      "META-V accessible to anyone interested in virtual worlds, digital economies, or online communities. Users can create an avatar to explore the metaverse, engage in activities, and build their presence in the digital universe.",
  },
  {
    question: "Can anyone join META-V?",
    answer:
      "In META-V, users explore a diverse digital world without limitations. They engage in various virtual activities, from social gatherings to work, education, and entertainment. The platform mirrors real-life tasks, offering a seamless virtual experience without boundaries.",
  },
  {
    question: "What can I do in META-V?",
    answer:
      "To access additional details regarding META-V, such as technical specifications, progress reports, and upcoming community gatherings, please visit our official website. We also encourage you to peruse the whitepaper and engage with our META-V social media platforms to stay informed on the latest developments and announcements.",
  },
];
const FaqSection = () => {
  const [expanded, setExpand] = useState(0);

  const handleChange = (index) => {
    setExpand(expanded === index ? -1 : index);
  };

  return (
      <Container id="FAQ"  margin={"auto"} component={"section"} className="bg-black w-full font-Oxanium" >        
        <Grid className="w-full backdrop-blur-xl backdrop-brightness-150 bg-[url('/horizontalLineBg.svg'),url('/verticalLineBg.svg')] bg-top bg-no-repeat  " >
        <GradientText className='mt-[116px] lg:mt-[20px]' >
          FAQ
        </GradientText>        
        <Box 
          className="flex w-full flex-1 sm:flex-col md:flex-row"
        >
          <div className="md:w-full lg:w-1/2">
          <FaqWrapper zIndex={1} >
            {sampleFaqs.map((faq, index) => (
              <FAQ
                key={faq.question}
                expanded={expanded}
                index={index}
                handleChange={handleChange}
                {...faq}
                
              ></FAQ>
            ))}             
          </FaqWrapper>
          </div>
          <div className="md:w-full lg:w-1/2 flex justify-center items-start mt-[68px]" > 
            <Image src={faq} width={336} height={388}  />
          </div>
        </Box>
        <Image alt="bg" src={"/star2.svg"} width={16} height={16} className="absolute z-50 top-[52%] right-[15%]" style={{animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',pointerEvents: "none",userSelect: "none"}} />
        <Image alt="bg" src={"/star2.svg"} width={22} height={22} className="absolute z-50 top-[12%] right-[36%]" style={{animation: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',pointerEvents: "none",userSelect: "none"}} />
        <Image alt="bg" src={"/star3.svg"} width={32} height={32} className="absolute z-50 top-[22%] right-[28%]" style={{animation: 'pulse 2.9s cubic-bezier(0.4, 0, 0.6, 1) infinite',pointerEvents: "none",userSelect: "none"}} />
        <Image alt="bg" src={"/star3.svg"} width={26} height={26} className="absolute z-50 top-[72%] right-[45%]" style={{animation: 'pulse 3.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',pointerEvents: "none",userSelect: "none"}} />
        <Gradient/>
        </Grid>
      </Container>
  );
};

export default FaqSection;
