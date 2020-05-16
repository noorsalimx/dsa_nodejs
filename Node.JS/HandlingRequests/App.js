const server = require("./server");
const routers = require("./routers");

server.startServer(routers.route);
