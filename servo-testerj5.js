var five = require("johnny-five"),
	//handToHand = require('../lib/handToHand'),
	Leap = require("../ET_494_Project/node_modules/leapjs/lib/index"),
	board, servo, palm, motor, leap_range = [100,-100];

// ASSIGN ARDUINO BOARD
board = new five.Board();




// ASSIGN LEAP MOTION CONTROLLER
var controller = new Leap.Controller()




/********************************************************************************************************/
/************************************* ARDUINO AND SERVOS RELATED PART **********************************/
/********************************************************************************************************/

board.on("ready", function() {
	
servo = new five.Servo({
      pin: 9,
      range: [1, 179], 
	  fps: 200,//rate of movement between positions
	  startAt: 90 //start at 90 degrees
});



	// RETRIEVE LEAP MOTION FRAMES
	controller.on("frame", function(frame) {

		 // NUMBER OF DETECTED HANDS BY LEAP MOTION 
	    var nHands = frame.hands.length;

	    // IF THERE IS JUST 1 HAND
	    if(nHands == 1){
				
	    	// RETRIEVE THE HAND OBJECT
  			var hand = frame.hands[0];

  			// RETRIEVE FINGER OBJECT
  			var finger_obj = hand.fingers[0];
			   var thumbPosition = finger_obj.dipPosition;
			   var thumbX = thumbPosition[0];
			   var palm = frame.hands[0].palmPosition;
            // map x position of leap to servo
            //console.log("input",palm[0]);
           // console.log("output", palm[0].map())
            //servo.to(palm[0].map());
			 // console.log(thumbX + "\n");
			  //servo.to(90);
			  if(thumbX > 10){
				  //servo.to(20);//-95 max left, -32 max right
                  
			  }
              palm = frame.hands[0].palmPosition;
            // map x position of leap to servo
            //console.log("input",palm[0]);
            console.log("output", thumbX.map())
            servo.to(thumbX.map());

		}

  			

	});


}); // BOARD READY CLOSE


Number.prototype.map = function () {
  var output = Math.round((this - leap_range[0]) * (servo.range[1] - servo.range[0]) / (leap_range[1] - leap_range[0]) + servo.range[0]);

  // check output is within range, or cap
  output = (output > servo.range[1]) ? servo.range[1] : output;
  output = (output < servo.range[0]) ? servo.range[0] : output;
  // is the servo range reversed? uncomment below
  output = servo.range[1] - output;
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



