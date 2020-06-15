const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "jade"); // specify the engine name

// JADE
app.get("/", (req, res) => {
  res.render("sample"); // By default jade looks into 'views' dir
});

app.listen(PORT, () => console.log("App started on", PORT));
