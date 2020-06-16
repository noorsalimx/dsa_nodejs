const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "jade"); // specify the engine name

app.use((req, res, next) => {
  console.log({ Time: new Date().toLocaleTimeString() });
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
  let obj = {
    title: "MyTitle",
    message: "Hello from JADE",
  };
  res.render("index", obj); // By default jade looks into 'views' dir
});
app.get("/loop", (req, res) => {
  let obj = {
    title: "loop",
    message: "Hello from JADE LOOP",
  };
  res.render("loop", obj); // By default jade looks into 'views' dir
});

app.listen(PORT, () =>
  console.log({
    App: "View Engine",
    Message: "App started on " + PORT,
    TimeStamp: new Date().toLocaleString(),
  })
);
