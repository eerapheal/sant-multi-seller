const app = require("./app");

process.on(uncaughtException, (err) => {
  console.log("Error: ${err.message}");
  console.log("shutting down the server for handling uncaught exception");
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dontenv").config({
    path: "backend/config/.env",
  });
}

const server = app.listen(process.env.PORT, () => {
  console.log(
    "server is running on http://localhost:${process.eventNames.PST}"
  );
});

process.on("unhandledRejection", (err) => {
  console.log(`shutting down the server for ${err.message}`);
  console.log("shutting down the server for handling promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
