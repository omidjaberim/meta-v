import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Image from "next/image"
import closeIcon from "@/assets/close.svg"
import smallLOgo from "@/assets/logo-small.svg"
interface IProp{
    open : boolean;
    toggleDrawer : (v:boolean)=>void;
}
const SideMenu = (props:IProp)=>{
    const {open,toggleDrawer} = props;
    return(

        <Box  role="presentation" >
            <Drawer  open={open} >
            <List className="bg-[#000] w-[360px] h-full px-[30px] py-[20px] relative" >
            <ListItem key="1" className='flex  justify-between pb-[40px]' >
                <Box className="w-1/8 flex justify-center items-center" >
                    <Image alt='close' src={closeIcon} width={24} height={24} onClick={()=>toggleDrawer(false)} className='cursor-pointer' />
                </Box>
                <Box className='w-7/8 flex justify-center items-center mx-auto' >
                    <Image alt='close' src={smallLOgo} width={32} height={30} />    
                </Box>
            </ListItem>            
                {['META-V', 'About  META-V', 'Tokenomics', 'Roadmap','Faq'].map((text, index) => (
                <ListItem key={text+index} disablePadding>
                    <ListItemButton>                    
                    <span className='text-white font-semibold font-Oxanium text-[20px] leading-8' >{text}</span>
                    </ListItemButton>
                </ListItem>
                ))}
            <div key="3" >
                <span className=' absolute bottom-20 left-[125px] text-white font-semibold font-Oxanium text-[20px]' >Whitepaper</span>
            </div>
            </List>
      </Drawer>
        </Box>
    )
}
export default SideMenu