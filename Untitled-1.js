

// var five = require('johnny-five'),
// Leap = require('leapjs'),
// board = new five.Board(),
// motor, frame, hand;

// board.on('ready', function() 
// {   
//     var controller = Leap.loop({enableGestures: true}, function(frame) 
//     {   
//         checkData(frame);
//     });
// });

// var webSocket = require('ws'),
//     ws = new webSocket('ws://127.0.0.1:6437');

// // We can parse this
// ws.on('message', function(hand) {
//     var thumb = hand.fingers;
//     console.log(thumb);
// });

// var webSocket = require('ws'),
//     ws = new webSocket('ws://127.0.0.1:6437');

// // We can parse this
// ws.on('message', function(frame) {
//     console.log(frame);
// });

// var webSocket = require('ws'),
//  ws = new webSocket('ws://127.0.0.1:6437'),
//  five = require('johnny-five');
//  var Leap = require('../ET_494_Project/node_modules/leapjs/lib/index');
//  var controller = new Leap.controller();
//  controller.on("frame", function(frame){
//      //console.log("frame " + frame.id + " @ " + frame.timestamp);
//  });
//  board = new five.Board(), frame;
// board.on('ready', function() {
//  //led = new five.Led(13); 
//  ws.on('message', function(data, flags) {
//  frame = JSON.parse(data); 
//  if (frame.hands && frame.hands.length == 1) {
//  console.log("it works");
//  }
//  else {
//  console.log("hi");
//  }
//  });
// });


// var five = require("johnny-five");
// 	var Leap = require('../ET_494_Project/node_modules/leapjs/lib/index');
// 	var board, servo;

// // ASSIGN ARDUINO BOARD
// board = new five.Board();


// // ASSIGN LEAP MOTION CONTROLLER
// var controller = new Leap.Controller()



// board.on("ready", function() {
// //code


	


// 	// RETRIEVE LEAP MOTION FRAMES
// 	controller.on("frame", function(frame) {

// 		 // NUMBER OF DETECTED HANDS BY LEAP MOTION 
// 	    var nHands = frame.hands.length;

// 	    // IF THERE IS JUST 1 HAND
// 	    if(nHands == 1){

// 	    	// RETRIEVE THE HAND OBJECT
//   			var hand = frame.hands[0];

//   			// RETRIEVE FINGER OBJECT
//   			var finger_obj = hand.fingers;

//   			// FIND THE NUMBER OF DETECTED FINGERS
//   			detectedFingers = finger_obj.length;
// 			  console.log(detectedFingers);


// } // BOARD READY CLOSE

// 	});

// 		});


var five = require("johnny-five"),
	//handToHand = require('../lib/handToHand'),
	Leap = require("../ET_494_Project/node_modules/leapjs/lib/index"),
	board, servo;

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
            console.log("output", palm[0].map())
            servo.to(palm[0].map());
			  console.log(thumbX + "\n");
			  servo.to(90);
			  if(thumbX > 10){
				  servo.to(20);//-95 max left, -32 max right
			  }

		}

  			

	});


}); // BOARD READY CLOSE



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



