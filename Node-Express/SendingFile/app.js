const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey!");
});
app.get("/send", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = 3000;
app.listen(PORT, () => console.log("App is listening to port", PORT));
