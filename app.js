// ทำหน้าที่Run application หลัก

const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT;
const path = require("path");

app.use(express.static(path.join(__dirname, "/public/")));
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("Listening on PORT " + chalk.green(PORT));
});
