import axios from "axios";

const locationToYelp = async (searchTerms) => {


  var url = new URL("https://munchies-xhacks.herokuapp.com/yelp-get");
  url.search = new URLSearchParams(searchTerms);


  const yelpResponse = await axios.get(url, searchTerms);
  console.log("Inside the YelpAPI.js file: ", yelpResponse);
  return yelpResponse.data;

};

export default locationToYelp;
//There should be a text box, where the user enters a keyword (like "pizza" or "deli"),
// click a button, and that keyword gets sent to this function to get all nearby restaurants
//locationToYelp(yelpParameters);
