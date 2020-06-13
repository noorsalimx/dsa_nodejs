const express = require("express");
const app = express();

// Middleware
/* To serve static files such as images, CSS files, 
  and JavaScript files, use the express.static built-in middleware function in Express.
 */
app.use(express.static("public")); // includes public dir

app.use((req, res, next) => {
  console.log("Timestamp :", new Date().toLocaleString());
  next();
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something happened wrong!");
});

// Router
app.get("/", (req, res) => {
  res.send("Hey!");
});
app.get("/send", (req, res) => {
  res.sendFile(__dirname + "/SendingFile/index.html");
});

const PORT = 3000;
app.listen(PORT, () => console.log("App is listening to port", PORT));
