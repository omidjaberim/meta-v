import { useWeb3Modal } from "@web3modal/wagmi/react";
import { StyledButton } from "./AppComponents";
import { getAccount } from "@wagmi/core";

export const ExampleButton = () => {
  const { open } = useWeb3Modal();
  const { address } = getAccount();

  return (
    <StyledButton width="190px" onClick={() => open()}>
      {address
        ? address.slice(0, 4) + "..." + address.slice(-4)
        : "Connect Wallet"}
    </StyledButton>
  );
};
