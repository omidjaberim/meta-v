import {
    Box,
    Divider,
    InputAdornment,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  import React, { useContext, useEffect, useState } from "react";
  import {
    bnbIcon,
    logo,
    usdcIcon,
    usdtIcon,
  } from "./SmallComponents/Images";
  import {
    StyledButton,
    StyledInput,
    ToastNotify,
  } from "./SmallComponents/AppComponents";
  import TimerCountDown from "./SmallComponents/Timer";
  import { AppContext } from "../utils";
  import {
    preSaleReadFunction,
    preSaleWriteFunction,
    tokenReadFunction,
    usdcReadFunction,
    usdcWriteFunction,
    usdtReadFunction,
    usdtWriteFunction,
  } from "../ConnectivityAssets/hooks";
  import { formatUnits, parseUnits } from "viem";
  import { preSaleAddress } from "../ConnectivityAssets/environment";
  import Loading from "./SmallComponents/loading";
  
  function PresaleBox() {
    const matches = useMediaQuery("(max-width:650px)");
    const { account } = useContext(AppContext);
    const [buyWith, setBuyWith] = useState("USDT");
    const [endTime, setEndTime] = useState(1710947541);
    const [amount, setAmount] = useState("");
    const [preSaleEndedStatus, setPresaleEndedStatus] = useState(false);
    const [recivedTokens, setreceivedTokens] = useState(0);
    const [tokenPerUSDT, settokenPerUSDT] = useState(0);
    const [tokenPerETH, settokenPerETH] = useState(0);
    const [tokenPrice, settokenPrice] = useState(0);
    const [currentStage, setcurrentStage] = useState(0);
    const [loading, setloading] = useState(false);
    const [amountRaisedForAll, setamountRaisedForAll] = useState(0);
    const [totalSoldTokens, setTotalSoldTokens] = useState(0);
    const [progressBarForAll, setprogressBarForAll] = useState(0);
    const [userPurchasedTokens, setuserPurchasedTokens] = useState(0);
    const [callFunction, setCallFunction] = useState(false);
    const [alertState, setAlertState] = useState({
      open: false,
      message: "",
      severity: undefined,
    });
    const showAlert = (message, severity = "error") => {
      setAlertState({
        open: true,
        message,
        severity,
      });
    };
  
    const toLocalFormat = (val) => {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
  
    const initVoidSigner = async () => {
      try {
        let dec = await tokenReadFunction("decimals");
        let stage = await preSaleReadFunction("currentStage");
        setcurrentStage(+stage?.toString());
        let usdtToToken = await preSaleReadFunction("usdtToToken", [
          "1000000",
          stage?.toString(),
        ]);
        settokenPerUSDT(+formatUnits(usdtToToken?.toString(), +dec?.toString()));
        let ethToToken = await preSaleReadFunction("nativeToToken", [
          "1000000000000000000",
          stage?.toString(),
        ]);
        settokenPerETH(+formatUnits(ethToToken?.toString(), +dec?.toString()));
        let presaleData = await preSaleReadFunction("phases", [
          +stage?.toString(),
        ]);
        // setEndTime(+presaleData[1]?.toString());
        settokenPrice(+formatUnits(presaleData[2]?.toString(), +dec?.toString()));
        let totalRaisedAmount = 0;
        let totalTokeSoldContract = 0;
        for (let index = 0; index <= +stage?.toString(); index++) {
          let presaleData = await preSaleReadFunction("phases", [+index]);
          totalRaisedAmount += +parseFloat(
            +formatUnits(presaleData[1]?.toString(), +dec?.toString()) /
              +formatUnits(presaleData[2]?.toString(), +dec?.toString())
          ).toFixed(0);
          totalTokeSoldContract += +parseFloat(
            +formatUnits(presaleData[1]?.toString(), +dec?.toString())
          )?.toFixed(0);
        }
        setamountRaisedForAll(toLocalFormat(+totalRaisedAmount));
        setTotalSoldTokens(toLocalFormat(+totalTokeSoldContract));
        let progForAll = (+totalRaisedAmount / 975000) * 100;
        setprogressBarForAll(+progForAll);
        const preSaleStatusContract = await preSaleReadFunction("isPresaleEnded");
        setPresaleEndedStatus(preSaleStatusContract);
      } catch (error) {
        console.log(error, "ERROR VoidSigner Data");
      }
    };
    useEffect(() => {
      initVoidSigner();
      setCallFunction(false);
    }, [callFunction]);
  
    useEffect(() => {
      if (account) {
        (async () => {
          try {
            let dec = await tokenReadFunction("decimals");
            let userData = await preSaleReadFunction("users", [account]);
            console.log(parseUnits(
              formatUnits(userData[3]?.toString(), +dec?.toString())
            ));
            setuserPurchasedTokens(
              parseUnits(
                formatUnits(userData[3]?.toString(), +dec?.toString())
              )?.toFixed(2)
            );
          } catch (e) {
            console.log(e);
          }
        })();
      }
    }, [account]);
  
    const buyHandler = async () => {
      if (!account) {
        return showAlert("Error! Please connect your wallet.");
      }
      if (!amount || amount <= 0) {
        return showAlert("Error! Please enter amount to buy.");
      }
      try {
        setloading(true);
        if (buyWith === "USDT") {
          const usdtDecimal = await usdtReadFunction("decimals");
  
          await usdtWriteFunction("approve", [
            preSaleAddress,
            parseUnits(amount.toString(), +usdtDecimal?.toString()).toString(),
          ]);
          await preSaleWriteFunction("buyTokenUSDT", [
            parseUnits(amount.toString(), +usdtDecimal?.toString()).toString(),
          ]);
        } else if (buyWith === "USDC") {
          const usdcDecimal = await usdcReadFunction("decimals");
  
          await usdcWriteFunction("approve", [
            preSaleAddress,
            parseUnits(amount.toString(), +usdcDecimal?.toString()).toString(),
          ]);
          await preSaleWriteFunction("buyTokenUSDC", [
            parseUnits(amount.toString(), +usdcDecimal?.toString()).toString(),
          ]);
        } else {
          await preSaleWriteFunction(
            "buyToken",
            [],
            parseUnits(amount.toString(), 18).toString()
          );
        }
        setAmount("");
        setreceivedTokens(0);
        setCallFunction(true);
        setloading(false);
        showAlert("Success! Transaction Confirmed", "success");
      } catch (error) {
        setloading(false);
        showAlert(error?.shortMessage);
      }
    };
  
    useEffect(() => {
      const calculatorUSDT = async () => {
        try {
          if (buyWith === "USDT" || buyWith === "USDC") {
            let tokenUSDT = +tokenPerUSDT * +amount;
            setreceivedTokens(tokenUSDT?.toFixed(2));
          } else {
            let tokenETH = +tokenPerETH * +amount;
            setreceivedTokens(tokenETH?.toFixed(2));
          }
        } catch (error) {}
      };
      if (+amount > 0) {
        calculatorUSDT();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount, buyWith]);
  
    const handleInputChange = (event) => {
      const input = event.target.value;
      const newValue = input?.replace(/[^0-9.]/g, "");
      setAmount(newValue);
    };
  
    return (
      <Box zIndex={1} width={{xs:"100%",xl:"max-content" , md:"max-content"}} >
        <Loading loading={loading} />
        <ToastNotify alertState={alertState} setAlertState={setAlertState} />
        <Stack gap={{xl:2 , md:2 , xs:2}} maxWidth={'100%'} px={{ xs: 0, sm: 4  }} width={"100%"} alignItems={"center"} justifyContent={"center"}>
          <Typography
            variant="h1"
            sx={{
              color: "#EBE9ED",
              fontSize: { xs: "20px" },
              fontFamily: "Oxanium",
              lineHeight: "30px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Market Listing time
          </Typography>
          <Box width={"100%"} maxWidth="500px" >
            <TimerCountDown time={endTime} />
          </Box>
        </Stack>
        <Stack
          mt={6}
          sx={{
            background: "#221C28",
            px: { xs: 2, sm: 4 },
            py: 4,
            borderRadius: "12px",
  
            gap: 2,
          }}
        >
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            gap={{ xs: 1, sm: 0 }}
            alignItems={{ xs: "start", md: "center" }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#EBE9ED",
                fontSize: { xs: "20px", sm: "28px" },
                fontFamily: "Oxanium",
                lineHeight: { xs: "32px", sm: "36px" },
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              PreSale{" "}
              <span
                style={{
                  color: "#B28FEE",
                }}
              >
                Stage {currentStage + 1}
              </span>
              <Box
                component={"span"}
                sx={{
                  backgroundColor: "#f1423a",
                  fontFamily: "Oxanium",
                  fontSize: { xs: "14px", sm: "16px" },
                  ml: 1,
                  py: 0.8,
                  px: 1,
                  position: "relative",
                  top: { xs: "-2px", sm: "-5px" },
                  borderRadius: "20px",
                  fontWeight: "600",
                }}
              >
                {" "}
                80%
              </Box>
            </Typography>
  
            <Box
              sx={{
                backgroundColor: "#352E3E",
                borderRadius: "12px",
                width: { xs: "97%", md: "fit-content" },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "space-between", md: "center" },
                m: { xs: "auto", md: "0px" },
                px: { xs: 1.5, md: 3 },
                gap: { xs: 0, sm: 0.8 },
                py: 1,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#EBE9ED",
                  fontSize: "20px",
                  fontFamily: "Oxanium",
                  lineHeight: "32px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "#B28FEE",
                  }}
                >
                  1
                </span>{" "}
                $META-V ={" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#EBE9ED",
                  fontSize: "20px",
                  fontFamily: "Oxanium",
                  lineHeight: "32px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "#B28FEE",
                  }}
                >
                  $
                  {+tokenPrice > 0
                    ? parseFloat(1 / +tokenPrice).toFixed(4)
                    : "0.00"}
                </span>
              </Typography>
            </Box>
          </Stack>
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            gap={{ xs: 1, sm: 0 }}
            alignItems={{ xs: "start", md: "center" }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#75717F",
                fontSize: { xs: "14px", sm: "16px" },
                fontFamily: "Oxanium",
                lineHeight: "30px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Last Chance To Buy!
            </Typography>
            <Box
              sx={{
                backgroundColor: { xs: "#352E3E", md: "transparent" },
                borderRadius: "12px",
                width: { xs: "97%", md: "fit-content" },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "space-between", md: "center" },
                m: { xs: "auto", md: "0px" },
                px: { xs: 1.5, md: 3 },
                gap: { xs: 0, sm: 0.8 },
                py: 1,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#EBE9ED",
                  fontSize: "20px",
                  fontFamily: "Oxanium",
                  lineHeight: "32px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Listing Price ={" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#EBE9ED",
                  fontSize: "20px",
                  fontFamily: "Oxanium",
                  lineHeight: "32px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "#e4acb2",
                  }}
                >
                  $0.01
                </span>
              </Typography>
            </Box>
          </Stack>
          <Stack
            sx={{
              height: "30px",
              backgroundColor: "#36303C",
              mt: 0.5,
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Stack
              height={"100%"}
              alignItems={"start"}
              justifyContent={"center"}
              position={"relative"}
            >
              <Box
                sx={{
                  width: `${progressBarForAll}%`,
                  height: "100%",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(92.51deg, #979BFF 0.48%, #FED6FF 50.74%, #FFAE9C 100%)",
                  display: "flex",
                  justifyContent: "end",
                  py: 0.5,
                  alignItems: "center",
                }}
              >
                {progressBarForAll >= 12 && (
                  <Box
                    sx={{
                      backgroundColor: "#fef7f6",
                      textAlign: "center",
                      px: 1,
                      py: 0.5,
                      mr: 0.5,
                      width: "fit-content",
                      fontFamily: "Oxanium",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#000000",
                      borderRadius: "12px",
                    }}
                  >
                    {parseFloat(progressBarForAll)?.toFixed(1)}%
                  </Box>
                )}
              </Box>
            </Stack>
          </Stack>
          <Stack
            flexDirection={{ xs: "row", sm: "row" }}
            justifyContent={"space-evenly"}
            gap={{ xs: 1, sm: 0 }}
            alignItems={"center"}
          >
            <Stack gap={1}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#75717F",
                  fontSize: { xs: "14px" },
                  fontFamily: "Oxanium",
                  lineHeight: "24px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Tokens Sold
              </Typography>
  
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#EBE9ED",
                  fontSize: "20px",
                  fontFamily: "Oxanium",
                  lineHeight: "32px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "#e4acb2",
                  }}
                >
                  {toLocalFormat(totalSoldTokens)}
                </span>{" "}
                {matches && <br />}/ 9,175,000
              </Typography>
            </Stack>
            <Stack gap={1}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#75717F",
                  fontSize: { xs: "14px" },
                  fontFamily: "Oxanium",
                  lineHeight: "24px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                USD Raised
              </Typography>
  
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#EBE9ED",
                  fontSize: "20px",
                  fontFamily: "Oxanium",
                  lineHeight: "32px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "#e4acb2",
                  }}
                >
                  ${toLocalFormat(amountRaisedForAll)}
                </span>{" "}
                {matches && <br />}/ 975,000
              </Typography>
            </Stack>
          </Stack>
  
          <Divider
            sx={{
              background: "#3F3947",
              height: "1px",
              mt: 1,
            }}
          />
          <Stack
            flexWrap={"wrap"}
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            gap={{ xs: 1, sm: 1 }}
            alignItems={{ xs: "start", md: "center" }}
          >
            <Typography
              variant="h1"
              sx={{
                whiteSpace:"nobreak",
                color: "#EBE9ED",
                fontSize: { xs: "20px", sm: "28px" },
                fontFamily: "Oxanium",
                lineHeight: { xs: "32px", sm: "36px" },
                fontWeight: "600",
              }}
            >
              Buy With
            </Typography>
            <Stack
              sx={{
                
                background: "#302a38",
                flexDirection: "row",
                borderRadius: "12px",
                justifyContent: "space-around",
                py: 1,
                px: 1,
                gap: 2,
                width: { xs: "100%", md: "315px" },
              }}
            >
              {[
                {
                  text: "USDT",
                  img: usdtIcon,
                },
                {
                  text: "BNB",
                  img: bnbIcon,
                },
                {
                  text: "USDC",
                  img: usdcIcon,
                },
              ].map(({ text, img }) => (
                <Stack component={"div"}
                  onClick={() => setBuyWith(text)}
                  key={text}
                  sx={{
                    cursor: "pointer",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap:"4px",
                    borderRadius: "12px",
                    py: { xs: 1, sm: 1 },
                    px: { xs: 1, md: 1 },
                    width:"100%",
                    background: buyWith === text ? "#514e57" : "transparent",
                    transition:"all .5s"
                  }}
                >
                  <Box component={"img"} alt="" src={img.src} width="20px" />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mt: 0.5,
                      color: "#EBE9ED",
                      fontFamily: "Oxanium",
                      fontSize: { xs: "14px", sm: "14px" },
                      fontWeight: buyWith === text ? "400" : "700",
                      lineHeight: "24px",
                    }}
                  >
                    {text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={{ xs: 1, md: 1 }}
            gap={{ xs: 2, sm: 3 }}
            width={"100%"}
          >
            <Stack  width={"100%"}>
              <Box>
                <StyledInput 
                  padding="0"
                  type="text"
                  placeholder="0.00"
                  color="#EBE9ED"
                  active
                  value={amount}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <Box
                          component={"img"}
                          alt=""
                          src={
                            buyWith === "USDT"
                              ? usdtIcon.src
                              : buyWith === "BNB"
                              ? bnbIcon.src
                              : usdcIcon.src
                          }
                          sx={{
                            width: "20px",
                            marginRight: { xs: "6px", md: "8px" },
                            marginLeft: { xs: "-10px", md: "0px" },
                            marginTop: { xs: "-3px", sm: "-3px" },
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Stack>
  
            <Stack  width={"100%"} >
              <Box>
                <StyledInput
                  color="#66656D"
                  borderColor={"#312E37"}
                  type="text"
                  placeholder="0"
                  value={amount > 0 ? recivedTokens : "0"}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="end">
                        <Box
                          component={"img"}
                          alt=""
                          src={logo.src}
                          sx={{
                            width: "20px",
                            marginRight: { xs: "6px", md: "8px" },
                            marginLeft: { xs: "-10px", md: "0px" },
                            marginTop: { xs: "-3px", sm: "-3px" },
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Stack>
          </Stack>
          <Stack mt={1}>
            <StyledButton
              width="100%"
              onClick={async () => (account ? buyHandler() : await open())}
            >
              {account ? "BUY" : "CONNECT"}
            </StyledButton>
          </Stack>
          {( account && <Stack alignItems={"center"} mt={1}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#75717F",
                fontSize: "14px",
                fontFamily: "Oxanium",
                lineHeight: "24px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Your Balance : {" "}
              <span
                style={{
                  color: "#e4acb2",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "32px",
                }}
              >
                {userPurchasedTokens} MV
              </span>
            </Typography>
          </Stack>)}
        </Stack>
      </Box>
    );
  }
  
  export default PresaleBox;
  