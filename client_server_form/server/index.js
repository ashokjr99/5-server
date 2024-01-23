const express = require("express");
const app = express();
const cors = require("cors");
const routeController = require("./controllers/route-controller");

const PORT = 8080;
app.use(cors());
app.use("/routes", routeController);

app.listen(PORT, () => {
  console.log(`Server is runnning on port ${PORT}`);
});
