const EventEmitter = require("events");

const Logger = require("./loggerEvents");
const logger = new Logger();

logger.on("messageLogged", function () {
  console.log("Message logged");
});

logger.log("Akhil");
