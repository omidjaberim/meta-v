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
import {   useLayoutEffect, useState } from "react";

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.substr(1);

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;
const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));
      setActiveId(position?.id || "");
    };

    listener();
    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

export default function App() {
  const scrollToId = (id:string)=>{
      document.getElementById(id)?.scrollIntoView({
        behavior : 'smooth',
        block : 'start',
        inline : "start"
      });
      
  }
  const ids = ["meta", "about", "Technology","tokenomics","roadmap","FAQ"];
  const activeId = useScrollspy(ids, 54); 

  return (          
    <Grid  className="w-full flex justify-center bg-black"  >
      <div className="lg:max-w-[1440px] w-full flex-col items-center justify-center relative "  >         
            <Header  scrollToId={scrollToId} selectedItem={activeId} />
            <div id="meta" >
              <MarketListingTime />          
              <Testimonies />
            </div>
            <AboutSection  />
            <HeroSection />
            <Tokenomics/>
            <Roadmap/>
            <FaqSection />
          <Footer scrollToId={scrollToId} selectedItem={activeId} />
      </div>  
    </Grid>
  );
}
