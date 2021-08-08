import React from "react";
import { Box, Image } from "@chakra-ui/react";
import munchiesHero from "../../Images/munchiesHero.png";

const Hero = () => {
  //Munchies banner on landing page
  return (
    <Box>
      <Image
        src={munchiesHero}
        draggable="false"
        objectFit="cover"
        boxSize="100%"
      />
    </Box>
  );
};

export default Hero;
