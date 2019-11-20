require("dotenv").config();
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
// var app = express();


var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");
var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
)
app.set("view engine", "handlebars");
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/pcscraper"
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});

module.exports = app;