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

export default function App() {


  return (          
      <Grid className="flex flex-col items-start justify-center" >
        <Header />
        <MarketListingTime />
        <Testimonies />
        <AboutSection />
        <HeroSection />
        <Tokenomics/>
        <Roadmap/>
        <FaqSection/>
        <Footer/>
      </Grid>

  );
}
