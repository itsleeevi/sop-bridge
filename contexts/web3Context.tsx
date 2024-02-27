import { createContext } from "react";

interface Web3Interface {
  accounts: Array<string>;
  connected: boolean;
  web3: any;
  L1_CARE: any;
  L2_CARE: any;
  setAccounts: (accounts: []) => void;
  setConnected: (connected: boolean) => void;
  connectMetaMask: () => void;
  switchNetworkToETH: () => void;
  switchNetworkToPolygon: () => void;
  requestAccounts: () => void;
}

export const Web3Ctx = createContext<Web3Interface>({
  accounts: [],
  connected: false,
  web3: undefined,
  L1_CARE: undefined,
  L2_CARE: undefined,
  setAccounts: () => undefined,
  setConnected: () => undefined,
  connectMetaMask: () => undefined,
  switchNetworkToETH: () => undefined,
  switchNetworkToPolygon: () => undefined,
  requestAccounts: () => undefined,
});