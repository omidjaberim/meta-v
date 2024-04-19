import React, { createContext, useEffect, useState } from "react";
import { useAccount, useWalletClient } from "wagmi";

let initialState = {
  account: null,
  signer: null,
  chainIdArray: [],
  chainId: 0,
};

export const AppContext = createContext(initialState);
export const ConectivityProvider = ({ children }) => {
  const { address, isDisconnected } = useAccount();
  const { data: signer } = useWalletClient();

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({
      account: address ?? null,
      signer: signer ?? null,
    });
  }, [isDisconnected, address, signer]);
  return (
    <AppContext.Provider
      value={{
        account: state.account,
        signer: state.signer,
        chainIdArray: chainIds,
        chainId: chain?.id ,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
