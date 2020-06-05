const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("messageLogged", function () {
  console.log("Message Lisner called");
});

emitter.on("CallLogged", function () {
  console.log("Call Lisner called");
});

emitter.emit("CallLogged");
emitter.emit("messageLogged");
emitter.emit("CallLogged");
