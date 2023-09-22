import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        checked={colorMode === "light"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Light Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
