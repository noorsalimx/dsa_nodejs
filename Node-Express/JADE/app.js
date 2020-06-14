const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "jade"); // specify the engine name

app.use((req, res, next) => {
  console.log("Timestamp :", new Date().toLocaleString());
  next();
});

app.get("/", (req, res) => {
  res.send("Hello!");
});
app.get("/send", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// JADE
app.get("/jade", (req, res) => {
  let jade = {
    title: "MyTitle",
    message: "Hello from JADE",
  };
  res.render("index", jade); // By default jade looks into 'views' dir
});

app.listen(PORT, () => console.log("App started on", PORT));
