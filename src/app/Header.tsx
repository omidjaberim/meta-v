import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Logo from "@/assets/logo.svg"
import HamMenu from "@/assets/menu.svg"
import ConnectBtn from "@/app/components/ConnectBtn";
import React from "react";
import SideMenu from "./components/SideMenu";
const Header = ()=>{
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean)  => {
      setOpen(newOpen);
    };
    
return(
    <Grid className="flex justify-center items-center w-full font-Oxanium text-[14px] text-[#fafafa] leading-8	font-semibold py-[12px]  bg-[#131315]" >
            <Box className="flex flex-row justify-between sm:w-11/12 md:w-13/14" >
              <Grid className="w-1/2 lg:w-3/4 flex justify-start sm:gap-[11px] md:gap-[20px] xl:gap-[40px]"  >
                  <Image src={HamMenu} alt="meta" width={24} height={24}  className="sm:flex lg:hidden cursor-pointer"  onClick={()=>toggleDrawer(!open)}  />
                  <Image src={Logo} alt="meta" width={32} height={30}  />                 
                  <Box className="text-white sm:hidden lg:flex items-center gap-[2px] md:gap-[22px] xl:gap-[32px]" >
                      <span>META-V</span>
                      <span>About  META-V</span>
                      <span>Tokenomics</span>
                      <span>Roadmap</span>
                      <span>Faq</span>
                  </Box>  
                  <Box className="sm:flex lg:hidden" >
                    <SideMenu open={open} toggleDrawer={toggleDrawer} />
                  </Box>
              </Grid>
              <Grid className="w-1/2 lg:w-1/4 flex items-center justify-end sm:gap-[4px] xl:gap-[16px]" >
                <span>Whitepaper</span>
                <ConnectBtn  />
              </Grid>
            </Box>
        </Grid>
)
}
export default Header