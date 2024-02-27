import { Box, Button, Text } from "grommet";

const TransferSection = () => {
  const bridge = async () => {};

  return (
    <Box
      gridArea="bottom"
      background="linear-gradient(180deg, #000 -0%, #8892AD 100%)"
      align="center"
      justify="center"
      border={{ color: "#C6D6FF", size: "medium" }}
    >
      <Button
        label={<Text size="xlarge">TRANSFER</Text>}
        color="linear-gradient(0deg, #000 -0%, #FB0000 100%)"
        onClick={bridge}
        primary
      />
    </Box>
  );
};

export default TransferSection;
