const router = require("express").Router();

router.post("/register", (request, response) => {
  try {
    console.log(request.body);

    const { firstName, lastName, password } = request.body;
    response.status(200).json({
      fullName: `${firstName} ${lastName}`,
      password: password,
      date: request.datePosted,
    });
  } catch (err) {
    response
      .status(500)
      .send(`<img src="https://http.cat/500" alt="status code 500"/>`);
  }
});

module.exports = router;
