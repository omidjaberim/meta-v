import React, { useState } from "react";
import { Box, styled, useMediaQuery } from "@mui/system";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useTheme,
} from "@mui/material";

import minus from "@/assets/minus-icon.svg";
import plus from "@/assets/plus-icon.svg";
import Image from "next/image";
import gridLine from "@/assets/gridLine.svg";
import FaqImg from "@/assets/webglPreview/BlackGlassCube.png"
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
    <>
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
              fontFamily: "Oxanium",
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
              fontFamily: "Oxanium",
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
    </>
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
  fontFamily: "Oxanium",
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
    fontFamily: "Oxanium",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "36px",
    width: "100%",
  },

  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    textAlign: "center",
    fontFamily: "Oxanium",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "36px",
    width: "100%",
  },
}));

const GradientCircle = styled("div")(({ theme, active }) => ({
  width: "1000px",
  height: "700px",
  transform: "rotate(-32.514deg)",
  position: "absolute",
  right: "-250px",
  bottom: "-400px",
  borderRadius: "1108px",
  opacity: "0.64",
  background: "linear-gradient(93deg, #5659C4 0.48%, #D8A1BC 100%)",
  filter: "blur(100px)",
  [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
    width: "512px",
    height: "345px",
    right: "-200px",
    bottom: "-50px",
    
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    width: "512px",
    height: "345px",
    right: "-200px",
    bottom: "24px",
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
      <Container id="FAQ"  margin={"auto"} component={"section"} className="bg-black w-full" >
        
        <GradientText  >
          FAQ
        </GradientText>        
        <Box 
          className="flex w-full flex-1 sm:flex-col md:flex-row"
        >
          <FaqWrapper zIndex={1} className="sm:w-full md:w-1/2">
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
          <Box className="sm:w-full md:w-1/2" >
            <Image src={FaqImg} width={350} height={450} />
            {/* <Spline scene="https://prod.spline.design/xEAEuMGb0xjefjee/scene.splinecode"  /> */}
          </Box> 
        </Box>
        <Image alt="bg" src={"/star2.svg"} width={24} height={24} className="absolute z-50 top-[52%] right-[15%] animate-pulse" />
        <Image alt="bg" src={"/star2.svg"} width={24} height={24} className="absolute z-50 top-[12%] right-[45%] animate-pulse" />
        <Image alt="bg" src={"/star3.svg"} width={24} height={24} className="absolute z-50 top-[22%] right-[35%] animate-pulse" />
        <Image alt="bg" src={"/star3.svg"} width={24} height={24} className="absolute z-50 top-[72%] right-[45%] animate-pulse" />
        <GradientCircle />
      </Container>
  );
};

export default FaqSection;
