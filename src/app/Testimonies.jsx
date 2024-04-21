import React, { useState } from "react";
import { Box, Stack,  styled } from "@mui/system";
import {

  Typography,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carouselStyle.css"
import { ArrowNext, ArrowPrev } from "./button/customArrow";
import { AndrewBosworth, AuthorMuratDurmus, EricSchmidt, JensenHuang, MarkZuckerberg, MatthewBall, RichardStallman, SatyaNadella } from "./Images";

const GradientText = styled(Box)(({theme})=>({
    width:"100%",
    textAlign: 'center',
    fontFamily:"Oxanium",
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '44px',
    background: 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',
    backgroundClip:'text',

    [`@media (max-width: ${theme.breakpoints.values.sm}px)`] : {
        textAlign: "center",
        fontFamily: "Oxanium",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "36px",
        padding : "0 36px"

      }
}))


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 2000 },
        items: 5,
        partialVisibilityGutter: 40 ,// this is needed to tell the amount of px that should be visible.
        slidesToSlide:1,
      },
    tablet: {
        breakpoint: { max: 2000 ,min: 1750, },
        items: 4,
        partialVisibilityGutter: 20, // this is needed to tell the amount of px that should be visible.
        slidesToSlide:1,
      
    },
    tablet1: {
        breakpoint: { max: 1750 ,min: 1250, },
        items: 3,
        partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
        slidesToSlide:1,

    },
    tablet2: {
        breakpoint: { max: 1250 ,min: 750, },
        items: 2,
        partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
        slidesToSlide:1,
      
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
      slidesToSlide:1,
    }
  }
  

  const commentsData = [{
    profile :{
        avatar :SatyaNadella.src,
        username:"Satya Nadella",
        description:"Microsoft CEO", 
    },
    comment :`“The metaverse is here, and it’s not only transforming how we see the world but how we participate in it – from the factory floor to the meeting room.”`
  },
  {
    profile :{
        avatar :AndrewBosworth.src,
        username:"Andrew Bosworth",
        description:"Facebook Reality Labs", 
    },
    comment :`“The watchword of the metaverse is continuity. The feeling that when you go from one place to another place, there are some things that… identity come with you. So avatars are important… your digital goods come with you…Can your friends come with you? Can you travel together? Can you stay in communication while you move from place to place?”`
  },
  {
    profile :{
        avatar :MatthewBall.src,
        username:"Matthew Ball",
        description:"Entrepreneur", 
    },
    comment :`“The metaverse is best understood as the shift of computing and interaction from a device in your pocket into a virtual simulation.”`
  },
  {
    profile :{
        avatar :RichardStallman.src,
        username:"Richard Stallman",
        description:"Programmer", 
    },
    comment :`“A metaverse is a possible future in which online communities, organizations, and economies have evolved beyond their current forms.”`
  },
  {
    profile :{
        avatar :SatyaNadella.src,
        username:"Satya Nadella",
        description:"Microsoft CEO", 
    },
    comment :`“It is a wide-scale and interoperable nеtwork of rеal-timе,  rеndеrеd,  3D virtual worlds that can bе еxpеriеncеd synchronously and continuously by an effectively unlimitеd numbеr of usеrs,  each with an individual sеnsе of prеsеncе.”`
  },

  {
    profile :{
        avatar :JensenHuang.src,
        username:"Jensen Huang",
        description:"NVIDIA CEO", 
    },
    comment :`“Just like in the infancy of the internet, no one can predict exactly how and how large the metaverse will grow — but today, we know we can lay the foundations.`
  },
  {
    profile :{
        avatar :MarkZuckerberg.src,
        username:"Mark Zuckerberg",
        description:"META CEO", 
    },
    comment :`“It is a wide-scale and interoperable nеtwork of rеal-timе,  rеndеrеd,  3D virtual worlds that can bе еxpеriеncеd synchronously and continuously by an effectively unlimitеd numbеr of usеrs,  each with an individual sеnsе of prеsеncе.”`
  },
  {
    profile :{
        avatar :EricSchmidt.src,
        username:"Eric Schmidt",
        description:"Google CEO", 
    },
    comment :`“Meta’s metaverse would be a massive factor in replacing human relationships. Not only would it threaten or endanger human interaction, but it could contribute to people choosing more of the AR world rather than the real world outside the lenses.”`
  },
  {
    profile :{
        avatar :AuthorMuratDurmus.src,
        username:"AuthorMurat Durmus",
        description:"AISOMA CEO", 
    },
    comment :`“The Metaverse is the ideal playground in which the AI can let off steam. The more humans lose themselves in it, the more the AI will take control. That much is certain.”`
  },

]

const Comments =({profile ,comment , ...props })=>{
  const [hover,setHover] = useState(false);

    return (<>
        <Box component={"div"} onMouseOver={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}  sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            gap:"16px",
            width:{xl : "416px" ,md:"416px" , xs : "368px" } , 
            padding:"24px" , 
            margin:"10px",
            fontFamily:"Oxanium",
            background: "#131315",
            backdropFilter: "blur(16px)",
            borderRadius:"12px",
            cursor:"pointer",

        }}>
        <Typography variant='p'  fontSize={'14px'} fontWeight={400} lineHeight={'24px'} color={"#FFF"}>  {comment} </Typography> 
        <Box display={"flex"} gap={"16px"} justifyContent={"center"} alignItems={"center"} >

            <Box display={"flex"}  sx={{
          
                width: "48px",
                height: "48px",
                borderRadius: "48px",
                border: "1px solid var(--gr4, #979BFF)",
            }}>
                <Box component={"img"} borderRadius={"inherit"} src={profile.avatar}   width={"100%"}  height={"100%"} />
            </Box>    

            <Box display={"flex"}  flex={1} flexDirection={"column"}>
                <Typography variant='div'  fontSize={'14px'} fontWeight={600} lineHeight={'24px'} color={"linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)"} 
                sx={{
                  background: hover ? 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)' : "#FFF",
                  WebkitBackgroundClip:'text',
                  WebkitTextFillColor:'transparent',
                  backgroundClip:'text',
                }} >  {profile.username} </Typography> 
                <Typography variant='p'  fontSize={'12px'} fontWeight={400} lineHeight={'20px'} color={"#FFF"}>  {profile.description} </Typography> 
            </Box>
        </Box>    
        </Box>
    </>)
}


const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide ,totalItems,slidesToShow} } = rest;
    return (
        <Box sx={{display:"flex" , gap:"24px" , alignItems:"center" , justifyContent:"center" }}>
        <Box  className="hover:scale-110" component={"button"}   sx={{ all: "unset" ,cursor:"pointer", "&:focus":{ outline:"none"}  , width:"48px",height:"48px" ,borderRadius:"140px" , background:"#222326", display:"flex" , justifyContent:"center",alignItems:"center" }} disabled ={currentSlide === 0 ? true : false} onClick={() => previous()}>
            <ArrowPrev isActive={currentSlide === 0 ? !true : !false} />
        </Box>
        <Box  className="hover:scale-110" component={"button"} sx={{all: "unset" , cursor:"pointer", "&:focus":{ outline:"none"} ,width:"48px",height:"48px" ,borderRadius:"140px" , background:"#222326", display:"flex" , justifyContent:"center",alignItems:"center" }} disabled ={(currentSlide+slidesToShow) === totalItems ? true : false} onClick={() => next()}>
            <ArrowNext isActive={totalItems === (currentSlide+slidesToShow)  ? !true : !false } />
        </Box>       
      </Box>
    );
  };

  const CarouselWrapper = ()=>{
    return (
          <Carousel  arrows={false} sliderClass="commentItems" itemClass="carasolItem"  infinite autoPlay={!false} autoPlaySpeed={5000} transitionDuration={500}  partialVisible={true} centerMode={!true} responsive={responsive} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup/>} >
            {commentsData.map((commentData,index)=>(<Comments key={index} profile={commentData.profile} comment={commentData.comment}/>))}
          </Carousel>
      )
  }

const Testimonies = () => {
  return (<>
  <Stack className="bg-black" component={"section"}  width={"100%"} justifyContent={"center"} gap={8} paddingY={{xl:"80px" , sm:"80px" , xs:"80px"  }} >
      <GradientText>
        The future of the metaverse
      </GradientText>
    <CarouselWrapper/>
  </Stack>

  </>)
};

export default Testimonies;
