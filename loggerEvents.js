const EventEmitter = require("events");
const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(msg) {
    console.log(msg);
    this.emit("messageLogged");
  }
}
module.exports = Logger;
