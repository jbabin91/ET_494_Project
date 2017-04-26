var five = require("johnny-five"),
	//handToHand = require('../lib/handToHand'),
	Leap = require("../ET_494_Project/node_modules/leapjs/lib/index"),
	board, palm, motor, leap_range = [50,-50], servo_range = [0,179];

// ASSIGN ARDUINO BOARD
board = new five.Board();




// ASSIGN LEAP MOTION CONTROLLER
var controller = new Leap.Controller()




/********************************************************************************************************/
/************************************* ARDUINO AND SERVOS RELATED PART **********************************/
/********************************************************************************************************/

board.on("ready", function() {
	
// thumbServo = new five.Servo({
//       pin: 9,
//       range: [1, 179], 
// 	  fps: 200,//rate of movement between positions
// 	  startAt: 90 //start at 90 degrees
// });

// indexServo = new five.Servo({
//       pin: 10,
//       range: [1, 179], 
// 	  fps: 200,//rate of movement between positions
// 	  startAt: 90 //start at 90 degrees
// });

// middleServo = new five.Servo({
//       pin: 11,
//       range: [1, 179], 
// 	  fps: 200,//rate of movement between positions
// 	  startAt: 90 //start at 90 degrees
// });

// ringServo = new five.Servo({
//       pin: 12,
//       range: [1, 179], 
// 	  fps: 200,//rate of movement between positions
// 	  startAt: 90 //start at 90 degrees
// });

var pinkieServo = new five.Servo({
      pin: 13,
      range: [1, 179], 
	  fps: 200,//rate of movement between positions
	  startAt: 90 //start at 90 degrees
});

motor = new five.Motor({
    pins: {
      pwm: 2,
      dir: 22
    },
    invertPWM: true
  });

   board.repl.inject({
    motor: motor
  });



	// RETRIEVE LEAP MOTION FRAMES
	controller.on("frame", function(frame) {

		 // NUMBER OF DETECTED HANDS BY LEAP MOTION 
	    var nHands = frame.hands.length;

	    // IF THERE IS JUST 1 HAND
	    if(nHands == 1)//if one hand is present 
        {//begin if 
				
	    	// RETRIEVE THE HAND OBJECT
  			var hand = frame.hands[0];

  			// RETRIEVE FINGER OBJECT
  			var thumbFinger = hand.fingers[0];
			var thumbPosition = thumbFinger.dipPosition;
			var thumbX = thumbPosition[0];

            var indexFinger = hand.fingers[1];
            var indexPosition = indexFinger.dipPosition;
            var indexX = indexPosition[0];

             var middleFinger = hand.fingers[2];
            var middlePosition = middleFinger.dipPosition;
            var middleX = middlePosition[0];

             var ringFinger = hand.fingers[3];
            var ringPosition = ringFinger.dipPosition;
            var ringX = ringPosition[0];

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

            console.log("output", thumbX.map())
            pinkieServo.to(pinkieX.map());
		}//end if for one hand detection

        else{
            console.log("Please, place one hand over the LEAP motion sensor.");
        }

        if(pinkieZ > 10){
             motor.on("forward", function() {
    console.log("forward", Date.now());

    // demonstrate switching to reverse after 5 seconds
    board.wait(5000, function() {
      motor.reverse(255);
    });
  });
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



