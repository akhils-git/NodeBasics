const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("sayHai", function (arg) {
  //Normal
  console.log("Hai", arg);
});

emitter.on("sayGoodBye", (arg) => {
  //Arrow
  console.log("Hai", arg);
});

emitter.emit("sayHai", { type: "Humen", name: "Akhil" });

emitter.emit("sayGoodBye", { type: "Humen", name: "King" });
