import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

//Renders a footer
const Footer = () => {
  return (
    <Box
      as="footer"
      mx="auto"
      w="100%"
      py="12"
      px={{ base: "4", md: "8" }}
      bgColor="black"
      mt="5rem"
      bottom="0"
    >
      <Stack>
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <motion.button whileHover={{ scale: 1.1 }}>
            <Link to="/">
              <Text
                color="white"
                fontSize="2rem"
                fontFamily="Widound"
                _hover={{ color: "#ffc108" }}
              >
                Munchies
              </Text>
            </Link>
          </motion.button>
          <SocialIcons />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
