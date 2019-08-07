var request = require("request");
var express = require("express");

var app = express();

app.set("view engine", "ejs");

var nicks = ["Nick1", "Nick2", "Nick3"];
var JSONdata = [];

(function() {
  JSONdata = [];
  var i;
  for (i = 0; i < nicks.length; i++) {
    var nick = String(nicks[i]);

    request(
      {
        headers: {
          "TRN-Api-Key": "API_KEY_HERE"
        },
        uri: "https://api.fortnitetracker.com/v1/profile/account/" + nick,
        method: "GET"
      },
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          const data = JSON.parse(body);
          JSONdata.push(data);
        }
      }
    );
  }
  setTimeout(arguments.callee, 600000);
})();

app.get("/", function(req, res) {
  res.render("results", { JSONdata: JSONdata });
});

app.listen(3000, function() {
  console.log("Fortnite App has started");
});
