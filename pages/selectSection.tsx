import { Box, Select, Stack, TextInput } from "grommet";
import { Text  } from "grommet";
import { ControlCtx } from "../contexts/controlContext";
import { useContext,   useState } from "react";

const SelectSection = (props: any) => {
  const { currency, setCurrency, setAmount, networkFrom } = useContext(ControlCtx);
  const [addMax, setMax] = useState(0);

  return (
    <Box
      gridArea="top"
      background="linear-gradient(180deg, #000 -0%, #8892AD 100%)"
      align="center"
      justify="center"
      direction="column"
      pad="medium"
      border={{ color: "#C6D6FF", size: "medium" }}
      gap="medium"
    >
      <Text size="xlarge">BRIDGE</Text>
      <Box direction="column" gap="small">
        <Box direction="column" alignSelf="center">
          <Box justify="center">YOUR TOKENS: 000</Box>
          <Box justify="center"> NETWORK: {" " + networkFrom}</Box>
        </Box>
        <Box direction="row" gap="medium">
          <Select
            size="small"
            placeholder={currency}
            options={["L1-CARE", "L2-CARE"]}
            value={currency}
            onChange={({ option }) => setCurrency(option)}
          />
          <Stack anchor="right">
            <TextInput
              size="xsmall"
              placeholder="amount"
              value={addMax}
              onChange={(event) => setAmount(event.target.value)}
              reverse
            />
            <Box
              onClick={() => {
                setMax(1000);
              }}
              margin={{ right: "5px" }}
            >
              <Text size="xsmall">MAX</Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectSection;
