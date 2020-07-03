const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.route("/").get((req, res) => {
  res.send("Hey!");
});

app.listen(PORT, () => console.log("App is listening to port", PORT));
