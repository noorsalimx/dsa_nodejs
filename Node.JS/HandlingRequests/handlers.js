const querystring = require("querystring");

function home(res) {
  console.log("Home handler");
  let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </head>
      <body>
        <form action="/newpage" method="post">
          First name:<br />
          <input type="text" id="fname" name="fname" /><br />
          Last name:<br />
          <input type="text" id="lname" name="lname" /><br /><br />
          <input type="submit" value="Submit" />
        </form>
      </body>
    </html>
    `;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);
  res.end();
}

function review(res, reviewData) {
  console.log("Query String : ", querystring.parse(reviewData));
  let { fname, lname } = querystring.parse(reviewData);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(fname + " " + lname + " is the creator of Node.js");
  res.end();
}

module.exports = { home, review };
