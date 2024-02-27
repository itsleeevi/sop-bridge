import { Box, Grid, Text, Meter, Button } from "grommet";
import { useContext, useEffect, useState } from "react";
import { Web3Ctx } from "../contexts/web3Context";
import { ControlCtx } from "../contexts/controlContext";

const Texts = {
  SIGN: "Waiting For Signature.",
  CONFIRM: "Waiting For Transaction.",
  LEAVING_ETH: "Hold On! Leaving Ethereum.",
  LEAVING_POLYGON: "Stick around! Leaving Polygon.",
  ARRIVED: "Success!",
};

const TransactionStatus = (props: any) => {
  const { accounts, switchNetworkToETH, switchNetworkToPolygon } =
    useContext(Web3Ctx);
  const [text, setText] = useState("");
  const [value, setValue] = useState(0);
  const {
    signNeeded,
    confirmNeeded,
    amount,
    networkTo,
    networkFrom,
    setTurn,
    setHasStarted,
    setAmount,
    setSignNeeded,
    setConfirmNeeded,
  } = useContext(ControlCtx);

  useEffect(() => {
    if (signNeeded) {
      setValue(10);
      setText(Texts.SIGN);
    } else if (confirmNeeded) {
      setValue(15);
      setText(Texts.CONFIRM);
    }
  }, [signNeeded, confirmNeeded]);

  useEffect(() => {
    if (text === Texts.ARRIVED) {
      if (networkTo === props.POLYGON) {
        switchNetworkToPolygon();
      } else {
        switchNetworkToETH();
      }
    }
  }, [text]);

  const newTransaction = () => {
    setTurn(false);
    setHasStarted(false);
    setAmount(0);
    setSignNeeded(false);
    setConfirmNeeded(false);
  };

  return (
    <Box gap="medium">
      <Box direction="column" background="#fff" height="700px" width="500px">
        <Grid
          fill={true}
          pad="medium"
          rows={["auto", "auto", "auto"]}
          columns={["full"]}
          gap="small"
          areas={[
            { name: "top", start: [0, 0], end: [0, 0] },
            { name: "center", start: [0, 1], end: [0, 1] },
            { name: "bottom", start: [0, 2], end: [0, 2] },
          ]}
        >
          <Box
            gridArea="top"
            background="#000"
            direction="column"
            pad="medium"
            align="center"
            justify="center"
            gap="large"
          >
            <Box
              background="#fff"
              width="500px"
              height="150px"
              direction="column"
              align="center"
              justify="center"
              pad="small"
              gap="small"
            >
              <Text color="#000" size="xlarge" weight="bold">
                Transaction Status
              </Text>
              <Box direction="row" gap="large">
                <Box direction="column" align="center">
                  <Text color="#000" size="small" weight="bold">
                    From:
                  </Text>
                  <Text color="#000" size="xsmall">
                    {networkFrom}
                  </Text>
                </Box>
                <Box direction="column" align="center">
                  <Text
                    color="#000"
                    size="medium"
                    weight="bold"
                    textAlign="center"
                  >
                    Amount Transferring
                  </Text>
                  <Text color="#000" size="small">
                    {amount} CARE
                  </Text>
                </Box>
                <Box direction="column" align="center">
                  <Text color="#000" size="small" weight="bold">
                    To:
                  </Text>
                  <Text color="#000" size="xsmall">
                    {networkTo}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            gridArea="center"
            background="#000"
            direction="column"
            pad="medium"
            align="center"
            justify="center"
          >
            <Box
              width="400px"
              height="50px"
              background="#fff"
              align="center"
              justify="center"
            >
              <Text color="#000" size="xlarge" weight="bold">
                {text}
              </Text>
            </Box>
          </Box>
          <Box
            gridArea="bottom"
            background="#000"
            direction="column"
            pad="medium"
            align="center"
            justify="center"
            gap="small"
          >
            <Box
              width="400px"
              height="50px"
              background="#fff"
              align="center"
              justify="center"
            >
              <Meter type="bar" value={value} />
            </Box>
            <Box>
              {text === Texts.ARRIVED && (
                <Button
                  label={<Text size="xlarge">New Transaction</Text>}
                  onClick={newTransaction}
                />
              )}
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default TransactionStatus;
