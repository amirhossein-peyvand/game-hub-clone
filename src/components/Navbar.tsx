import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={2}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="contain" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
