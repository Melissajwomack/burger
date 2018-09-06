//dependencies
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//sets handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//imports routes and gives server access
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start server to listen for requests
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});