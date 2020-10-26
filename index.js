const express = require("express");
const { res } = require("express");
const { read, readFile } = require("fs");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/memebers", (req, res) => {
    res.render("memebers");
});
app.get("/apply", (req, res) => {
    res.render("apply");
});
app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(process.env.PORT || 3000, () =>
    console.log("Listening on http://localhost:3000")
);
