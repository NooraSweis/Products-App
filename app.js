const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");
const app = express();
const port = 8081;

app.set("port", process.env.port || port);
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));
app.use(fileUpload());

// Configure routes for products app:
const { mainPage } = require("./routes/index");
const { addProductPage } = require("./routes/product");

app.get("/", mainPage);
app.get("/add", addProductPage);

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});