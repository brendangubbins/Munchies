import React from "react";
import { ButtonGroup, Link } from "@chakra-ui/react";
import { FaGithub, FaDev } from "react-icons/fa";

//Github and Devpost link icons
const SocialIcons = () => {
  return (
    <ButtonGroup variant="ghost" color="white">
      <Link
        mr="1rem"
        target="_blank"
        color="white"
        _hover={{ color: "#ffc108" }}
        href="https://github.com/brendangubbins/Munchies"
      >
        <FaGithub fontSize="60px" />
      </Link>
      <Link
        mr="1rem"
        target="_blank"
        color="white"
        _hover={{ color: "#ffc108" }}
      >
        <FaDev fontSize="60px" />
      </Link>
    </ButtonGroup>
  );
};

export default SocialIcons;
