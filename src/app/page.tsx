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

import { Application } from '@splinetool/runtime';
import { elementIsVisibleInViewport } from "./actions/actions";



export default function App() {

  const aboutRef = useRef()
  const [selectedItem,setSelectedItem] = useState<string>("meta")

  const scrollToId = (id:string)=>{
      document.getElementById(id)?.scrollIntoView({
        behavior : 'smooth',
        block : 'start',
        inline : "start"
      });
  }
  const scrolled =()=>{
    if(elementIsVisibleInViewport(document.getElementById("meta")))
      setSelectedItem("meta") 
    else if(elementIsVisibleInViewport(document.getElementById("about")))
      setSelectedItem('about')
    else if(elementIsVisibleInViewport(document.getElementById("FAQ")))
      setSelectedItem("FAQ")
    else if(elementIsVisibleInViewport(document.getElementById("roadmap")))
      setSelectedItem("roadmap")
    else if(elementIsVisibleInViewport(document.getElementById("tokenomics")))
      setSelectedItem("tokenomics")
    else if(elementIsVisibleInViewport(document.getElementById("Technology")))
      setSelectedItem('Technology')

  }
  return (  
        
    <Grid onScroll={scrolled} className="w-full flex justify-center bg-black max-h-screen overflow-auto " id="scrollbar1" >
      <div className="lg:max-w-[1440px] w-full flex-col items-center justify-center relative "id="meta" >         
          <Header ref={aboutRef} scrollToId={scrollToId} selectedItem={selectedItem} />
          <MarketListingTime />
          <Testimonies />
          <AboutSection ref={aboutRef} />
          <HeroSection />
          <Tokenomics/>
          <Roadmap/>
          <FaqSection />
          <Footer scrollToId={scrollToId} selectedItem={selectedItem} />
      </div>  
    </Grid>
      

  );
}
