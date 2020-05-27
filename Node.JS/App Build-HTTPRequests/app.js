/**
 * Get data from a public website and save to a file
 * Using https module
 */

const https = require("https");
const fs = require("fs");

const options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/Nodejs",
  method: "GET",
};

let req = https.request(options, (res) => {
  console.log("StatusCode : ", res.statusCode);

  let resBody = "";

  res.setEncoding("UTF8");
  res.on("data", (chunk) => {
    resBody += chunk;
  });

  res.on("end", () => {
    // process.stdout.write(wikidata);
    fs.writeFile("Nodejs.html", resBody, (err) => {
      if (err) {
        console.error(err);
        throw err;
      }
    });
  });
});

req.on("error", (err) => {
  console.error("Error: " + err.message);
});

req.end();
