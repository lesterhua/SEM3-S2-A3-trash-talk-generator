//require data tools
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generateTrashTalk = require("./trash_talk_generator");

//setting server port
const port = 2700;

//Register ExpressHandlebars helpers
const hbs = exphbs.create({ helpers: [] });

//setting handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//setting get routes
app.get("/", function(req, res) {
  // res.send("this is trash-talk website");
  res.render("index");
});

//setting post routes
app.post("/", function(req, res) {
  console.log("req.body is :", req.body);
  let checkButton = req.body;
  let trashTalk = generateTrashTalk(req.body);
  res.render("index", {
    trashTalk: trashTalk,
    helpers: {
      [req.body.job]() {
        return "checked";
      }
    }
  });
});

//starting and listen on the express server
app.listen(port, function() {
  console.log(`Express app listening on : http://localhost:${port}`);
});
