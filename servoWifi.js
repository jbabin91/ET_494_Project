'use strict';

var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var five = require("johnny-five");
var Leap = require("../node_modules/leapjs/lib/index"),
	board, palm, motor, leap_range = [50,-50], servo_range = [0,179];


 
//create the udp serialport and specify the host and port to connect to
var sp = new VirtualSerialPort({
  host: '192.168.1.2',
  type: 'udp4',//udp4
  port: 3030
});

console.log("step 2");
//use the serial port to send a command to a remote firmata(arduino) device

var io = new firmata.Board(sp);

console.log("step2.5");

io.once('ready', function() {
    console.log('IO Ready');
    io.isReady = true;

    var board = new five.Board({io: io, repl: true});
    var controller = new Leap.Controller();

    board.on('ready', function(){
        console.log('five ready');

        var pinkieServo = new five.Servo({
            pin: 12,
            range: [1, 179], 
	        fps: 200,//rate of movement between positions
	        startAt: 90 //start at 90 degrees
        });

        var thumbMotor = new five.Motor({
            pins: {
                pwm: 3,
                dir: 23
            },
            invertPWM: true
        });

        var indexMotor = new five.Motor({
            pins: {
                pwm: 2,
                dir: 22
            },
            invertPWM: true
        });

        var midMotor = new five.Motor({
            pins:{
                pwm:5,
                dir:25
            },
            invertPWM:true
        });

        var ringMotor = new five.Motor({
            pins:{
                pwm:4,
                dir:24
            },
            invertPWM: true
        });

        var pinkieMotor = new five.Motor({
            pins: {
                pwm: 6,
                dir: 26
            },
            invertPWM: true
        });

        board.repl.inject({
            motor: thumbMotor,
            motor: indexMotor,
            motor: midMotor,
            motor: ringMotor,
            motor: pinkieMotor
        });

        controller.on("frame", function(frame) {

            // NUMBER OF DETECTED HANDS BY LEAP MOTION 
            var nHands = frame.hands.length;

            // IF THERE IS JUST 1 HAND
            if(nHands == 1) { //if one hand is present
                // RETRIEVE THE HAND OBJECT
                var hand = frame.hands[0];

                // RETRIEVE FINGER OBJECT
                var thumbFinger = hand.fingers[0];
                var thumbPosition = thumbFinger.dipPosition;
                var thumbX = thumbPosition[0];
                var thumbZ = thumbPosition[2];

                var indexFinger = hand.fingers[1];
                var indexPosition = indexFinger.dipPosition;
                var indexX = indexPosition[0];
                var indexZ = indexPosition[2];

                var middleFinger = hand.fingers[2];
                var middlePosition = middleFinger.dipPosition;
                var middleX = middlePosition[0];
                var midZ = middlePosition[2];

                var ringFinger = hand.fingers[3];
                var ringPosition = ringFinger.dipPosition;
                var ringX = ringPosition[0];
                var ringZ = ringPosition[2];

                var pinkieFinger = hand.fingers[4];
                var pinkiePosition = pinkieFinger.dipPosition;
                var pinkieX = pinkiePosition[0];
                var pinkieZ = pinkiePosition[2];

                var palm = frame.hands[0].palmPosition;
                
                // console.log("output", thumbX.map())
                // thumbServo.to(thumbX.map());
                
                // console.log("output", thumbX.map())
                // indexServo.to(indexX.map());

                // console.log("output", thumbX.map())
                // middleServo.to(middleX.map());

                // console.log("output", thumbX.map())
                // ringServo.to(ringX.map());

                console.log("output", indexZ.map());
                // pinkieServo.to(pinkieX.map());
            }//end if for one hand detection
            else {
                console.log("Please, place one hand over the LEAP motion sensor.");
                // thumbMotor.stop();
                // indexMotor.stop();
                // midMotor.stop();
                // ringMotor.stop();
                // pinkieMotor.stop();
                // pinkieServo.center();
            }

           /* if(thumbZ > 41.5){
                thumbMotor.forward(225);
                console.log("Thumb open");

            }
            else if (thumbZ <83.5){
                thumbMotor.reverse(225);
                console.log("Thumb close");

            }*/
            if(indexZ > 30){
                indexMotor.reverse(200);
                console.log("Index open");
            }
            else if (indexZ <83.5) {
                indexMotor.forward(200);
                console.log("Index close");

            }
        });
    }); // BOARD READY CLOSE

    Number.prototype.map = function () {
        var output = Math.round((this - leap_range[0]) * (servo_range[1] - servo_range[0]) / (leap_range[1] - leap_range[0]) + servo_range[0]);

        // check output is within range, or cap
        output = (output > servo_range[1]) ? servo_range[1] : output;
        output = (output < servo_range[0]) ? servo_range[0] : output;
        // is the servo range reversed? uncomment below
        output = servo_range[1] - output;
        return output;
    }

    /*********************************************************************************************************/
    /******************************** LEAP MOTION STATUS AND INITIALIZATION **********************************/
    /*********************************************************************************************************/

    controller.on('ready', function() {
        console.log("Leap Motion is ready...");
    });

    controller.on('deviceConnected', function() {
        console.log("Leap Motion is connected...");
    });

    controller.on('deviceDisconnected', function() {
        console.log("Leap Motion is disconnected...");
    });

    // CONNECT TO THE LEAP MOTION
    controller.connect();
});