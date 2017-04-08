'use strict';

var webSocket = require('ws'),
    ws = new webSocket('ws://127.0.0.1:6437'),
    // mm range of leap motion to use, see leap-range.js to find
    leap_range = [-100,100], // x of right hand
    frame, palm;


var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var five = require("johnny-five");
 
//create the udp serialport and specify the host and port to connect to
var sp = new VirtualSerialPort({
  host: '192.168.1.56', //Change this to whatever ip address is assigned to the esp8266.
  type: 'udp4',         // Configure shield to work with udp
  port: 3030            // Change to the port the esp8266 is configured to. 
});

//use the serial port to send a command to a remote firmata(arduino) device
var io = new firmata.Board(sp);
io.once('ready', function(){
    console.log('IO Ready');
    io.isReady = true;

    var board = new five.Board({io: io, repl: true});
    // parse the data and respond
    board.on('ready', function() {
        // setup a servo on pin 9
        servo = new five.Servo({
        pin: 9,
        range: [0, 179] // dependent on servo
        });

        // set to midpoint
        servo.to(90);

        ws.on('message', function(data, flags) {
            frame = JSON.parse(data);
            // if only one hand is present
            if (frame.hands && frame.hands.length == 1) {
                // extract centre palm position in mm [x,y,z]
                palm = frame.hands[0].palmPosition;
                // map x position of leap to servo
                //console.log("input",palm[0]);
                console.log("output", palm[0].map())
                servo.to(palm[0].map());
            }
        });
    });
)};

// map two number ranges, adapted from SO: 10756313
Number.prototype.map = function () {
  var output = Math.round((this - leap_range[0]) * (servo.range[1] - servo.range[0]) / (leap_range[1] - leap_range[0]) + servo.range[0]);

  // check output is within range, or cap
  output = (output > servo.range[1]) ? servo.range[1] : output;
  output = (output < servo.range[0]) ? servo.range[0] : output;
  // is the servo range reversed? uncomment below
  output = servo.range[1] - output;
  return output;
}