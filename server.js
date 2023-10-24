// JSON Server module
const jsonServer = require("json-server");
const { json } = require("react-router-dom");
const server = jsonServer.create();
const router = jsonServer.router();

// Make sure to use the default middleware
const middleware = jsonServer.defaults();

server.use(middleware);
// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/*": "/$1",
  })
);
server.use(router);
//Listen to port
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
