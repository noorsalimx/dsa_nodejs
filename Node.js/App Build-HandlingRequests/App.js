const server = require("./server");
const routers = require("./routers");
const handlers = require("./handlers");

let handler = {};
handler["/"] = handlers.home;
handler["/home"] = handlers.home;
handler["/newpage"] = handlers.review;

server.startServer(handler, routers.route);
