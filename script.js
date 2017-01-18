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


Cylon.robot({
    connections: {
        leap: { adaptor: 'leapmotion' },
        arduino: {adaptor: 'firmata', port: 'COM3'}
    },


    devices: {
        leapmotion: { driver: "leapmotion", connection: "leap" } ,
       servo: { driver: 'servo', pin: 3 , connection: 'arduino'}


    },

    work: function(my) {
        my.leapmotion.on("hand", function(hand) { // hand, hand



           /* if(frame.hands.length > 0) {

                    var thumbFinger = frame.fingers[0];
                    var thumbPosition = thumbFinger.dipPosition;
                    var thumbVelocity = thumbFinger.tipVelocity;
                    var thumbX = thumbPosition[0];
                   // console.log(thumbX);
                    if ( thumbX < -60 && thumbX > -80) {
                        console.log(90);
                      //  my.servo.angle(90);
                    }
                if(thumbX > -200 && thumbX < -100){
                   // my.servo.angle(0);
                    console.log(0);
                }


           }*/




















            var thumbFinger = hand.fingers[0];
           // var thumbFinger = frame.hands();
            var indexFinger = hand.fingers[1];
            var middleFinger = hand.fingers[2];
            var ringFinger = hand.fingers[3];
            var pinkyRing = hand.fingers[4];


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
           // console.log(// data is stored [x,y,z]
           //       " Thumb X Position: " + thumbPosition[0]);  // -62.4 position of thumb at aprox 6 inches from base of ruler to base of thumb---goes less negative  when moving right
           //       "Index X Position: " + indexPosition[0],// -41.3 ''''
           //       "middle X Position: " + middlePosition[0],//-21'''''
           //       "ring X Position: " + ringPosition[0],//-2.1''''
           //       "pinky X Position: " + pinkyPosition[0],//27.2 - 27.35(positive)''''
           //          "\n",
           //       "Thumb Y Position: " + thumbPosition[1],//140.9-141.5(positive)''''
           //       "Index Y Position: " + indexPosition[1],//151-162(positive)''''
           //       "middle Y Position: " + middlePosition[1],//160.3-160.45(positive)''''
           //       "ring Y Position: " + ringPosition[1],//163.2-163.34(positive)''''
           //       "pinky Y Position: " + pinkyPosition[1],//162.2-162.5(positive)''''
           //           "\n");
            //     "Thumb Z Position: " + thumbPosition[2],
            //     "Index Z Position: " + indexPosition[2],
            //     "middle Z Position: " + middlePosition[2],
            //     "ring Z Position: " + ringPosition[2],
            //     "pinky Z Position: " + pinkyPosition[2]);
            // console.log("\n");
            //  console.log(
            //      " thumb velocity" + thumbVelocity[0],
            //      "index velocity" + indexVelocity[0],
            //      "middle velocity" + middleVelocity[0], // when velocity is greater than 5 there is some actaul movement going on
            //      "ring velocity" + ringVelocity[0],
            //      "pinky velocity" + pinkyVelocity[0],
            //      "\n");



             //thumb finger


        if(thumbVelocity[0] >= 15) {  //when green light on LEAP is facing the user, right is positive, up is negative, down and left is negative, down and right is postive, up and right is postive, up and left is negative
               // console.log("thumb moving right");//green light facing user--x right is postive, y up is positve, z forward push is negative
              if(thumbPosition[0] > -47) {
                  //console.log("thumb coordinates moving right"); //-25 is the most right, -47 is middle, -82 is most left(used thumb resting on edge of pixel pushed againg the usb port on leap
                 // console.log(thumbX);
                  var thumbAngle1 = 90;
                //  console.log(thumbAngle1);

                  my.servo.angle(thumbAngle1);
              }
                if(thumbPosition[0] >-200 && thumbPosition[0] < -100){
                      console.log(0);
                      my.servo.angle(0);

                                    }





              }




          /*  if(thumbVelocity[1] >= 15) {
                console.log("thumb moving up");
                if (thumbPosition[1] > -100.4) {//chnage position need to measure
                    console.log("thumb coordinates moving up");
                    console.log(thumbY);
                }
            }
            if(thumbVelocity[1] <= -15) {
                console.log("thumb moving down");
                if (thumbPosition[1] > -100.4) {//change position
                    console.log("thumb coordinates moving down");
                    console.log(thumbY);
                }
            }
          // if(thumbVelocity[2] >= 20){
          //      console.log("thumb moving backwards");
          //  }
          //  if(thumbVelocity[2] <= -20){
          //      console.log("thumb moving forwards");
          //  }*/


            //index finger


           /* if(indexVelocity[0] >= 20) {
                console.log("index moving right");
                if (indexPosition[0] > -100.4) {//chnage value
                    console.log("index coordinates moving right");
                    console.log(indexX);
                }
            }
            if(indexVelocity[0] <= -20) {
                console.log("index moving left");
                if (indexPosition[0] > -100.4) {//chnage value
                    console.log("index coordinates moving left");
                    console.log(indexX);
                }
            }

            if(indexVelocity[1] >= 20) {
                console.log("index moving up");
                if (indexPosition[1] > -100.4) {//chnage value
                    console.log("index coordinates moving up");
                    console.log(indexY);
                }
            }
            if(indexVelocity[1] <= -20){
                console.log("index moving down");
                if(indexPosition[1] > -100.4) {//chnage value
                    console.log("index coordinates moving down");
                    console.log(indexY);
                }
            }
            // if(indexVelocity[2] >= 20){
            //     console.log("index moving backwards");
            // }
            // if(indexVelocity[2] <= -20) {
            //     console.log("index moving forwards");
            // }

                //middle finger


                if(middleVelocity[0] >= 20) {
                    console.log("middle moving right");
                    if(middlePosition[0] > -100.4) {//chnage value
                        console.log("middle coordinates moving right");
                        console.log(middleX);
                    }
                }
                if(middleVelocity[0] <= -20){
                    console.log("middle moving left");
                    if(middlePosition[0] > -100.4) {//chnage value
                        console.log("middle coordinates moving left");
                        console.log(middleX);
                    }
                }

                if(middleVelocity[1] >= 20){
                    console.log("middle moving up");
                    if(middlePosition[1] > -100.4) {//chnage value
                        console.log("middle coordinates moving up");
                        console.log(middleY);
                    }
                }
                if(middleVelocity[1] <= -20){
                    console.log("middle moving down");
                    if(middlePosition[1] > -100.4) {//chnage value
                        console.log("middle coordinates moving down");
                        console.log(middleY);
                    }
                }
                // if(middleVelocity[2] >= 20){
                //     console.log("middle moving backwards");
                // }
                // if(middleVelocity[2] <= -20) {
                //     console.log("middle moving forwards");
                // }

                    //ring finger


                    if(ringVelocity[0] >= 20) {
                        console.log("ring moving right");
                        if(ringPosition[0] > -100.4) {//chnage value
                            console.log("ring coordinates moving right");
                            console.log(ringX);
                        }
                    }
                    if(ringVelocity[0] <= -20){
                        console.log("ring moving left");
                        if(ringPosition[0] > -100.4) {//chnage value
                            console.log("ring coordinates moving left");
                            console.log(ringX);
                        }
                    }

                    if(ringVelocity[1] >= 20){
                        console.log("ring moving up");
                        if(ringPosition[1] > -100.4) {//chnage value
                            console.log("ring coordinates moving up");
                            console.log(ringY);
                        }
                    }
                    if(ringVelocity[1] <= -20){
                        console.log("ring moving down");
                        if(ringPosition[1] > -100.4) {//chnage value
                            console.log("ring coordinates moving down");
                            console.log(ringY);
                        }
                    }
                    // if(ringVelocity[2] >= 20){
                    //     console.log("ring moving backwards");
                    // }
                    // if(ringVelocity[2] <= -20) {
                    //     console.log("ring moving forwards");
                    // }


                        //pinky finger


                        if(pinkyVelocity[0] >= 20) {
                            console.log("pinky moving right");
                            if(pinkyPosition[0] > -100.4) {//chnage value
                                console.log("pinky coordinates moving right");
                                console.log(pinkyX);
                            }
                        }
                        if(pinkyVelocity[0] <= -20){
                            console.log("pinky moving left");
                            if(pinkyPosition[0] > -100.4) {//chnage value
                                console.log("pinky coordinates moving left");
                                console.log(pinkyX);
                            }
                        }

                        if(pinkyVelocity[1] >= 20){
                            console.log("pinky moving up");
                            if(pinkyPosition[1] > -100.4) {//chnage value
                                console.log("pinky coordinates moving up");
                                console.log(pinkyY);
                            }
                        }
                        if(pinkyVelocity[1] <= -20){
                            console.log("pinky moving down");
                            if(pinkyPosition[1] > -100.4) {//chnage value
                                console.log("pinky coordinates moving down");
                                console.log(pinkyY);
                            }
                        }
                        // if(pinkyVelocity[2] >= 20){
                        //     console.log("pinky moving backwards");
                        // }
                        // if(pinkyVelocity[2] <= -20) {
                        //     console.log("pinky moving forwards");
                        // }*/


                        //multiple positions


            //thumb


           /* if(thumbVelocity[0] >= 20 && thumbVelocity[1] >= 20){
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
            //find the orgin of each finger and then find the max distance (negative and positive) reading when fully moved laterally
            //condense points and create a servo movement
            //possible spring mechnaism to assist the fingers to open
            //hallowed finger to store a spring with a wire running through the spring and attaches to an attachment point
            //springs in palm with wire anchored to the spring and finger
            //possibly use a 360 servo


        });

    }

}).start();
