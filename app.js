const express = require("express");

const path = require("path");

const app = express();

const port = 2000;

const db = require("./Model/index");
const { index, createblog } = require("./Controller/blogController");

app.set("view engine", "ejs");

require("./Config/dbConfig");

db.sequelize.sync({ force: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Uploads")));
app.get("/", index);
app.get("/createblog", createblog);
app.listen(port, () => {
  console.log("Node server started at port 6000");
});
