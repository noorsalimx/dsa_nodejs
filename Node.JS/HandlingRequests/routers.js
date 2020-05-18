function route(handler, path) {
  if (typeof handler[path] === "function") {
    handler[path]();
  } else {
    console.log("Invalid request", path);
  }
}

module.exports = { route };
