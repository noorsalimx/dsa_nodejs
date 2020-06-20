const express = require("express");
const hbs = require("express-handlebars");

const _const = require("../config/constants");
const app = express();

app.engine("hbs", hbs({ extname: "hbs", defaultLayout: "layout", layoutsDir: __dirname + "/views/layouts" }));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log({ Time: new Date().toLocaleTimeString() });
  next();
});

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/index", (req, res) => {
  res.render("index", { title: "Handlebars", condition: true, arr: [3, 5, 7] });
});

app.listen(_const.PORT, () =>
  console.log({
    Message: "App started on " + _const.PORT,
    TimeStamp: new Date().toLocaleString(),
  })
);
