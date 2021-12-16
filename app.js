const express = require("express");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").load();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let routes = require("./api/routes");

const port = process.env.PORT || 3001;

routes(app);

app.listen(port);

console.log("Server started on: " + port);
