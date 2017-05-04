'use strict';

var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var five = require("johnny-five");
var Leap = require("../node_modules/leapjs/lib/index"),
	board, palm, motor, leap_range = [100,-100], servo_range = [20,160];


 
//create the udp serialport and specify the host and port to connect to
var sp = new VirtualSerialPort({
  host: '192.168.1.3',
  type: 'udp4',//udp4
  port: 3030
});

console.log("Arduino Connected");
//use the serial port to send a command to a remote firmata(arduino) device

var io = new firmata.Board(sp);

console.log("Connection Verified");

io.once('ready', function() {
    console.log('IO Ready');
    io.isReady = true;

    var board = new five.Board({io: io, repl: true});
    var controller = new Leap.Controller();

    board.on('ready', function(){
        console.log('five ready');
        var thumbServo = new five.Servo({
            pin: 8,
            range: [20, 160],
            fps: 200,//rate of movement between positions
            center: true //start at 90 degreess
        });

     var indexServo = new five.Servo({
      pin: 10,
      range: [20, 160],
	  fps: 200,//rate of movement between positions
	  center: true //start at 90 degrees
});

     var middleServo = new five.Servo({
      pin: 11,
      range: [20, 160],
	  fps: 200,//rate of movement between positions
	  center: true //start at 90 degrees
});

     var ringServo = new five.Servo({
      pin: 12,
      range: [20, 160],
	  fps: 200,//rate of movement between positions
	  center: true //start at 90 degrees
});


        var pinkieServo = new five.Servo({
            pin: 13,
            range: [20, 160],
	        fps: 200,//rate of movement between positions
	        startAt: 90 //start at 90 degrees
        });


        var itmotors = new five.Motors([
            {pins: {pwm: 3, dir: 23}, invertPWM: true},
            {pins: {pwm: 2, dir: 22}, invertPWM: true}
            ]);

        var midMotor = new five.Motor({
            pins:{
                pwm:4,
                dir:24
            },
            invertPWM:true
        });

        var ringMotor = new five.Motor({
            pins:{
                pwm:5,
                dir:25
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
            motors:itmotors,
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
                var thumbY = thumbPosition[1];
                var thumbZ = thumbPosition[2];
                var thumbVelocity = thumbFinger.tipVelocity[2];


                var indexFinger = hand.fingers[1];
                var indexPosition = indexFinger.dipPosition;
                var indexX = indexPosition[0];
                var indexZ = indexPosition[2];
                var indexVelocity = indexFinger.tipVelocity[2];

                var middleFinger = hand.fingers[2];
                var middlePosition = middleFinger.dipPosition;
                var middleX = middlePosition[0];
                var midZ = middlePosition[2];
                var middleVelocity = middleFinger.tipVelocity[2];


                var ringFinger = hand.fingers[3];
                var ringPosition = ringFinger.dipPosition;
                var ringX = ringPosition[0];
                var ringZ = ringPosition[2];
                var ringVelocity = ringFinger.tipVelocity[2];

                var pinkieFinger = hand.fingers[4];
                var pinkiePosition = pinkieFinger.dipPosition;
                var pinkieX = pinkiePosition[0];
                var pinkieZ = pinkiePosition[2];
                var pinkieVelocity = pinkieFinger.tipVelocity[2];

                var palmX = frame.hands[0].palmPosition[0];
                var palm = frame.hands[0].palmPosition[1];
                var palmZ = frame.hands[0].palmPosition[2];

                var totalFingerValue = thumbX; //add other fingers later~~~~~~
                var Tmax = 0;
                var Tmin = 0;
                // console.log("output", thumbX.map())
                // thumbServo.to(thumbX.map());
                
                // console.log("output", thumbX.map())
                // indexServo.to(indexX.map());

                // console.log("output", thumbX.map())
                // middleServo.to(middleX.map());

                // console.log("output", thumbX.map())
                // ringServo.to(ringX.map());

                //console.log("output", thumbZ, thumbY);
                // pinkieServo.to(pinkieX.map());
            }//end if for one hand detection
            else {
                console.log("Please, place one hand over the LEAP motion sensor.");
                itmotors.stop();
                midMotor.stop();
                ringMotor.stop();
                pinkieMotor.stop();
                // pinkieServo.center();
            }



            if(palm > 180 && palm < 220 && palmZ > -40 && palmZ < 40 && palmX > -70 && palmX < 70) {//Good posistion~~~~~~

                //console.log("thumb p: " + palm);//1 thru -1 is  not moving
                console.log("thumb position: " + thumbZ);//1 thru -1 is  not moving
                // console.log("\nindex speed: " + indexZ);
               // console.log("\nmiddle spped: " + midZ);
               // console.log("\nring speed: " + ringZ);
               //  console.log("\npinkie speed: " +pinkieZ + "\n");




                // if(Tmax < thumbX){ //Cannot get if statement to work for obtaining Tmax
                //     Tmax = thumbX;
                //     console.log("thumbMax = " + Tmax);
                // }
                // else{ //Cannot get if statement to work for obtaining Tmin
                //     Tmin = thumbX;
                //     console.log("thumbMin = " + Tmin);
                // }
                // console.log("GOOD");

                //console.log(palmZ)



                    if (thumbZ > 10.5) {
                        itmotors[0].forward(255);
                        console.log("Thumb open");
                        // if(thumbVelocity > -15 && thumbVelocity < 15 ) {
                        //     itmotors[0].stop();
                        // }
                        // //if(thumbVelocity < 16 || thumbVelocity > -16 ) {
                            //itmotors[0].stop();
                        //}

                    }
                    else if (thumbZ < 55.5) {
                        itmotors[0].reverse(255);
                        console.log("Thumb close");
                        // if(thumbVelocity > -15 && thumbVelocity < 15 ) {
                        //     itmotors[0].stop();
                        // }

                    }

                    if(indexZ > -50.5){//-4 is fully curled. -57 is extended
                        itmotors[1].forward(200);
                        console.log("Index open");
                        // if(indexVelocity < -15 || indexVelocity < 15 ) {
                        //     itmotors[1].stop();
                        // }
                    }
                    else if (indexZ <-10.5) {
                        itmotors[1].reverse(200);
                        console.log("Index close");
                        // if(indexVelocity < -15 || indexVelocity < 15 ) {
                        //     itmotors[1].stop();
                        // }

                    }
                    // if(midZ > 25){//-14 is curled, 58 extended
                    //     midMotor.forward(225);
                    //     console.log("Middle open");
                    //
                    // }
                    // else if (midZ <0){
                    //     midMotor.reverse(225);
                    //     console.log("Middle close");

                   // }
                // if(ringZ > -80){//-80 extedned, -15 curled
                //     ringMotor.forward(225);
                //     console.log("Ring open");
                //
                // }
                // else if (ringZ < -15){
                //     ringMotor.reverse(225);
                //     console.log("Ring close");
                //
                // }
                // if(pinkieZ > -70.5){//-30 extededn, 10 curled
                //     pinkieMotor.forward(225);
                //     console.log("Pinkie open");
                //
                // }
                // else if (pinkieZ <-20.5){
                //     pinkieMotor.reverse(225);
                //     console.log("Pinkie close");
                //
                // }
            }
            else if(palmX < -50) {
                console.log("Move hand: Right\t\t\t" + palmX );
            }//should go benath all code for motor controol
            else if(palmX > 50){
                console.log("Move hand: Left\t\t\t" + palmX );
            }
            else if (palm < 180) {
                console.log("Move hand: Higher\t\t\t" + palm );
            }
            else if(palm > 220) {
                console.log("Move hand: Lower\t\t\t" + palm );
            }//should go benath all code for motor controol
            else if(palmZ > 50){
                console.log("Move hand: Forward\t\t\t" + palmZ );
            }
            else if (palmZ < -50){
                console.log("Move hand: Back\t\t\t" + palmZ);
            }//should go benath all code for motor controol

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