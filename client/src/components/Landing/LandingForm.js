import { useRef } from "react";
import styled from "styled-components";
import { Flex, Center, Box, chakra, Image, Button } from "@chakra-ui/react";
import Form from "./Form/Form";
import locations from "../../Images/locations.svg";
import rekindle from "../../Images/rekindle.svg";
import supportLocal from "../../Images/supportLocal.svg";

// main container for Form
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  width: 30%;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-radius: 5px;
  border: 1px solid #eaeaea;

  @media only screen and (max-width: 1052px) {
    width: 50%;
  }

  @media only screen and (max-width: 700px) {
    width: 60%;
    padding: 2rem 3rem;
  }

  @media only screen and (max-width: 514px) {
    width: 90%;
    padding: 4rem;
  }

  @media only screen and (max-width: 350px) {
    width: 100%;
  }
`;

const LandingForm = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <Flex flexDirection="column">
      <Center>
        <Button
          size="lg"
          bgColor="#ffa500"
          _hover={{ bgColor: "#ffc108" }}
          fontFamily="Rubik"
          onClick={executeScroll}
        >
          Login
        </Button>
      </Center>

      {/* First Card */}
      <Center>
        <Flex
          // bg={"#F9FAFB"}
          w="40%"
          alignItems="center"
          justifyContent="center"
          // ml="7rem"
          flexDirection={["column", "column", "row", "row"]}
          mb="2rem"
        >
          <Box>
            <Box py={10} px={6} w={{ lg: "100%" }}>
              <chakra.h2
                fontSize={{ base: "2xl", md: "3xl" }}
                color={"gray.800"}
                fontWeight="bold"
              >
                Familiar cuisines, new{" "}
                <chakra.span color="orange">adventures</chakra.span>
              </chakra.h2>
              <chakra.p mt={4} color={"gray.600"} fontWeight="semibold">
                Plan your next foodie adventure with your friends and family by
                live messaging and browsing restaurants in your area!
              </chakra.p>
            </Box>
          </Box>
          <Image src={locations} boxSize="sm" draggable="false"></Image>
        </Flex>
      </Center>

      {/* Second Card */}
      <Center>
        <Flex
          // bg={"#F9FAFB"}
          w="40%"
          alignItems="center"
          justifyContent="center"
          // ml="7rem"
          flexDirection="row-reverse"
          mb="2rem"
        >
          <Box>
            <Box py={10} px={6} w={{ lg: "100%" }}>
              <chakra.h2
                fontSize={{ base: "2xl", md: "3xl" }}
                color={"gray.800"}
                fontWeight="bold"
              >
                Rekindle your{" "}
                <chakra.span color="orange">relationships</chakra.span>
              </chakra.h2>
              <chakra.p mt={4} color={"gray.600"} fontWeight="semibold">
                Finding a spot that suits everyone's tastes can be hard. We're
                here to help do that for you. You and your friends can select
                what foods you like, and we'll show you local spots that you
                both can enjoy.
              </chakra.p>
            </Box>
          </Box>
          <Image src={rekindle} boxSize="sm" draggable="false"></Image>
        </Flex>
      </Center>

      {/* Third Card */}
      <Center>
        <Flex
          // bg={"#F9FAFB"}
          w="40%"
          alignItems="center"
          justifyContent="center"
          // ml="7rem"
          flexDirection="row"
          mb="2rem"
        >
          <Box>
            <Box py={10} px={6} w={{ lg: "100%" }}>
              <chakra.h2
                fontSize={{ base: "2xl", md: "3xl" }}
                color={"gray.800"}
                fontWeight="bold"
              >
                Support{" "}
                <chakra.span color="orange">local restaurants</chakra.span>
              </chakra.h2>
              <chakra.p mt={4} color={"gray.600"} fontWeight="semibold">
                This past year has been challenging for all of us, including
                local businesses. Munchies is designed to showcase only
                restaurants in your area.
              </chakra.p>
            </Box>
          </Box>
          <Image src={supportLocal} boxSize="sm" draggable="false"></Image>
        </Flex>
      </Center>
      <div>
        <FormContainer ref={myRef} style={{ marginBottom: "5rem" }}>
          <Form />
        </FormContainer>
      </div>
    </Flex>
  );
};

export default LandingForm;
