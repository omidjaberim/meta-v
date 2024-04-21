import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Logo from "@/assets/logo.svg"
import HamMenu from "@/assets/menu.svg"
import ConnectBtn from "@/app/components/ConnectBtn";
import React, { forwardRef, useRef, useState } from "react";
import SideMenu from "./components/SideMenu";
import { elementIsVisibleInViewport } from "./actions/actions";

const Header = forwardRef((props,ref:any)=>{
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean)  => {
      setOpen(newOpen);
    };
    const [selectedItem,setSelectedItem] = useState<string>("meta")
    const scrollToY = (y:number)=>{
      scrollTo(0, y)
      setSelectedItem("meta")
    }
    const scrollToId = (id:string)=>{
      if(id === "meta") scrollToY(0);
      document.getElementById(id)?.scrollIntoView();
      setSelectedItem(id)

    }

return(
    <Grid className="flex justify-center items-center w-full font-Oxanium text-[14px] text-[#fafafa] leading-8	font-semibold py-[12px]  bg-[#131315] shadow-black/5 sticky top-0 z-50" >
        <Box className="flex flex-row justify-between sm:w-11/12 md:w-13/14 "  >
          <Grid className="w-1/2 lg:w-3/4 flex justify-start sm:gap-[11px] md:gap-[20px] xl:gap-[40px]"  >
              <Image src={HamMenu} alt="meta" width={24} height={24}  className="sm:flex lg:hidden cursor-pointer"  onClick={()=>toggleDrawer(!open)}  />
              <Image src={Logo} alt="meta" width={32} height={30}  />                 
              <Box className="text-white sm:hidden lg:flex items-center gap-[2px] md:gap-[22px] xl:gap-[32px]" >
                  <span className={`cursor-pointer hover:animate-pulse hover:scale-105  ${selectedItem === 'meta' ? ' scale-105 text-purple-800' : ''}`} onClick={()=>scrollToY(0)}  >META-V</span>
                  <span className={`cursor-pointer hover:animate-pulse hover:scale-105 ${selectedItem === 'about' ? ' scale-105 text-purple-800' : ''} `} onClick={()=>scrollToId('about')} >About  META-V</span>
                  <span className={`cursor-pointer hover:animate-pulse hover:scale-105 ${selectedItem === 'tokenomics' ? ' scale-105 text-purple-800' : ''}  `} onClick={()=>scrollToId('tokenomics')} >Tokenomics</span>
                  <span className={`cursor-pointer hover:animate-pulse hover:scale-105 ${selectedItem === 'roadmap' ? ' scale-105 text-purple-800' : ''}   `} onClick={()=>scrollToId('roadmap')}>Roadmap</span>
                  <span className={`cursor-pointer hover:animate-pulse hover:scale-105 ${selectedItem === 'FAQ' ? ' scale-105 text-purple-800' : ''}    `} onClick={()=>scrollToId('FAQ')} >Faq</span>
              </Box>  
              <Box className="sm:flex lg:hidden" >
                <SideMenu  selectedItem={selectedItem}  scrollToId={scrollToId} open={open} toggleDrawer={toggleDrawer} />
              </Box>
          </Grid>
          <Grid className="w-1/2 lg:w-1/4 flex items-center justify-end sm:gap-[4px] xl:gap-[16px]" >
            <span>Whitepaper</span>
            <ConnectBtn  />
          </Grid>
        </Box>
    </Grid>
)
})
export default Header