/*var Cylon = require('cylon');

Cylon.robot({

    connections: {
        leap: { adaptor: 'leapmotion'},
        arduino: {adaptor: 'firmata', port: 'COM3'}
    },

    devices: {
        led: { driver: 'led' , pin: 13, connection: 'arduino'}
    },

    work: function(my) {
        my.leap.on('frame', function (frame){
            if (frame.hands.length > 0){
                my.led.turnOn();
            } else {
                my.led.turnOff();
            }
        });


    }
}).start();*/ // ARDUINO LED  example


"use strict";

 var Cylon = require("cylon");
function sleep(milliseconds) {
     var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){    // function to delay, problematic when implemented in the work function
            break;
        }
     }
}

Cylon.robot({
    connections: {
        leapmotion: { adaptor: "leapmotion" }
    },

    devices: {
        leapmotion: { driver: "leapmotion" }
    },

    work: function(my) {
        my.leapmotion.on("hand", function(hand) {
            // work: function(my) {
            //  my.leapmotion.on("frame", function(frame) {// fram is continous feed, may look into
            //   console.log(frame.hands.length.toString());//prints 1 when hand is detected, prints 0 when hand is not detected: continous feed

          //  console.log(hand.type);//prints left or right hand

            var thumbFinger = hand.fingers[0];
            var indexFinger = hand.fingers[1];
            var middleFinger = hand.fingers[2];
            var ringFinger = hand.fingers[3];
            var pinkyRing = hand.fingers[4];

           // console.log(indexFingers);
            var thumbPosition = thumbFinger.dipPosition;
            var indexPosition = indexFinger.dipPosition;
            var middlePosition = middleFinger.dipPosition;
            var ringPosition = ringFinger.dipPosition;
            var pinkyPosition = pinkyRing.dipPosition;

            var thumbVelocity = thumbFinger.tipVelocity;
            var indexVelocity = indexFinger.tipVelocity;
            var middleVelocity = middleFinger.tipVelocity;
            var ringVelocity = ringFinger.tipVelocity;
            var pinkyVelocity = pinkyRing.tipVelocity;

            // Position variables
            var thumbX = thumbPosition[0];
            var indexX = indexPosition[0];
            var middleX = middlePosition[0];
            var ringX = ringPosition[0];
            var pinkyX = pinkyPosition[0];
            var thumbY = thumbPosition[1];
            var indexY = indexPosition[1];
            var middleY = middlePosition[1];
            var ringY = ringPosition[1];
            var pinkyY = pinkyPosition[1];
          /*  var thumbZ = thumbPosition[2];
            var indexZ = indexPosition[2];
            var middleZ = middlePosition[2];  //shouldnt need z position but included it just incase
            var ringZ = ringPosition[2];
            var pinkyZ = pinkyPosition[2];*/



            //printing the finger positions
             console.log(// data is stored [x,y,z]
                 " Thumb X Position: " + thumbPosition[0],  // -62.4 position of thumb at aprox 6 inches from base of ruler to base of thumb---goes less negative  when moving right
                 "Index X Position: " + indexPosition[0],// -41.3 ''''
                 "middle X Position: " + middlePosition[0],//-21'''''
                 "ring X Position: " + ringPosition[0],//-2.1''''
                 "pinky X Position: " + pinkyPosition[0],//27.2 - 27.35(positive)''''
                    "\n",
                 "Thumb Y Position: " + thumbPosition[1],//140.9-141.5(positive)''''
                 "Index Y Position: " + indexPosition[1],//151-162(positive)''''
                 "middle Y Position: " + middlePosition[1],//160.3-160.45(positive)''''
                 "ring Y Position: " + ringPosition[1],//163.2-163.34(positive)''''
                 "pinky Y Position: " + pinkyPosition[1],//162.2-162.5(positive)''''
                     "\n");
            //     "Thumb Z Position: " + thumbPosition[2],
            //     "Index Z Position: " + indexPosition[2],
            //     "middle Z Position: " + middlePosition[2],
            //     "ring Z Position: " + ringPosition[2],
            //     "pinky Z Position: " + pinkyPosition[2]);
            // console.log("\n");
             /*console.log(
                 " thumb velocity" + thumbVelocity[0],
                 "index velocity" + indexVelocity[0],
                 "middle velocity" + middleVelocity[0], // when velocity is greater than 5 there is some actaul movement going on
                 "ring velocity" + ringVelocity[0],
                 "pinky velocity" + pinkyVelocity[0],
                 "\n");*/


             //thumb finger


          /* if(thumbVelocity[0] >= 20) {  //when green light on LEAP is facing the user, right is positive, up is negative, down and left is negative, down and right is postive, up and right is postive, up and left is negative
                console.log("thumb moving right");//green light facing user--x right is postive, y up is positve, z forward push is negative
                // " Thumb X Position: " + thumbPosition[0],
                // "Thumb Y Position: " + thumbPosition[1],
                // "Thumb Z Position: " + thumbPosition[2],
            }

            if(thumbVelocity[0] <= -20){
               console.log("thumb moving left");
            }

            if(thumbVelocity[1] >= 20){
                console.log("thumb moving up");
            }
            if(thumbVelocity[1] <= -20){
                console.log("thumb moving down");
            }
           if(thumbVelocity[2] >= 20){
                console.log("thumb moving backwards");
            }
            if(thumbVelocity[2] <= -20){
                console.log("thumb moving forwards");
            }


            //index finger


            if(indexVelocity[0] >= 20) {
                console.log("index moving right");
            }
            if(indexVelocity[0] <= -20){
                console.log("index moving left");
            }

            if(indexVelocity[1] >= 20){
                console.log("index moving up");
            }
            if(indexVelocity[1] <= -20){
                console.log("index moving down");
            }
            if(indexVelocity[2] >= 20){
                console.log("index moving backwards");
            }
            if(indexVelocity[2] <= -20) {
                console.log("index moving forwards");
            }

                //middle finger


                if(middleVelocity[0] >= 20) {
                    console.log("middle moving right");
                }
                if(middleVelocity[0] <= -20){
                    console.log("middle moving left");
                }

                if(middleVelocity[1] >= 20){
                    console.log("middle moving up");
                }
                if(middleVelocity[1] <= -20){
                    console.log("middle moving down");
                }
                if(middleVelocity[2] >= 20){
                    console.log("middle moving backwards");
                }
                if(middleVelocity[2] <= -20) {
                    console.log("middle moving forwards");
                }

                    //ring finger


                    if(ringVelocity[0] >= 20) {
                        console.log("ring moving right");
                    }
                    if(ringVelocity[0] <= -20){
                        console.log("ring moving left");
                    }

                    if(ringVelocity[1] >= 20){
                        console.log("ring moving up");
                    }
                    if(ringVelocity[1] <= -20){
                        console.log("ring moving down");
                    }
                    if(ringVelocity[2] >= 20){
                        console.log("ring moving backwards");
                    }
                    if(ringVelocity[2] <= -20) {
                        console.log("ring moving forwards");
                    }


                        //pinky finger


                        if(pinkyVelocity[0] >= 20) {
                            console.log("pinky moving right");
                        }
                        if(pinkyVelocity[0] <= -20){
                            console.log("pinky moving left");
                        }

                        if(pinkyVelocity[1] >= 20){
                            console.log("pinky moving up");
                        }
                        if(pinkyVelocity[1] <= -20){
                            console.log("pinky moving down");
                        }
                        if(pinkyVelocity[2] >= 20){
                            console.log("pinky moving backwards");
                        }
                        if(pinkyVelocity[2] <= -20) {
                            console.log("pinky moving forwards");
                        }


                        //multiple positions


            //thumb


            if(thumbVelocity[0] >= 20 && thumbVelocity[1] >= 20){
                            console.log("thumb moving up towards the right");
            }
            if(thumbVelocity[0] <= -20 && thumbVelocity[1] <= -20){
                console.log("thumb moving down towards the left");
            }
            if(thumbVelocity[0] >= 20 && thumbVelocity[1] <= -20){
                console.log("thumb moving down towards the right");
            }
            if(thumbVelocity[0] <= -20 && thumbVelocity[1] >= 20){
                console.log("thumb moving up towards the left");
            }


            //index


            if(indexVelocity[0] >= 20 && indexVelocity[1] >= 20){
                console.log("index moving up towards the right");
            }
            if(indexVelocity[0] <= -20 && indexVelocity[1] <= -20){
                console.log("index moving down towards the left");
            }
            if(indexVelocity[0] >= 20 && indexVelocity[1] <= -20){
                console.log("index moving down towards the right");
            }
            if(indexVelocity[0] <= -20 && indexVelocity[1] >= 20){
                console.log("index moving up towards the left");
            }


            //middle


            if(middleVelocity[0] >= 20 && middleVelocity[1] >= 20){
                console.log("middle moving up towards the right");
            }
            if(middleVelocity[0] <= -20 && middleVelocity[1] <= -20){
                console.log("middle moving down towards the left");
            }
            if(middleVelocity[0] >= 20 && middleVelocity[1] <= -20){
                console.log("middle moving down towards the right");
            }
            if(middleVelocity[0] <= -20 && middleVelocity[1] >= 20){
                console.log("middle moving up towards the left");
            }


            //ring


            if(ringVelocity[0] >= 20 && ringVelocity[1] >= 20){
                console.log("ring moving up towards the right");
            }
            if(ringVelocity[0] <= -20 && ringVelocity[1] <= -20){
                console.log("ring moving down towards the left");
            }
            if(ringVelocity[0] >= 20 && ringVelocity[1] <= -20){
                console.log("ring moving down towards the right");
            }
            if(ringVelocity[0] <= -20 && ringVelocity[1] >= 20){
                console.log("ring moving up towards the left");
            }


            //pinky


            if(pinkyVelocity[0] >= 20 && pinkyVelocity[1] >= 20){
                console.log("pinky moving up towards the right");
            }
            if(pinkyVelocity[0] <= -20 && pinkyVelocity[1] <= -20){
                console.log("pinky moving down towards the left");
            }
            if(pinkyVelocity[0] >= 20 && pinkyVelocity[1] <= -20){
                console.log("pinky moving down towards the right");
            }
            if(pinkyVelocity[0] <= -20 && pinkyVelocity[1] >= 20){
                console.log("pinky moving up towards the left");
            }*/




          //TODO
            //try this
            //create functions for the positive x and negative x axis for each finger
            //create functions for the positive and negative y axis for each finger
            //use the position to determine the average "origin" of each finger
            //when said finger moves either more negative or more positive send to appropriate function
            //come up with servo control from there


        });

    }

}).start();


