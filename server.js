const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//Parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//call routes
var routes = require("./router");
routes(app);

app.listen(port, () => {
  console.log("Server Started on Port : " + port);
});
