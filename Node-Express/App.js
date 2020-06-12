const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("Timestamp :", new Date().toLocaleString());
  next();
});

app.get("/", (req, res) => {
  res.send("Hey!");
});
app.get("/send", (req, res) => {
  res.sendFile(__dirname + "/SendingFile/index.html");
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something happened wrong!");
});

const PORT = 3000;
app.listen(PORT, () => console.log("App is listening to port", PORT));
