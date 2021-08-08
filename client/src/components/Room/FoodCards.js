import { useState } from "react";
import {
  chakra,
  Flex,
  Text,
  Box,
  Center,
  Image,
  Tooltip,
  IconButton,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import munchiesHero from "../../Images/munchiesHero.png";
import "./roomStyles.css";
import TinderCard from "react-tinder-card";
import { BiLink, BiMoney, BiStar } from "react-icons/bi";
import { CloseIcon, CheckIcon, StarIcon } from "@chakra-ui/icons";
import review from "../../Images/review.svg";
import { useToast } from "@chakra-ui/react";
import Tilt from "react-tilt";

//Render restaurants as tinder cards
const FoodCards = ({ yelpAPIData }) => {
  console.log("My Yelp API data is ", yelpAPIData);

  //Toast for button error
  const toast = useToast();

  //State to hold all the choices the user swiped right on
  const [savedCards, setSavedCards] = useState([]);

  //State to hold the length of the yelp data
  const [len, setLen] = useState(yelpAPIData.length);

  //State to render the verdict page - initially false because user needs to exhaust their matches
  const [displayVerdict, setDisplayVerdict] = useState(false);

  //State to fire when the user is ready for their results
  const handleVerdict = () => {
    setDisplayVerdict(true);
  };

  //Fire this whenever user swipes on a card
  const swiped = (dir, restaurant) => {
    console.log("User swiped ", dir);
    console.log("The restaurant was ", restaurant);
    //If the direction is right, we want to save the card
    //Triple equals doesn't work
    if (dir == "right") {
      setSavedCards((savedCards) => [...savedCards, restaurant]);
    }
    //Regardless of swipe direction, decrement size of response data
    setLen((len) => len - 1);
    console.log(len);
  };
  // If length is greater than 0, user still has matches they need to swipe on
  if (len > 0) {
    return (
      <Box mt="-27rem">
        {/* <Flex alignItems="center"> */}
        <Text fontFamily="Rubik" fontSize="70px">
          Your Matches
        </Text>
        <Center>
          <Text fontFamily="Rubik" fontSize="20px" mb="1rem">
            Swipe or click to make your choices
          </Text>
        </Center>
        <Flex justifyContent="center">
          {yelpAPIData.map((restaurant) => {
            // address is in the form of an array, join the array together with a space
            let address = restaurant.location.display_address.join(" ");
            return (
              //returns a Tinder card with the restaurant's image, address, ratings, and Yelp website
              <TinderCard
                className="swipe"
                onSwipe={(dir) => swiped(dir, restaurant)} //trigger this when a user swipes left or right
                preventSwipe={["up", "down"]} //user can't swipe up or down
                key={restaurant.id}
              >
                <Tilt className="Tilt">
                  <Box
                    w="sm"
                    mx="auto"
                    bg="gray.800"
                    shadow="lg"
                    rounded="lg"
                    overflow="hidden"
                    mt="2rem"
                  >
                    {/* If the image does not exist, use munchies background as a placeholder */}
                    {restaurant.image_url == "" ? (
                      <Image
                        width="100%"
                        h="224px"
                        //h={56}
                        fit="cover"
                        objectPosition="center"
                        src={munchiesHero}
                        alt="avatar"
                        draggable="false"
                      />
                    ) : (
                      //Else use the restaurants image
                      <Image
                        width="100%"
                        h="224px"
                        //h={56}
                        fit="cover"
                        objectPosition="center"
                        src={restaurant.image_url}
                        alt="avatar"
                        draggable="false"
                      />
                    )}

                    <Box py={4} px={6} h="280px">
                      <chakra.h1
                        fontSize="xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                      >
                        {restaurant.name}
                      </chakra.h1>

                      <chakra.p
                        fontSize="sm"
                        py={2}
                        color="white"
                        textAlign="center"
                      >
                        {address}
                      </chakra.p>
                      <Flex alignItems="center" mt={4} color="gray.200">
                        <BiStar size={30} mr={2} />
                        {`${restaurant.rating}/5 -`}
                        <chakra.h1 px={2} fontSize="md">
                          {restaurant.review_count} Ratings
                        </chakra.h1>
                      </Flex>
                      <Flex alignItems="center" mt={4} color="gray.200">
                        <BiMoney size={30} mr="1rem" />
                        {/* If money is undefined, say it's unavailable, else render the price */}
                        {`${
                          restaurant.price != undefined
                            ? restaurant.price
                            : "Price unavailable 😔"
                        }`}
                      </Flex>
                      <Flex alignItems="center" mt={4} color="gray.200">
                        <BiLink size={30} mr={2} />
                        <a
                          href={restaurant.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Learn More
                        </a>
                      </Flex>
                    </Box>
                  </Box>
                </Tilt>
                <Center>
                  <Flex mt="2rem">
                    <Tooltip label="Dislike" aria-label="tooltip">
                      <IconButton
                        m="1rem"
                        colorScheme="red"
                        size="lg"
                        isRound="true"
                        icon={<CloseIcon />}
                        onClick={() =>
                          toast({
                            title: "Oh no!",
                            description: "This feature doesn't work yet 😔",
                            status: "error",
                            duration: 4000,
                            isClosable: true,
                          })
                        }
                      />
                    </Tooltip>
                    <Tooltip label="Favorite" aria-label="A tooltip">
                      <IconButton
                        m="1rem"
                        colorScheme="yellow"
                        size="lg"
                        isRound="true"
                        icon={<StarIcon color="white" />}
                        onClick={() =>
                          toast({
                            title: "Oh no!",
                            description: "This feature doesn't work yet 😔",
                            status: "error",
                            duration: 4000,
                            isClosable: true,
                          })
                        }
                      />
                    </Tooltip>
                    <Tooltip label="Like" aria-label="A tooltip">
                      <IconButton
                        m="1rem"
                        colorScheme="green"
                        size="lg"
                        isRound="true"
                        icon={<CheckIcon />}
                        onClick={() =>
                          toast({
                            title: "Oh no!",
                            description: "This feature doesn't work yet 😔",
                            status: "error",
                            duration: 4000,
                            isClosable: true,
                          })
                        }
                      />
                    </Tooltip>
                  </Flex>
                </Center>
              </TinderCard>
            );
          })}
        </Flex>
      </Box>
    );
  }
  //User ran out of matches - tell them
  else if (len === 0 && displayVerdict === false) {
    return (
      <Flex mt="-20rem" direction="column" width="100%">
        <Center>
          <Text
            mb="3rem"
            fontFamily="Rubik"
            fontSize={["15px", "10px", "30px"]}
          >
            You're out of matches. Ready to see your results? 👀
          </Text>
        </Center>
        <div width="20%">
          <Center>
            <Button
              justifyContent="center"
              fontFamily="Rubik"
              bgColor="#ffa500"
              _hover={{ bgColor: "#ffc108" }}
              onClick={handleVerdict}
            >
              Reveal Matches
            </Button>
          </Center>
        </div>
        <Center>
          <Image
            src={review}
            draggable="false"
            mt="2rem"
            mr="2rem"
            boxSize="sm"
          />
        </Center>
      </Flex>
    );
  }
  //Once user is ready to see their verdict, render their matched cards
  else if (displayVerdict === true) {
    return (
      <Flex direction="column" width="100%" fontFamily="Rubik">
        <Center>
          <Text fontFamily="Rubik" mt="2rem" fontSize="20px">
            Based on your matches, you should support these restaurants in your
            area! 😍
          </Text>
        </Center>
        <SimpleGrid columns={[1, 1, 1, 1, 2]} spacing={10}>
          {savedCards.map((restaurant) => {
            let address = restaurant.location.display_address.join(" ");
            return (
              <Tilt className="Tilt" key={restaurant.id}>
                <Box
                  w="sm"
                  mx="auto"
                  bg="gray.800"
                  shadow="lg"
                  rounded="lg"
                  mt="3rem"
                >
                  <Image
                    src={restaurant.image_url}
                    alt="avatar"
                    draggable="false"
                    width="100%"
                    h="224px"
                    fit="cover"
                    objectPosition="center"
                  />
                  <Box py={4} px={6} h="280px">
                    <chakra.h1
                      fontSize="xl"
                      fontWeight="bold"
                      color="white"
                      textAlign="center"
                    >
                      {restaurant.name}
                    </chakra.h1>

                    <chakra.p
                      fontSize="sm"
                      py={2}
                      color="white"
                      textAlign="center"
                    >
                      {address}
                    </chakra.p>

                    <Flex alignItems="center" mt={4} color="gray.200">
                      <BiStar size={30} mr={2} />
                      {`${restaurant.rating}/5 -`}
                      <chakra.h1 px={2} fontSize="md">
                        {restaurant.review_count} Ratings
                      </chakra.h1>
                    </Flex>
                    <Flex alignItems="center" mt={4} color="gray.200">
                      <BiMoney size={30} mr="1rem" />

                      {`${
                        restaurant.price != undefined
                          ? restaurant.price
                          : "Price unavailable 😔"
                      }`}
                    </Flex>
                    <Flex alignItems="center" mt={4} color="gray.200">
                      <BiLink size={30} mr={2} />

                      <a href={restaurant.url} target="_blank" rel="noreferrer">
                        Learn More
                      </a>
                    </Flex>
                  </Box>
                </Box>
              </Tilt>
            );
          })}
        </SimpleGrid>
      </Flex>
    );
  }
};

export default FoodCards;
