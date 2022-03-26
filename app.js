// ทำหน้าที่Run application หลัก

const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT;
const path = require("path");

app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    username: "terzazaza",
    customer: ["terzaz", "5788", "55588"],
  });
});

app.listen(PORT, () => {
  console.log("Listening on PORT " + chalk.green(PORT));
});
