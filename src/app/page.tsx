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
import { useRef, useState } from "react";


export default function App() {
  const aboutRef = useRef()
  const [selectedItem,setSelectedItem] = useState<string>("meta")
  const scrollToY = (y:number)=>{
    scrollTo(0, y)
    setSelectedItem("meta")
  }
  const scrollToId = (id:string)=>{
    if(id === "meta") scrollToY(0);
    document.getElementById(id)?.scrollIntoView({
      behavior : 'smooth',
      block : 'center',
      inline : "center"
    });
    setSelectedItem(id)
  }
  return (      
    <Grid className="w-full  flex justify-center bg-black" >
      <div className="lg:max-w-[1440px] w-full flex-col items-center justify-center relative" >         
          <Header ref={aboutRef} scrollToId={scrollToId} selectedItem={selectedItem} />
          <MarketListingTime />
          <Testimonies />
          <AboutSection ref={aboutRef} />
          <HeroSection />
          <Tokenomics/>
          <Roadmap/>
          <FaqSection/>
          <Footer scrollToId={scrollToId} selectedItem={selectedItem} />
      </div>  
    </Grid>
      

  );
}
