import React from "react";
import { Box, styled } from "@mui/system";
import {
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logoImage from "@/assets/logo.svg";
import telegramLogo from "@/assets/socialMedia/telegram.svg";
import twitterLogo from "@/assets/socialMedia/twitter.svg";

import { sampleMenu } from "./sampleMenu";

const Container = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  display: "flex",
  
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "32px",
  borderTop: "1px solid rgba(255, 255, 255, 0.16)",
  background:
    "var(--dark-glass, url(<path-to-image>) lightgray 0% 0% / 40.625px 40.625px repeat, linear-gradient(270deg, rgba(255, 255, 255, 0.01) -20%, rgba(40, 40, 40, 0.09) 75.76%, rgba(255, 255, 255, 0.01) 123.64%))",
  backdropFilter: "blur(200px)",
  [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
    gap: "16px",
    padding: "32px",
    width: "100%",
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    gap: "16px",
    padding: "16px",
    width: "100%",
  },
}));

const socialShare = [
    {
    link: "https://t.me/META_V_Official",
    image: telegramLogo,
  },
    {
    link: "https://twitter/META_V_Official",
    image: twitterLogo,
  },
 
];

const SocialSection = () => {
  
  return (
    <>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={"32px"}
        sx={{
          "@media (max-width: 600px)": {
            gap: "16px",
            alignItems: "flex-start",
            flexDirection: "column", // Maintain vertical layout on smaller screens
          },
        }}
        className="font-Oxanium"
      >
        <Box
          height={"1px"}
          alignSelf={"stretch"}
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.16)" }}
        />
        <Box
          display={"flex"}
          width="100%"
          sx={{
            "@media (max-width: 600px)": {
              gap: "8px",
              alignItems: "center",
              flexDirection: "column", // Maintain vertical layout on smaller screens
            },
          }}
        >
          <Typography
            sx={{
              color: "#9A9DAB",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              
            }}
          >
            META-V LLC, Dubai @ 2024. All rights reserved.
          </Typography>
          <Box
            display={"flex"}
            flex={"1"}
            gap={"16px"}
            justifyContent={"flex-end"}
          >
            {socialShare.map((platform, index) => (
              <Box width={"24px"} height={"24px"} key={index}  >
              <Link href={platform.link} target="_blank">
                <Box  width={"100%"} height={"100%"}>
                  <Image alt="" src={platform.image} className="hover:scale-110" />
                </Box>
              </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

const Footer = (props) => {
  const {scrollToId} = props;
  return (
      <Container className="w-full bg-gradient-to-r from-black  to-[#24243c] " margin={"auto"}>
        <div className="bg-[url('/footerNoise.png')] bg-repeat bg-auto w-full h-full py-[32px] px-[80px]" >
        <Box
          display={"flex"}
          width={"100%"}
          gap={"32px"}
          sx={{
            flexWrap: "wrap",
            "@media (max-width: 300px)": {
              whiteSpace: "nowrap",
              gap: "8px",
              alignItems: "flex-start",
              flexDirection: "column", 
            },
            "@media (max-width: 600px)": {
              whiteSpace: "nowrap",
              gap: "16px",
              alignItems: "flex-start",
              flexDirection: "column", // Maintain vertical layout on smaller screens
            },
          }}
        >
          <Box
            flex={1}
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"row"}
            gap={"8px"}
            alignItems={"center"}
            whiteSpace={"nowrap"}
            marginBottom={"32px"}
          >
            <Image
              style={{ width: "24px", height: "22.4px" }}
              src={logoImage}
            />
            <Typography
              sx={{
                color: "#FFF",
                leadingTrim: "both",
                textEdge: "cap",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "32px",
              }}
            >
              META-V
            </Typography>
          </Box>
          <Box
            display={"flex"}
            gap={"32px"}
            className="hidden md:flex"
          >
            {sampleMenu.map((menu, index) => (              
              <Typography
                sx={{   
                  marginBottom:"26px",               
                  whiteSpace: "nowrap",
                  padding: "12px 8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "24px",
                  "&:hover":{
                  color:"#979BFF"
                  },
                  "@media (max-width: 900px)": {
                    marginRight: "2px",
                    lineHeight: "24px",
                    padding: "2px 8px",
                  },
                }}
                className={`cursor-pointer hover:animate-pulse hover:scale-105 transition-all `}
                onClick={()=>scrollToId(menu.link.slice(1))}
              >
                {menu.title}
              </Typography>
            ))}
          </Box>
        </Box>
        <SocialSection />
        </div>
      </Container>
  );
};

export default Footer;
