var db = require("../models");
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        var cardArray = []

        var hbsObject = {
            cards: cardArray
        }

        db.Card.find({})
            .populate("cards")
            .then(function (data) {

                console.log(data);

                for (var i = 0; i < data.length; i++) {

                    cardArray.push(data[i])

                }

                setTimeout(function () {
                    res.render("index", hbsObject)
                }, 500)
            })

    })

}