function route(handler, path, res, reviewData) {
  console.log("Inside Router");
  if (typeof handler[path] === "function") {
    handler[path](res, reviewData);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("error 404 page not found");
    res.end();
  }
}

module.exports = { route };
