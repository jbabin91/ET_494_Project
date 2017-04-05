var five = require("johnny-five");
var ports = [
  { id: "A", port: "COM17" },
  { id: "B", port: "COM3" }
];

new five.Boards(ports);