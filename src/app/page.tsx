"use client"

import { Grid } from "@mui/material";
import Header from "./Header";
import MarketListingTime from "./MarketListingTime";
import Testimonies from "./Testimonies";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import { useRef } from "react";


export default function App() {
  const aboutRef = useRef()

  return (      
    <Grid className="w-full bg-black flex justify-center" >    
      <Grid className="max-w-[1440px] flex flex-col items-center justify-center relative scroll-smooth bg-black bg-[url('/Main.svg')] bg-top bg-no-repeat " sx={{backgroundSize:"1340px contain"}}  >
        <Grid className="w-full bg-[url('/rectangleBg.svg')] bg-no-repeat bg-top bg-contain" >
          <Header ref={aboutRef} />
          <MarketListingTime />
          <Testimonies />
          <AboutSection ref={aboutRef} />
          <HeroSection />
          <Tokenomics/>
          <Roadmap/>
          <FaqSection/>
          <Footer/>
        </Grid>
      </Grid>
      </Grid>

  );
}
