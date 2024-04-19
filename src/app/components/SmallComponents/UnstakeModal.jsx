import React, { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Slide,
  useMediaQuery,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { AppContext } from "../../utils";
import Loading from "./loading";
import {
  stakingReadFunction,
  stakingWriteFunction,
  tokenReadFunction,
} from "../../ConnectivityAssets/hooks";
import { formatUnits } from "viem";
import { ToastNotify } from "./AppComponents";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledModal = withStyles(() => ({
  root: {
    "& .MuiDialog-root": {
      zIndex: "1301 !important",
    },
    "&.MuiDialog-container": {
      overflowY: "hidden !important",
    },
    "& .MuiDialog-paperScrollPaper": {
      backgroundColor: "#172326 !important",
      height: "auto",
      border: "5px solid #FFAE9C",
      borderRadius: "5px",
    },
    "& .dialoge__content__section": {
      background: "#2a2730 !important",
      // borderRadius: 5,
    },
    "& .MuiDialogContent-root": {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
  },
}))(Dialog);

function UnstakeModal({ open, setOpen, indexU, planU, stakedAmountU }) {
  const handleClose = () => {
    setOpen(false);
  };
  const [loading, setloading] = useState(false);
  const [rewardGet, setrewardGet] = useState(0);
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
  const { account } = useContext(AppContext);
  const matches = useMediaQuery("(max-width:750px)");

  useEffect(() => {
    const init = async () => {
      try {
        const dec = await tokenReadFunction("decimals");
        const reward = await stakingReadFunction("calculateReward", [
          account,
          +planU,
        ]);
        console.log(reward, stakedAmountU, "reward");
        setrewardGet(formatUnits(reward.toString(), +dec));
      } catch (error) {}
    };
    if (account) {
      init();
    }
  }, [account, indexU, open]);
  const withdrawHandler = async () => {
    try {
      setloading(true);
      await stakingWriteFunction("withdraw", [indexU]);
      showAlert("Success! Transaction Confirmed");
      setloading(false);
    } catch (error) {
      setloading(false);
      showAlert(error?.shortMessage);
    }
  };
  return (
    <div>
      <Loading loading={loading} />
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <div className="modal__main__container">
        <StyledModal
          open={open}
          keepMounted
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent className="dialoge__content__section">
            <Box
              borderRadius="100px"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Box
                borderBottom="5px solid red"
                color="red"
                fontSize="30px"
                fontWeight="600"
                fontFamily="Oxanium"
              >
                Warning!
              </Box>

              <Box
                fontFamily="Oxanium"
                mt={1}
                fontSize="14px"
                fontWeight="400"
                color="#ffffff"
                textAlign="center"
              >
                {" "}
                Warning! If you unstake now, then you will only earn{" "}
                <span style={{ fontSize: "22px", fontWeight: "600" }}>
                  {parseFloat(rewardGet).toFixed(4)}
                </span>{" "}
                in rewards. If you continue to stake until the end of the term,
                then you will earn full reward.
              </Box>

              <Box
                mt={1}
                display="flex"
                alignItems="center"
                flexDirection={matches ? "column" : "row"}
              >
                <button
                  style={{
                    background:
                      "linear-gradient(92.51deg, #979BFF 0.48%, #FED6FF 50.74%, #FFAE9C 100%)",
                    borderRadius: "12px",
                    padding: "15px 40px",
                    border: "none",
                    outline: "none",
                    color: "#000000",
                    cursor: "pointer",
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: "bolder",
                    textTransform: "uppercase",
                    marginRight: "10px",
                    fontFamily: "Oxanium",
                    width: matches ? "100%" : "200px",
                  }}
                  onClick={() => {
                    withdrawHandler();
                    handleClose();
                  }}
                >
                  Unstake
                </button>
                <button
                  style={{
                    background:
                      "linear-gradient(92.51deg, #979BFF 0.48%, #FED6FF 50.74%, #FFAE9C 100%)",
                    borderRadius: "12px",
                    padding: "15px 40px",
                    border: "none",
                    outline: "none",
                    color: "#000000",
                    cursor: "pointer",
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: "bolder",
                    textTransform: "uppercase",
                    marginRight: "10px",
                    fontFamily: "Oxanium",
                    marginTop: matches ? "10px" : "0px",
                    width: matches ? "100%" : "200px",
                  }}
                  onClick={() => handleClose()}
                >
                  Cancel
                </button>
              </Box>
            </Box>
          </DialogContent>
        </StyledModal>
      </div>
    </div>
  );
}

export default UnstakeModal;
