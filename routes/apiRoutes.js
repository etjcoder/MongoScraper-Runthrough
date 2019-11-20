var db = require("../models");
var path = require("path");
var cheerio = require("cheerio")
var axios = require("axios");

var databaseURL = "pcscraper"
var collections = ["cards"]

module.exports = function (app) {


    app.get("/scrape/pcCardsSetOne", function (req, res) {

        axios.get("https://quizlet.com/236361078/property-and-casualty-insurance-exam-questions-and-answers-part-one-flash-cards/").then(function (response) {

            var $ = cheerio.load(response.data);
            // var results = [];

            $("div.SetPageTerm-content").each(function (i, element) {
                var front = $(element).find("a.SetPageTerm-wordText").text();
                var back = $(element).find("a.SetPageTerm-definitionText").text();
                console.log(front)
                console.log(back)

                var cardData = {
                    front: front,
                    back: back
                }

                db.Card.create(cardData).then(function (dbCard) {
                    console.log(dbCard);
                })
                    .catch(function (err) {
                        console.log(err);
                    })
            })
            res.send("Scrape Complete")
        })
    })


}