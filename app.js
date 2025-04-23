const express = require('express');
const bodyParser = require("body-parser"); // Not used, but okay to leave for now
const port = process.env.PORT || 8080;



var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

var items = []; // In-memory storage for tasks

app.get("/", function(req, res) {
    res.render("list", { ejes: items }); // Passes items to the template as 'ejes'
});

app.post("/", function(req, res) {
    var item = req.body.ele1; // Gets input from form field named 'ele1'
    items.push(item);         // Adds it to the list
    res.redirect("/");        // Refreshes page with new list
});

app.listen(port, () => {
    console.log("Server started on port 8080");
  });