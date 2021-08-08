import {
  Text,
  chakra,
  Flex,
  Center,
  Box,
  SimpleGrid,
  Tooltip,
  Image,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import react from "./Images/react.svg";
import StyledComponents from "./Images/StyledComponents.png";
import Chakra from "./Images/Chakra.jpg";
import nodejs from "./Images/nodejs.svg";
import mongodb from "./Images/mongodb.svg";
import Socketio from "./Images/Socketio.png";

const About = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Center>
        <Text fontFamily="Rubik" fontSize="50px" mt="1rem">
          Thanks for checking out Munchies,
        </Text>
      </Center>
      <Center>
        <Text fontSize="50px" fontFamily="Rubik" mt="1rem">
          {" "}
          A{" "}
          <Link href="https://devpost.com/software/munchies-1qyw3t">
            <chakra.span color="#ffa500" textDecoration="underline">
              XHacks 2021
            </chakra.span>{" "}
          </Link>
          submission.
        </Text>
      </Center>

      <Box mt="2rem" w="50%">
        <Text
          fontFamily="Rubik"
          fontSize="25px"
          textDecoration="underline"
          fontWeight="semibold"
          textAlign="center"
        >
          Why did we create Munchies?
        </Text>
        <Text fontFamily="Rubik" fontSize="20px" textAlign="center">
          We know that the last year has been a challenge for all of us,
          especially small businesses and restaurants. The pandemic forced many
          of our favorite restaurants to close down and wanted to help them.
          With Munchies, you and your friends can see local restaurants and
          spots in your neighborhood that you otherwise wouldn't have known
          about. What are you waiting for? Support your neighborhood and satisfy
          your cravings!
        </Text>
      </Box>
      <Box mb="3rem" w="50%" mt="3rem">
        <Text
          fontFamily="Rubik"
          fontSize="25px"
          textDecoration="underline"
          fontWeight="semibold"
          textAlign="center"
        >
          Our Technologies
        </Text>
        <Center>
          <SimpleGrid columns={[2, 2, 3, 3]} spacing={20} mt="2rem">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Tooltip
                hasArrow
                label="React"
                bg="gray.300"
                color="black"
                arrowSize={15}
                gutter="20"
              >
                <Image src={react} boxSize="100px" />
              </Tooltip>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Tooltip
                hasArrow
                label="Styled Components"
                bg="gray.300"
                color="black"
                arrowSize={15}
                gutter="20"
              >
                <Image src={StyledComponents} boxSize="100px" />
              </Tooltip>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Tooltip
                hasArrow
                label="ChakraUI"
                bg="gray.300"
                color="black"
                arrowSize={15}
                gutter="20"
              >
                <Image src={Chakra} boxSize="100px" />
              </Tooltip>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Tooltip
                hasArrow
                label="Node"
                bg="gray.300"
                color="black"
                arrowSize={15}
                gutter="20"
              >
                <Image src={nodejs} boxSize="100px" />
              </Tooltip>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Tooltip
                hasArrow
                label="MongoDB"
                bg="gray.300"
                color="black"
                arrowSize={15}
                gutter="20"
              >
                <Image src={mongodb} boxSize="100px" />
              </Tooltip>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Tooltip
                hasArrow
                label="Socket.io"
                bg="gray.300"
                color="black"
                arrowSize={15}
                gutter="20"
              >
                <Image src={Socketio} boxSize="100px" />
              </Tooltip>
            </motion.div>
          </SimpleGrid>
        </Center>
      </Box>
      <Box mb="3rem" w="50%" mt="3rem">
        <Text
          fontFamily="Rubik"
          fontSize="25px"
          textDecoration="underline"
          fontWeight="semibold"
          textAlign="center"
        >
          Our Team
        </Text>
        <Center>
          <Link
            href="https://github.com/brendangubbins"
            target="_blank"
            mt="1rem"
            fontFamily="Rubik"
            _hover={{ color: "#ffc108" }}
          >
            Brendan Gubbins
          </Link>
        </Center>
        <Center>
          <Link
            href="https://github.com/auto-kad"
            target="_blank"
            mt="1rem"
            fontFamily="Rubik"
            _hover={{ color: "#ffc108" }}
          >
            Abedin Kadir
          </Link>
        </Center>
        <Center>
          <Link
            href="https://github.com/Slaeh"
            target="_blank"
            mt="1rem"
            fontFamily="Rubik"
            _hover={{ color: "#ffc108" }}
          >
            Harjit Liyal
          </Link>
        </Center>
        <Center>
          <Link
            href="https://github.com/epaez1996"
            target="_blank"
            mt="1rem"
            fontFamily="Rubik"
            _hover={{ color: "#ffc108" }}
          >
            Edward Paez
          </Link>
        </Center>
      </Box>
    </Flex>
  );
};

export default About;
