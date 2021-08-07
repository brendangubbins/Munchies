import React from "react";
import styled from "styled-components";
import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../index.css";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: black;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

//Renders a navbar
const Navbar = () => {
  return (
    <Nav>
      <motion.button whileHover={{ scale: 1.1 }}>
        <Link to="/">
          <Text
            fontFamily="Widound"
            color="white"
            fontSize="2rem"
            ml="1.5rem"
            _hover={{ color: "#ffc108" }}
          >
            Munchies
          </Text>
        </Link>
      </motion.button>
      <Flex justifyContent="space-between">
        <motion.button whileHover={{ scale: 1.1 }}>
          <Link to="About">
            <Button
              m="1rem"
              bgColor="white"
              fontFamily="Rubik"
              _hover={{ bgColor: "#ffc108" }}
            >
              About
            </Button>
          </Link>
        </motion.button>
      </Flex>
    </Nav>
  );
};

export default Navbar;
