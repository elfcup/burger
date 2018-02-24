const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();
const port = process.env.PORT || 8080;

const router = require("./controllers/burgers_controller.js");

app.use("/", router);
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));


app.listen(port, function() {
    console.log("listening on port", port);
});