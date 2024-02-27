import { useSpring, animated } from "react-spring";
import {  Text, Box } from "grommet";
import { Unsorted } from "grommet-icons";
import { ControlCtx } from "../contexts/controlContext";
import { useContext } from "react";

const SwitchSection = (props: any) => {
  const { turn, setTurn, networkTo, networkFrom,setNetworkTo, setNetworkFrom } = useContext(ControlCtx);
  const styles = useSpring(
    turn
      ? {
          from: { rotateZ: 0 },
          to: { rotateZ: 180 },
        }
      : { from: { rotateZ: 180 }, to: { rotateZ: 0 } }
  );

  return (
    <>
      <Box
        gridArea="center"
        background="linear-gradient(180deg, #000 -0%, #8892AD 100%)"
        direction="column"
        pad="medium"
        align="center"
        justify="center"
        border={{ color: "#C6D6FF", size: "medium" }}
      >
        <Box
          width="400px"
          height="50px"
          background="linear-gradient(0deg, #000 -0%, #FB0000 100%)"
          align="center"
          justify="center"
        >
          <Text color="#fff" size="xlarge">
            FROM: {networkFrom}
          </Text>
        </Box>

        <animated.div style={{ ...styles }}>
          <div style={{ cursor: "pointer" }}>
            <Unsorted
              size="xlarge"
              onMouseEnter={() => {
                setTurn(!turn);
              }}
              onMouseLeave={() => {
                setTurn(!turn);
              }}
              onClick={() => {
                if (networkTo === props.ETH) {
                  setNetworkTo(props.POLYGON);
                  setNetworkFrom(props.ETH);
                } else if (networkTo === props.POLYGON) {
                  setNetworkTo(props.ETH);
                  setNetworkFrom(props.POLYGON); 
                }
              }}
            />
          </div>
        </animated.div>
        <Box
          width="400px"
          height="50px"
          background="linear-gradient(0deg, #000 -0%, #FB0000 100%)"
          align="center"
          justify="center"
        >
          <Text color="#fff" size="xlarge">
            TO: {networkTo}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default SwitchSection;
