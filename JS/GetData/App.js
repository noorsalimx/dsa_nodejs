// Get data from a public website and save to a fle

// Using https module
const https = require("https");
const fs = require("fs");

const hostname = "https://en.wikipedia.org/wiki/Main_Page";
const port = 443;
const path = "./wiki/Nodejs";

if (!fs.existsSync(path)) {
  fs.mkdirSync(path);
}

https
  .get(hostname, (res) => {
    let data = "";

    // A chunk of data has been recieved.
    res.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    res.on("end", () => {
      fs.appendFile(path+"Nodejs.html", data, function (err) {
        if (err) throw err;
        console.log("Saved!");
      });
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

/* // Using request module
const request = require("request");

request("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", { json: true }, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  console.log(body.url);
  console.log(body.explanation);
}); */
