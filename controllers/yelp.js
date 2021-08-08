const yelpRouter = require("express").Router();
const yelp = require("yelp-fusion");
const cors = require("cors");
const yelpClient = yelp.client(process.env.YELP_API_KEY);

yelpRouter.get(
  "/",
  cors({
    origin: "https://munchies-xhacks.herokuapp.com",
  }),
  async function (req, res) {
    const yelpResponse = await yelpClient
      .search(req.query)
      .then((response) => {
        const result = response.jsonBody.businesses;
        return result;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    res.send(yelpResponse);
  }
);
module.exports = yelpRouter;
