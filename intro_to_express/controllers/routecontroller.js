const router = require("express").Router();
const db = require("../db.json");

router.get("/", (request, response) => {
  try {
    response.status(200).json({
      results: db,
    });
  } catch (err) {
    response.status(500).json({});
  }
});

router.get("/:id", (request, response) => {
  console.log(request.params.id);
  try {
    let { id } = request.params;
    let results = db.filter((i) => i.id == id);

    console.log(results);

    response.status(200).json({
      response: results[0],
    });
  } catch (err) {
    response.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
