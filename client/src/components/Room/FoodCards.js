import React from "react";
import {
  chakra,
  Flex,
  Text,
  Box,
  Center,
  Image,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import munchiesHero from "../../Images/munchiesHero.png";
import "./roomStyles.css";
import TinderCard from "react-tinder-card";
import { BiLink, BiMoney, BiStar } from "react-icons/bi";
import { CloseIcon, CheckIcon, StarIcon } from "@chakra-ui/icons";

const FoodCards = ({ yelpAPIData }) => {
  console.log("My Yelp API data is ", yelpAPIData);

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
              //   onSwipe={(dir) => swiped(dir, restaurant)} //trigger this when a user swipes left or right
              preventSwipe={["up", "down"]} //user can't swipe up or down
              key={restaurant.id}
            >
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
                    <a href={restaurant.url} target="_blank" rel="noreferrer">
                      {" "}
                      Learn More
                    </a>
                  </Flex>
                </Box>
              </Box>
              <Center>
                <Flex mt="2rem">
                  {" "}
                  <Tooltip label="Dislike" aria-label="tooltip">
                    <IconButton
                      m="1rem"
                      colorScheme="red"
                      size="lg"
                      isRound="true"
                      icon={<CloseIcon />}
                    />
                  </Tooltip>
                  <Tooltip label="Favorite" aria-label="A tooltip">
                    <IconButton
                      m="1rem"
                      colorScheme="yellow"
                      size="lg"
                      isRound="true"
                      icon={<StarIcon color="white" />}
                    />
                  </Tooltip>
                  <Tooltip label="Like" aria-label="A tooltip">
                    <IconButton
                      m="1rem"
                      colorScheme="green"
                      size="lg"
                      isRound="true"
                      icon={<CheckIcon />}
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
};

export default FoodCards;
