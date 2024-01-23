const { request } = require("express");

// Creating a variable --> importing the router engine from express
const router = require("express").Router();

// First route that is a get request
router.get("/hello-world", (request, response) => {
  response.send("Hello World");
});

router.post("/greeting", (request, response) => {
  response.status(200).send("Good Afternoon");
});

router.post("/json", (request, response) => {
  console.log(request.body);

  response.status(200).send(`Your name was added: ${request.body.name}`);
});

router.get("*", (request, response) => {
  // - "*": accounts for a wildcard or anything that has not been defined
  // - Provides clean response back to the user

  response
    .status(400)
    .send(`<img src="https://http.cat/404" alt="status code 404"/>`);
});

module.exports = router;
