import { Box } from "grommet";
import { Grid } from "grommet";
import { useContext, useEffect, useState } from "react";
import { Web3Ctx } from "../contexts/web3Context";
import TransactionStatus from "./transactionStatus";
import Connect from "./connect";
import SwitchSection from "./switchSection";
import SelectSection from "./selectSection";
import TransferSection from "./transferSection";
import { ControlCtx } from "../contexts/controlContext";

const Network = {
  ETH: "ETHEREUM",
  POLYGON: "POLYGON",
};

const ControlPanel = () => {
  const [currency, setCurrency] = useState("L1-CARE");
  const [networkFrom, setNetworkFrom] = useState(Network.POLYGON);
  const [networkTo, setNetworkTo] = useState(Network.POLYGON);
  const [turn, setTurn] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const { connected } = useContext(Web3Ctx);
  const { switchNetworkToETH, switchNetworkToPolygon } = useContext(Web3Ctx);
  const [amount, setAmount] = useState(0);
  const [signNeeded, setSignNeeded] = useState(false);
  const [confirmNeeded, setConfirmNeeded] = useState(false);

  useEffect(() => {
    if (currency === "L1-CARE") {
      setNetworkTo(Network.POLYGON);
      setNetworkFrom(Network.ETH);
    } else {
      setNetworkTo(Network.ETH);
      setNetworkFrom(Network.POLYGON);
    }
  }, [currency]);

  useEffect(() => {
    if (networkTo === Network.ETH) {
      setCurrency("L2-CARE");
      switchNetworkToPolygon();
    } else {
      setCurrency("L1-CARE");
      switchNetworkToETH();
    }
  }, [networkTo]);

  return (
    <>
      <ControlCtx.Provider
        value={{
          currency: currency,
          setCurrency: setCurrency,
          networkFrom: networkFrom,
          setNetworkFrom: setNetworkFrom,
          networkTo: networkTo,
          setNetworkTo: setNetworkTo,
          turn: turn,
          setTurn: setTurn,
          hasStarted: hasStarted,
          setHasStarted: setHasStarted,
          amount: amount,
          setAmount: setAmount,
          signNeeded: signNeeded,
          setSignNeeded: setSignNeeded,
          confirmNeeded: confirmNeeded,
          setConfirmNeeded: setConfirmNeeded,
        }}
      >
        {connected ? (
          <>
            {!hasStarted ? (
              <>
                <Box>
                  <Box
                    direction="column"
                    background="#41A057"
                    height="700px"
                    width="500px"
                    justify="center"
                    border={{ color: "#000", size: "medium" }}
                  >
                    <Grid
                      fill={true}
                      pad="medium"
                      rows={["auto", "auto", "auto"]}
                      columns={["full"]}
                      gap="medium"
                      areas={[
                        { name: "top", start: [0, 0], end: [0, 0] },
                        { name: "center", start: [0, 1], end: [0, 1] },
                        { name: "bottom", start: [0, 2], end: [0, 2] },
                      ]}
                    >
                      <SelectSection
                        amount={amount}
                        setAmount={setAmount}
                        currency={currency}
                        setCurrency={setCurrency}
                      />
                      <SwitchSection
                        ETH={Network.ETH}
                        POLYGON={Network.POLYGON}
                      />
                      <TransferSection />
                    </Grid>
                  </Box>
                </Box>
              </>
            ) : (
              <>
                <TransactionStatus
                  ETH={Network.ETH}
                  POLYGON={Network.POLYGON}
                />
              </>
            )}
          </>
        ) : (
          <>
            <Connect />
          </>
        )}
      </ControlCtx.Provider>
    </>
  );
};

export default ControlPanel;
