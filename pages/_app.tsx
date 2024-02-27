import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3Ctx } from "../contexts/web3Context";
import { useState, useEffect } from "react";
import Constants from "../constants/constants";
import Web3 from "web3";
import { use } from "@maticnetwork/maticjs";
import Web3ClientPlugin from "@maticnetwork/maticjs-web3";
import { FxPortalPlugin, FxPortalClient } from "@maticnetwork/maticjs-fxportal";
import { fxPortalClientInit } from "../utils/sopWeb3";
import Axios from "axios";
import L1_CARE_ARTIFACT from "../artifacts/L1_CARE.json";
import L2_CARE_ARTIFACT from "../artifacts/L2_CARE.json";
import { BridgeCtx } from "../contexts/bridgeContext";
import io from "socket.io-client";

declare let window: any;
declare let ethereum: any;
use(Web3ClientPlugin);
use(FxPortalPlugin);

var socket = io(Constants.SERVER_URL);

function MyApp({ Component, pageProps }: AppProps) {
  // web3 hooks
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [web3, setWeb3] = useState(undefined);
  const [L1_CARE, setL1_CARE] = useState(undefined);
  const [L2_CARE, setL2_CARE] = useState(undefined);

  // bridge hooks
  const [fxPortalClient, setFxPortalClient] = useState(fxPortalClientInit);
  const [rootToken, setRootToken] = useState(undefined);
  const [childToken, setChildToken] = useState(undefined);
  const [txHash, setTxHash] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isWithdrawn, setIsWithdrawn] = useState(false);
  const [remainingWithdraw, setRemainingWithdraw] = useState(false);
  const [amountFromDB, setAmountFromDB] = useState("");

  // verify connection
  const [connectedToServer, setConnectedToServer] = useState(false);
  const [connectedToMySQL, setConnectedToMySQL] = useState(false);
  const [connectedToBlockchain, setConnectedToBlockchain] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      setConnectedToServer(true);
    });
    socket.on("disconnect", () => {
      setConnectedToServer(false);
    });
    socket.on("mySQLConnect", (receivedData) => {
      setConnectedToMySQL(receivedData);
    });
  }, []);

  useEffect(() => {
    if (accounts.length > 0) setConnectedToBlockchain(true);
    else setConnectedToBlockchain(false);
  }, [accounts]);

  useEffect(() => {
    requestAccounts();
    if (window.ethereum) {
      const init = async () => {
        if (typeof window !== "undefined") {
          const web3: any = new Web3(window.ethereum);
          const L1_CARE = new web3.eth.Contract(
            L1_CARE_ARTIFACT,
            Constants.L1_CARE_ADDRESS
          );
          const L2_CARE = new web3.eth.Contract(
            L2_CARE_ARTIFACT,
            Constants.L2_CARE_ADDRESS
          );

          setWeb3(web3);
          setL1_CARE(L1_CARE);
          setL2_CARE(L2_CARE);
        }
      };

      init();
    }
  }, []);

  useEffect(() => {
    if (window.ethereum && accounts.length > 0) {
      const init = async () => {
        const fxPortalClient: any = new FxPortalClient({
          network: Constants.NETWORK,
          version: Constants.VERSION,
          parent: {
            provider: window.ethereum,
            defaultConfig: {
              from: accounts[0],
            },
          },
          child: {
            provider: Constants.RPC_POLYGON || window.ethereum,
            defaultConfig: {
              from: accounts[0],
            },
          },
          erc20: {
            rootTunnel: Constants.ROOT_TUNNEL,
            childTunnel: Constants.CHILD_TUNNEL,
          },
        });
        await fxPortalClient.init();
        const erc20 = await fxPortalClient.erc20(
          Constants.L1_CARE_ADDRESS,
          true
        );
        const erc20Child = await fxPortalClient.erc20(
          Constants.L2_CARE_ADDRESS,
          false
        );

        const escapedAddress = escape(accounts[0]);
        Axios.post(Constants.SERVER_URL + "check", {
          address: escapedAddress,
        }).then(async (response) => {
          if (response.data[0] !== undefined) {
            //console.log(response.data[0].txHash);
            setTxHash(
              response.data[0].txHash.replace("'", "").replace("'", "")
            );
            setIsWithdrawn(response.data[0].isWithdrawn);

            if (response.data[0].isWithdrawn === 0) {
              switchNetworkToETH();
              setRemainingWithdraw(true);
              setAmountFromDB(
                response.data[0].amount.replace("'", "").replace("'", "")
              );
              console.log(
                await fxPortalClient.isCheckPointed(
                  response.data[0].txHash.replace("'", "").replace("'", "")
                )
              );
              if (
                await fxPortalClient.isCheckPointed(
                  response.data[0].txHash.replace("'", "").replace("'", "")
                )
              )
                setIsChecked(true);
            }
          }
        });
        setRootToken(erc20);
        setChildToken(erc20Child);
        setFxPortalClient(fxPortalClient);
      };
      init();
    }
  }, [accounts]);

  useEffect(() => {
    getLatestTx(accounts[0]);
  }, [accounts]);

  const getLatestTx = (address: string) => {
    const escapedAddress = escape(address);
    Axios.post(Constants.SERVER_URL + "check", {
      address: escapedAddress,
    }).then((response) => {
      if (response.data[0] !== undefined) {
        setTxHash(response.data[0].txHash.replace("'", "").replace("'", ""));
        setIsWithdrawn(response.data[0].isWithdrawn);
        if (response.data[0].isWithdrawn === 0) {
          switchNetworkToETH();
          setRemainingWithdraw(true);

          setAmountFromDB(
            response.data[0].amount.replace("'", "").replace("'", "")
          );
        }
      }
    });
  };

  const addTxToDB = (
    txHash: string,
    address: string,
    isWithdrawn: number,
    amount: string
  ) => {
    const escapedTxHash = escape(txHash);
    const escapedAddress = escape(address);
    const escapedAmount = escape(amount);
    if (txHash !== "" && address !== "" && isWithdrawn < 1 && amount) {
      Axios.post(Constants.SERVER_URL + "create", {
        txHash: escapedTxHash,
        address: escapedAddress,
        isWithdrawn: isWithdrawn,
        amount: escapedAmount,
      });
    }
  };

  const modifyIsWithdraw = (txHash: string) => {
    const escapedTxHash = escape(txHash);
    if (txHash !== "") {
      Axios.post(Constants.SERVER_URL + "update", {
        txHash: escapedTxHash,
      });
    }
  };

  const connectMetaMask = async () => {
    if (window.ethereum && window.ethereum.isConnected) {
      const accs = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accs);
      if (accs.length > 0) {
        setConnected(true);
      } else setConnected(false);
    } else {
      alert(
        "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
      );
    }
  };

  const switchNetworkToETH = async () => {
    if (window.ethereum && window.ethereum.isConnected) {
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Constants.CHAIN_ID_ETH }],
        });
      } catch (error: any) {
        if (error.code === 4902) {
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: Constants.CHAIN_ID_ETH,
                  chainName: "Ethereum",
                  nativeCurrency: {
                    name: "ETH",
                    symbol: "ETH",
                    decimals: 18,
                  },
                  rpcUrls: [Constants.RPC_ETH],
                  blockExplorerUrls: ["https://etherscan.io"],
                  iconUrls: [""],
                },
              ],
            });
          } catch (addError) {
            console.log("Did not add network");
          }
        }
      }
    }
  };

  const switchNetworkToPolygon = async () => {
    if (window.ethereum && window.ethereum.isConnected) {
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Constants.CHAIN_ID_POLYGON }],
        });
      } catch (error: any) {
        if (error.code === 4902) {
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: Constants.CHAIN_ID_POLYGON,
                  chainName: "POLYGON",
                  nativeCurrency: {
                    name: "MATIC",
                    symbol: "MATIC",
                    decimals: 18,
                  },
                  rpcUrls: [Constants.RPC_POLYGON],
                  blockExplorerUrls: ["https://polygonscan.com/"],
                  iconUrls: [""],
                },
              ],
            });
          } catch (addError) {
            console.log("Did not add network");
          }
        }
      }
    }
  };

  const requestAccounts = async () => {
    if (window.ethereum && window.ethereum.isConnected) {
      const accs = await window.ethereum
        .request({
          method: "eth_accounts",
        })
        .catch((err: Error) => {
          console.error(err);
        });

      setAccounts(accs);

      if (accs.length > 0) {
        setConnected(true);
      } else setConnected(false);
    } else {
      alert(
        "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
      );
    }
  };

  return (
    <Web3Ctx.Provider
      value={{
        connected: connected,
        accounts: accounts,
        setAccounts: setAccounts,
        setConnected: setConnected,
        connectMetaMask: connectMetaMask,
        switchNetworkToETH: switchNetworkToETH,
        switchNetworkToPolygon: switchNetworkToPolygon,
        requestAccounts: requestAccounts,
        web3: web3,
        L1_CARE: L1_CARE,
        L2_CARE: L2_CARE,
      }}
    >
      <BridgeCtx.Provider
        value={{
          fxPortalClient: fxPortalClient,
          rootToken: rootToken,
          childToken: childToken,
          txHash: txHash,
          setTxHash: setTxHash,
          isChecked: isChecked,
          isWithdrawn: isWithdrawn,
          addTxToDB: addTxToDB,
          getLatestTx: getLatestTx,
          modifyIsWithdraw: modifyIsWithdraw,
          remainingWithdraw: remainingWithdraw,
          amountFromDB: amountFromDB,
          setIsChecked: setIsChecked,
          setIsWithdrawn: setIsWithdrawn,
          setRemainingWithdraw: setRemainingWithdraw,
          setAmountFromDB: setAmountFromDB,
          connectedToServer: connectedToServer,
          connectedToMySQL: connectedToMySQL,
          connectedToBlockchain: connectedToBlockchain,
        }}
      >
        <Component {...pageProps} />
      </BridgeCtx.Provider>
    </Web3Ctx.Provider>
  );
}
export default MyApp;
