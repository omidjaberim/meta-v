import React, { useState } from 'react';
import { Box,  styled, useMediaQuery } from '@mui/system';
import { Typography } from '@mui/material';
import GriLineImage from '@/assets/gridLine.svg';
import AI from '@/assets/webglPreview/AI.png';
import Blockchain from '@/assets/webglPreview/Blockchain.png';
import VR from '@/assets/webglPreview/VR.png';
import Image from "next/image"

const FoundationSection = styled(Box)(({theme})=>({
    fontFamily:"Oxanium",
    width: '100%',
    position:"relative",
    backgroundSize: "contain",
    backgroundRepeat: "repeat",
    backgroundImage :  `url(${GriLineImage.src})`,
    display: "flex",
    gap: "30px",
    padding:"80px 80px",

    flexDirection:'column',
    "&>*":{
      transition:"all 1s,visibility 1s",
    },
    [`@media (max-width: ${theme.breakpoints?.values.md}px)`]:{       
      padding: "32px 32px",
      gap: "30px",
    },

    [`@media (max-width: ${theme.breakpoints?.values.sm}px)`]:{       
        padding: "32px",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
    }
}))

  const GradientText = styled('div')(({theme,active})=>({
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
          fontWeight: "600",
          lineHeight: "36px",}
  }))

const Tab = styled(Box)(({theme,active})=>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px",
    position: "relative",
    backgroundImage: active==='true' ? "linear-gradient( to bottom, #00000000 0%, #222326 80%, #131315 100%)," + theme.palette.gr1 : "",
    borderRadius: "10px",
    maxWidth :"368px",
    cursor:"pointer",
    "&:hover":{
      background: active === "false" ? "linear-gradient( to bottom, #FFF 0%, #222326 80%, #131315 100%)" : "",
    },
   
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]:{
        display: "flex",
        padding: "1px",
        flexDirection: "column",
        justifyContent: "center",
        gap: "8px",
        flex: "1 ",
        alignItems: 'center',
    }
}));

const TabInner = styled(Box)(({theme})=>({
    display: "flex",
    padding: "24px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    backgroundImage: "linear-gradient(180deg, #222326, #131315)",
    borderRadius: "inherit",
    flex:"1 0 0",
    transition: "visibility 0s, opacity 0.5s linear",
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]:{
        padding: " 8px 16px",
        fontFamily: "Oxanium",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "32px",
        width: "100%",
        height: "100%",
        flex:1,
        justifyContent:"center",
        alignItems: 'center',
        borderRadius:"inherit"
    }
}))

const Title = styled(Typography)(({theme,active})=>({
    fontFamily: "Oxanium",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "32px",
    background: active === 'true' ?  "var(--gr4, linear-gradient(93deg, #979BFF 0.48%, #FED6FF 50.74%, #FFAE9C 100%))" : '#FFF',
    backgroundClip: "text",    
    WebkitBackgroundClip :"text",
    WebkitTextFillColor :"transparent",
}));
const Description = styled(Typography)(({theme})=>({
    color: "var(--Neutral-300, #9A9DAB)",
    fontFamily: "Oxanium",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    transition: "all 1s",
}));

const tabsData = [
{
    title : 'Virtual Reality (VR)',
    description :'META-V embodies the essence of a second life, a realm where dreams once confined to the realm of aspiration in the real world',
    subtitle : "VR",
    scene : { previewImage : VR.src, sceneURL:"https://prod.spline.design/BWBWriNLR4TUc2h5/scene.splinecode"  },
},
{
    title : 'Metaverse',
    description :`In META-V, blockchain is essential for asset ownership, transactions, and governance. Smart contracts secure and automate blockchain transactions. NFTs represent unique digital assets like virtual land, items, and artworks. Blockchain's transparency and immutability foster trust in META-V's economy. The META-V token (MV) facilitates transactions for virtual goods, services, assets, and digital economic activities.`,
    subtitle :'Metaverse',
    scene : { previewImage : Blockchain.src, sceneURL:"https://prod.spline.design/Y8mjjMKWxrKFgrG5/scene.splinecode"  },
},
{
    title : 'Artificial Intelligence (AI)',
    description :'AI is vital for overseeing and managing the META-V metaverse ecosystem. It enforces governance, regulations, and ensures order, security, and fairness. AI provides personalized user experiences and helps users find desired activities. It consistently improves the ecosystem and ensures META-V is dynamic and user-centric.',
    subtitle :'AI',
    scene : { previewImage : AI.src, sceneURL:"https://prod.spline.design/rVbdy-JY-nJx6jIq/scene.splinecode"  },
},
]
const Tabs = ({isSmallScreen , activeTab , tabsData=[], handleActive,...props})=>{
    const onTabClick = (event,index)=>{
        event.stopPropagation();
        handleActive(index);
    }

    return (<>{
        tabsData.map((tab,index)=>{
            let active = activeTab == index.toString();
                return (<Tab key={tab.title} active={active.toString()}  onClick={(event)=>onTabClick(event,index)} >
              <TabInner>
                <Title  active={active.toString()}  > {!isSmallScreen ? tab.title : tab.subtitle }</Title>
               {!isSmallScreen &&(active) &&<Description>{tab.description}</Description>}
              </TabInner>
            </Tab>)
            })
    }</>)
}

const IFrameContainer = styled(Box)(({theme})=>({
    zIndex:1,
    flex:1,
    position:'relative',
    display: "flex",
    padding: "0px 64px",
    alignItems: "center",
    gap: "237px",
    justifyContent:"center",


    [`@media (max-width: ${theme.breakpoints.values.md}px)`]:{    
      fontSize: "28px",
      padding:0,
      marginTop:"32px",
    }

}))

const GradientCircle = styled(Box)(({theme})=>({
  zIndex:"-1",
    position: "absolute",
    transform:"translate(-50% , -50%)",
    top: "50%",
    left: "50%",
    width: "100%",
    maxWidth:"500px",
    height: "50%",
    borderRadius: "50%",
    opacity:"0.7",
    background: "var(--gr3, linear-gradient(93deg, #5659C4 0.48%, #D8A1BC 100%))",
    filter: "blur(100px)",
}))



let SplineScene = ({scene})=>{
  return (
  <Box className="flex justify-center items-center" style={{
        objectFit:"contain",
        maxWidth:"100%",
        width:"100%",
       "@media (max-width: 1110px)": {
              width:"100%",
              maxWidth:"310px",
        },
      } }> 
            <Image src={scene.previewImage} width={420} height={340} className='cursor-cell' style={{animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite , bounce 3s infinite"}} />
  </Box>
  )}

const SplineWithPreview =({scene,active})=>{
  if(!active) return
  return (
        <Box sx={{
          display:"flex",
          width:"100%",
          height:"100%",
          margin :"auto auto",
          justifyContent:"center",

          }}>
            <SplineScene className="w-[350px] h-[300px]" scene={scene}/>
         </Box>
         )
}


const IFrameContainers = ({ activeTab , tabsData=[],})=>{
  
  return (<>

    <IFrameContainer>
    <GradientCircle/>

    {tabsData.map((tab,index)=>{
    let active = activeTab == index.toString();
      return <SplineWithPreview key={index}  active={active} scene = {tab.scene} />
    })}
      </IFrameContainer>
  </>
  )
}

export default  () => {
  const [activeTab ,setActive] = useState(0);
    const isSmallScreen  = useMediaQuery("(max-width: 1100px)");

    const handleActive  = (index)=>{
      if(activeTab === index){
      } 
      setActive(index);
    }
  return (
      <FoundationSection  
        position={"relative"}        
        margin={"auto"}
        padding={'16px'}
        component={"section"}
        className='bg-black'
        id="Technology"
      >
        {isSmallScreen ? (<GradientText className='lg:mt-0 mt-[48px]' >
            Technological <br/> Foundations
        </GradientText>) : (<GradientText>
            Technological Foundations <br/> of META-V
        </GradientText>)
        }

        <Box display={"flex"} height={ isSmallScreen ? "max-content" :"550px"} width={"100%"} flexWrap={"wrap"}  flexDirection={!isSmallScreen ? 'row' : 'column'} >
          <Box display={"flex"} gap={"16px"} flexWrap={"wrap"} justifyContent={"center"} padding={!isSmallScreen ? "0px 64px" :"16px 0px"} flexDirection={!isSmallScreen ? 'column' : 'row'} >            
            <Tabs isSmallScreen={isSmallScreen} activeTab={activeTab} tabsData={tabsData} handleActive ={handleActive} />
          </Box>
           {isSmallScreen&&tabsData.map((tab,index)=>{
                let active = activeTab == index.toString();
                if(!active) return;
                return <Typography  key={index} variant='p' padding={ "16px"} fontSize={'14px'} fontWeight={400} lineHeight={'24px'} textAlign={"center"} color={"#FFF"}>{tab.description}</Typography>
           })}  
          <IFrameContainers render3D={!isSmallScreen} tabsData={tabsData}  activeTab={activeTab}/>
        </Box>
      </FoundationSection>
  );
};

