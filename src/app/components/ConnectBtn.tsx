import { Button } from "@mui/material"
import Image from "next/image"
import ConnectBtnBg from "@/assets/connectBtn.svg"
const ConnectBtn = ()=>{

    return(
        <Button className="rounded-[12px] hover:animate-pulse"  >
            <Image alt="walet" src={ConnectBtnBg}   />
        </Button>
    )
}
export default ConnectBtn