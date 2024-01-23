const express = require("express");
const app = express();

const crudController = require("./controllers/crud-controller");
const PORT = 8080;

// Required to parse through JSON data that the server receives
app.use(express.json());

app.use("/routes", crudController);

//? Challenge:
/*
    - Use the controller - providing valid path


*/

app.listen(PORT, () => {
  console.log(`The server is spinning at port: ${PORT}`);
});
