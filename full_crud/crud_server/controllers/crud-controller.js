const router = require("express").Router();
const db = require("../mockdb/db.json");

//? Challenge:
/*
    - 2 GET request
        - One to retrieve all of the data from the given mock dataset
        - One to retrieve a specific piece of data (obj) from the dataset by its id

        - Implement try/catch
        - Provide correct HTTP status codes
        -




*/
// gets all data
router.get("/", (req, res) => {
  try {
    res.status(200).json({
      Results: db,
    });
  } catch (err) {
    res.status(404).send("Nothing Found");
  }
});
// gets specific data by ID
router.get("/param/:id", (req, res) => {
  try {
    let results = db.filter((obj) => obj.id == req.params.id);

    results.length > 0
      ? res.status(202).json({
          Results: results,
        })
      : res.status(400).send("Nothing Found");
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
});
//
router.post("/create", (req, res) => {
  try {
    // keys found in postman
    // req = request
    let myObject = {
      id: db.length + 1,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      emoji: req.body.emoji,
    };

    db.push(myObject);

    res.status(201).json({
      Added: myObject,
      Results: db,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
});

module.exports = router;
