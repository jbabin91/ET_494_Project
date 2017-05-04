
"use strict";

 var Cylon = require("cylon");


Cylon.robot({
    connections: {
        leap: { adaptor: 'leapmotion' },
        arduino: {adaptor: 'firmata', port: 'COM3'} //com3 for uno, com7 for mega
    },



    devices: {
        leapmotion: { driver: "leapmotion", connection: "leap" }, //,
       servo: { driver: 'servo', pin: 3 , connection: 'arduino'}, //thumb servo//90 degrees is straight ahead(towards wires) 0 is to the right 90 degrees
        servo1:{driver: 'servo' , pin: 9 , connection: 'arduino'},//index servo
        servo2: {driver: 'servo', pin: 4, connection: 'arduino'},   //middle servo
        servo3: {driver: 'servo', pin: 5, connection: 'arduino'},   //ring servo
        servo4: {driver: 'servo', pin: 6, connection: 'arduino'},   //pinkie servo
        servo5: {driver: 'servo', pin: 7, connection: 'arduino'},  //open/close thumb servo
        servo6: {driver: 'servo', pin: 8, connection: 'arduino'},    //open/close thumb servo



    },

    work: function(my) {
        my.leapmotion.on("hand", function(hand) {

            //initialize all fingera

            var thumbFinger = hand.fingers[0];
            var indexFinger = hand.fingers[1];
            var middleFinger = hand.fingers[2];
            var ringFinger = hand.fingers[3];
            var pinkyRing = hand.fingers[4];

            //initalize the Distal Phalanx of each finger(finger tip bone)

            var thumbPosition = thumbFinger.dipPosition;
            var indexPosition = indexFinger.dipPosition;
            var middlePosition = middleFinger.dipPosition;
            var ringPosition = ringFinger.dipPosition;
            var pinkyPosition = pinkyRing.dipPosition;

            //initalize the velocity for each finger

            var thumbVelocity = thumbFinger.tipVelocity;
            var indexVelocity = indexFinger.tipVelocity;
            var middleVelocity = middleFinger.tipVelocity;
            var ringVelocity = ringFinger.tipVelocity;
            var pinkyVelocity = pinkyRing.tipVelocity;

            // Position variables for X and Y axis
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


            //  my.servo2.angle(90);//start servo at center position

            //printing the finger positions
            console.log(// data is stored [x,y,z]
                " Thumb X Position: " + thumbPosition[0],  // -62.4 position of thumb at aprox 6 inches from base of ruler to base of thumb---goes less negative  when moving right
                "Index X Position: " + indexPosition[0],// -41.3 ''''
                "middle X Position: " + middlePosition[0],//-21'''''
                "ring X Position: " + ringPosition[0],//-2.1''''
                "pinky X Position: " + pinkyPosition[0],//27.2 - 27.35(positive)''''
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
                "\n");


            //thumb finger servo control function

////////////////////////////////////////////////////////////////////////////////////////////////

            /////////////////////////////////////////////////////////////////
            //-48 is neutral, -7 is far right, -88 is far left
            if(thumbVelocity[0] >= 15 || thumbVelocity[0] <= -15){
                if(thumbPosition[0] >-90 && thumbPosition[0] < -7){
                    if(thumbPosition[0] > -48&& thumbPosition[0] < -47){
                        my.servo.angle(90);
                    }
                    if(thumbPosition[0] > -47&& thumbPosition[0] < -44){
                        my.servo.angle(83);
                    }
                    if(thumbPosition[0] > -44&& thumbPosition[0] < -41){
                        my.servo.angle(76);
                    }
                    if(thumbPosition[0] > -41&& thumbPosition[0] < -38){
                        my.servo.angle(69);
                    }
                    if(thumbPosition[0] > -38&& thumbPosition[0] < -35){
                        my.servo.angle(62);
                    }
                    if(thumbPosition[0] > -35&& thumbPosition[0] < -32){
                        my.servo.angle(55);
                    }
                    if(thumbPosition[0] > -32&& thumbPosition[0] < -29){
                        my.servo.angle(48);
                    }
                    if(thumbPosition[0] > -29&& thumbPosition[0] < -26){
                        my.servo.angle(41);
                    }
                    if(thumbPosition[0] > -26&& thumbPosition[0] < -23){
                        my.servo.angle(34);
                    }
                    if(thumbPosition[0] > -23&& thumbPosition[0] < -20){
                        my.servo.angle(27);
                    }
                    if(thumbPosition[0] > -20&& thumbPosition[0] < -17){
                        my.servo.angle(20);
                    }
                    if(thumbPosition[0] > -17&& thumbPosition[0] < -14){
                        my.servo.angle(13);
                    }
                    if(thumbPosition[0] > -14&& thumbPosition[0] < -11){
                        my.servo.angle(6);
                    }
                    if(thumbPosition[0] > -11)/*&& thumbPosition[0] < -6)*/{
                        my.servo.angle(0);
                    }
                    if (thumbPosition[0] < -48 && thumbPosition[0] > -51) {
                        my.servo.angle(90);
                    }
                    if (thumbPosition[0] < -51 && thumbPosition[0] > -54) {
                        my.servo.angle(97);
                    }
                    if (thumbPosition[0] < -54 && thumbPosition[0] > -57) {
                        my.servo.angle(104);
                    }
                    if (thumbPosition[0] < -57 && thumbPosition[0] > -60) {
                        my.servo.angle(111);
                    }
                    if (thumbPosition[0] < -60 && thumbPosition[0] > -63) {
                        my.servo.angle(118);
                    }
                    if (thumbPosition[0] < -63 && thumbPosition[0] > -66) {
                        my.servo.angle(125);
                    }
                    if (thumbPosition[0] < -66 && thumbPosition[0] > -69) {
                        my.servo.angle(132);
                    }
                    if (thumbPosition[0] < -69 && thumbPosition[0] > -72) {
                        my.servo.angle(139);
                    }
                    if (thumbPosition[0] < -72 && thumbPosition[0] > -75) {
                        my.servo.angle(146);
                    }
                    if (thumbPosition[0] < -75 && thumbPosition[0] > -78) {
                        my.servo.angle(153);
                    }
                    if (thumbPosition[0] < -78 && thumbPosition[0] > -81) {
                        my.servo.angle(160);
                    }
                    if (thumbPosition[0] < -81 && thumbPosition[0] > -84) {
                        my.servo.angle(167);
                    }
                    if (thumbPosition[0] < -84 && thumbPosition[0] > -87) {
                        my.servo.angle(174);
                    }
                    if (thumbPosition[0] < -88 && thumbPosition[0] > -90) {
                        my.servo.angle(180);
                    }

                }
            }

//         //index servo functionTODO fix program
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//         if(indexVelocity[0] >= 15 || indexVelocity[0] <= -10) {//right movemnt || left movement
//             if (indexPosition[0] > -61 && indexPosition[0] < 10) {
//                 if (indexPosition[0] > -33 && indexPosition[0] < -30) {//60 is max left -33 is neutral(middle//going by 4 degrees
//                     console.log(97);
//                     my.servo1.angle(90);
//
//                 }
//
//                 if (indexPosition[0] > -30 && indexPosition[0] < -27) {//60 is max left -33 is neutral(middle
//                     console.log(104);
//                     my.servo1.angle(83);
//                 }
//                 if (indexPosition[0] > -27 && indexPosition[0] < -24) {//60 is max left -33 is neutral(middle
//                     console.log(111);
//                     my.servo1.angle(76);
//                 }
//                 if (indexPosition[0] > -24 && indexPosition[0] < -21) {//60 is max left -33 is neutral(middle
//                     console.log(118);
//                     my.servo1.angle(69);
//                 }
//                 if (indexPosition[0] > -21 && indexPosition[0] < -18) {//60 is max left -33 is neutral(middle
//                     console.log(125);
//                     my.servo1.angle(62);
//                 }
//                 if (indexPosition[0] > -18 && indexPosition[0] < -15) {//60 is max left -33 is neutral(middle
//                     console.log(132);
//                     my.servo1.angle(55);
//                 }
//                 if (indexPosition[0] > -15 && indexPosition[0] < -12) {//60 is max left -33 is neutral(middle
//                     console.log(139);
//                     my.servo1.angle(48);
//                 }
//                 if (indexPosition[0] > -12 && indexPosition[0] < -9) {//60 is max left -33 is neutral(middle
//                     console.log(146);
//                     my.servo1.angle(41);
//                 }
//                 if (indexPosition[0] > -9 && indexPosition[0] < -6) {//60 is max left -33 is neutral(middle
//                     console.log(153);
//                     my.servo1.angle(34);
//                 }
//                 if (indexPosition[0] > -6 && indexPosition[0] < -3) {//60 is max left -33 is neutral(middle
//                     console.log(160);
//                     my.servo1.angle(27);
//                 }
//                 if (indexPosition[0] > -3 && indexPosition[0] < 0) {//60 is max left -33 is neutral(middle
//                     console.log(167);
//                     my.servo1.angle(20);
//                 }
//                 if (indexPosition[0] > 0 && indexPosition[0] < 3) {//60 is max left -33 is neutral(middle
//                     console.log(174);
//                     my.servo1.angle(13);
//                 }
//                 if (indexPosition[0] > 3 && indexPosition[0] < 6) {//60 is max left -33 is neutral(middle
//                     console.log(180);
//                     my.servo1.angle(6);
//                 }
//                 if (indexPosition[0] > 6 )/*&& indexPosition[0] < 9)*/ {//60 is max left -33 is neutral(middle
//                     console.log(0);
//                 }
//
//                 // if(indexVelocity[0] <= -10){//left movement
//                 if (indexPosition[0] < -33 && indexPosition[0] > -35) {//60 is max left -33 is neutral(middle
//                     console.log(0);
//                     my.servo1.angle(90);
//
//                 }
//                 if (indexPosition[0] < -35 && indexPosition[0] > -37) {//60 is max left -33 is neutral(middle
//                     console.log(7);
//                     my.servo1.angle(97);
//
//                 }
//                 if (indexPosition[0] < -37 && indexPosition[0] > -39) {//60 is max left -33 is neutral(middle
//                     console.log(14);
//                     my.servo1.angle(104);
//
//                 }
//                 if (indexPosition[0] < -39 && indexPosition[0] > -41) {//60 is max left -33 is neutral(middle
//                     console.log(21);
//                     my.servo1.angle(111);
//
//                 }
//                 if (indexPosition[0] < -41 && indexPosition[0] > -43) {//60 is max left -33 is neutral(middle
//                     console.log(28);
//                     my.servo1.angle(118);
//
//                 }
//                 if (indexPosition[0] < -43 && indexPosition[0] > -45) {//60 is max left -33 is neutral(middle
//                     console.log(35);
//                     my.servo1.angle(125);
//
//                 }
//                 if (indexPosition[0] < -45 && indexPosition[0] > -47) {//60 is max left -33 is neutral(middle
//                     console.log(42);
//                     my.servo1.angle(132);
//
//                 }
//                 if (indexPosition[0] < -47 && indexPosition[0] > -49) {//60 is max left -33 is neutral(middle
//                     console.log(49);
//                     my.servo1.angle(139);
//
//                 }
//                 if (indexPosition[0] < -49 && indexPosition[0] > -51) {//60 is max left -33 is neutral(middle
//                     console.log(56);
//                     my.servo1.angle(146);
//
//                 }
//                 if (indexPosition[0] < -51 && indexPosition[0] > -53) {//60 is max left -33 is neutral(middle
//                     console.log(63);
//                     my.servo1.angle(153);
//
//                 }
//                 if (indexPosition[0] < -51 && indexPosition[0] > -53) {//60 is max left -33 is neutral(middle
//                     console.log(70);
//                     my.servo1.angle(160);
//
//                 }
//                 if (indexPosition[0] < -53 && indexPosition[0] > -55) {//60 is max left -33 is neutral(middle
//                     console.log(77);
//                     my.servo1.angle(167);
//
//                 }
//                 if (indexPosition[0] < -55 && indexPosition[0] > -57) {//60 is max left -33 is neutral(middle
//                     console.log(84);
//                     my.servo1.angle(174);
//
//                 }
//                 if (indexPosition[0] > -57 )/*&& indexPosition[0] > -60) */{//60 is max left -33 is neutral(middle
//                     console.log(90);
//                     my.servo1.angle(180);
//                 }
//             }//end second if
//         }//end first if*/
//end index servo control--possibly go up less degrees?
////////////////////////////////////////////////////////////////////////////////////////////

            ///////////middle finger control//////////////////////////////////////////////////////

//             if(middleVelocity[0] >= 15 || middleVelocity[0] <= -15){
//                 if(middlePosition[0] >-88 && middlePosition[0] < -7){
//                     if(middlePosition[0] > -48&& middlePosition[0] < -47){
//                         my.servo2.angle(90);
//                     }
//                     if(middlePosition[0] > -47&& middlePosition[0] < -44){
//                         my.servo2.angle(83);
//                     }
//                     if(middlePosition[0] > -44&& middlePosition[0] < -41){
//                         my.servo2.angle(76);
//                     }
//                     if(middlePosition[0] > -41&& middlePosition[0] < -38){
//                         my.servo2.angle(69);
//                     }
//                     if(middlePosition[0] > -38&& middlePosition[0] < -35){
//                         my.servo2.angle(62);
//                     }
//                     if(middlePosition[0] > -35&& middlePosition[0] < -32){
//                         my.servo2.angle(55);
//                     }
//                     if(middlePosition[0] > -32&& middlePosition[0] < -29){
//                         my.servo2.angle(48);
//                     }
//                     if(middlePosition[0] > -29&& middlePosition[0] < -26){
//                         my.servo2.angle(41);
//                     }
//                     if(middlePosition[0] > -26&& middlePosition[0] < -23){
//                         my.servo2.angle(34);
//                     }
//                     if(middlePosition[0] > -23&& middlePosition[0] < -20){
//                         my.servo2.angle(27);
//                     }
//                     if(middlePosition[0] > -20&& middlePosition[0] < -17){
//                         my.servo2.angle(20);
//                     }
//                     if(middlePosition[0] > -17&& middlePosition[0] < -14){
//                         my.servo2.angle(13);
//                     }
//                     if(middlePosition[0] > -14&& middlePosition[0] < -11){
//                         my.servo2.angle(6);
//                     }
//                     if(middlePosition[0] > -11)/*&& middlePosition[0] < -6)*/{
//                         my.servo2.angle(0);
//                     }
//                     if (middlePosition[0] < -48 && middlePosition[0] > -51) {
//                         my.servo2.angle(90);
//                     }
//                     if (middlePosition[0] < -51 && middlePosition[0] > -54) {
//                         my.servo2.angle(97);
//                     }
//                     if (middlePosition[0] < -54 && middlePosition[0] > -57) {
//                         my.servo2.angle(104);
//                     }
//                     if (middlePosition[0] < -57 && middlePosition[0] > -60) {
//                         my.servo2.angle(111);
//                     }
//                     if (middlePosition[0] < -60 && middlePosition[0] > -63) {
//                         my.servo2.angle(118);
//                     }
//                     if (middlePosition[0] < -63 && middlePosition[0] > -66) {
//                         my.servo2.angle(125);
//                     }
//                     if (middlePosition[0] < -66 && middlePosition[0] > -69) {
//                         my.servo2.angle(132);
//                     }
//                     if (middlePosition[0] < -69 && middlePosition[0] > -72) {
//                         my.servo2.angle(139);
//                     }
//                     if (middlePosition[0] < -72 && middlePosition[0] > -75) {
//                         my.servo2.angle(146);
//                     }
//                     if (middlePosition[0] < -75 && middlePosition[0] > -78) {
//                         my.servo2.angle(153);
//                     }
//                     if (middlePosition[0] < -78 && middlePosition[0] > -81) {
//                         my.servo2.angle(160);
//                     }
//                     if (middlePosition[0] < -81 && middlePosition[0] > -84) {
//                         my.servo2.angle(167);
//                     }
//                     if (middlePosition[0] < -84 && middlePosition[0] > -88) {
//                         my.servo2.angle(174);
//                     }
//                     if (middlePosition[0] < -88 )/*&& middlePosition[0] > -90)*/ {
//                         my.servo2.angle(180);
//                     }
//
//                 }
//             }
//

 //end middle finger control/////////////////////////////////////////////////






            ///////////ring finger control////////////////////////////////


//             if(ringVelocity[0] >= 15 || ringVelocity[0] <= -15){
//                 if(ringPosition[0] >-88 && ringPosition[0] < -7){
//                     if(ringPosition[0] > -48&& ringPosition[0] < -47){
//                         my.servo3.angle(90);
//                     }
//                     if(ringPosition[0] > -47&& ringPosition[0] < -44){
//                         my.servo3.angle(83);
//                     }
//                     if(ringPosition[0] > -44&& ringPosition[0] < -41){
//                         my.servo3.angle(76);
//                     }
//                     if(ringPosition[0] > -41&& ringPosition[0] < -38){
//                         my.servo3.angle(69);
//                     }
//                     if(ringPosition[0] > -38&& ringPosition[0] < -35){
//                         my.servo3.angle(62);
//                     }
//                     if(ringPosition[0] > -35&& ringPosition[0] < -32){
//                         my.servo3.angle(55);
//                     }
//                     if(ringPosition[0] > -32&& ringPosition[0] < -29){
//                         my.servo3.angle(48);
//                     }
//                     if(ringPosition[0] > -29&& ringPosition[0] < -26){
//                         my.servo3.angle(41);
//                     }
//                     if(ringPosition[0] > -26&& ringPosition[0] < -23){
//                         my.servo3.angle(34);
//                     }
//                     if(ringPosition[0] > -23&& ringPosition[0] < -20){
//                         my.servo3.angle(27);
//                     }
//                     if(ringPosition[0] > -20&& ringPosition[0] < -17){
//                         my.servo3.angle(20);
//                     }
//                     if(ringPosition[0] > -17&& ringPosition[0] < -14){
//                         my.servo3.angle(13);
//                     }
//                     if(ringPosition[0] > -14&& ringPosition[0] < -11){
//                         my.servo3.angle(6);
//                     }
//                     if(ringPosition[0] > -11)/*&& ringPosition[0] < -6)*/{
//                         my.servo3.angle(0);
//                     }
//                     if (ringPosition[0] < -48 && ringPosition[0] > -51) {
//                         my.servo3.angle(90);
//                     }
//                     if (ringPosition[0] < -51 && ringPosition[0] > -54) {
//                         my.servo3.angle(97);
//                     }
//                     if (ringPosition[0] < -54 && ringPosition[0] > -57) {
//                         my.servo3.angle(104);
//                     }
//                     if (ringPosition[0] < -57 && ringPosition[0] > -60) {
//                         my.servo3.angle(111);
//                     }
//                     if (ringPosition[0] < -60 && ringPosition[0] > -63) {
//                         my.servo3.angle(118);
//                     }
//                     if (ringPosition[0] < -63 && ringPosition[0] > -66) {
//                         my.servo3.angle(125);
//                     }
//                     if (ringPosition[0] < -66 && ringPosition[0] > -69) {
//                         my.servo3.angle(132);
//                     }
//                     if (ringPosition[0] < -69 && ringPosition[0] > -72) {
//                         my.servo3.angle(139);
//                     }
//                     if (ringPosition[0] < -72 && ringPosition[0] > -75) {
//                         my.servo3.angle(146);
//                     }
//                     if (ringPosition[0] < -75 && ringPosition[0] > -78) {
//                         my.servo3.angle(153);
//                     }
//                     if (ringPosition[0] < -78 && ringPosition[0] > -81) {
//                         my.servo3.angle(160);
//                     }
//                     if (ringPosition[0] < -81 && ringPosition[0] > -84) {
//                         my.servo3.angle(167);
//                     }
//                     if (ringPosition[0] < -84 && ringPosition[0] > -88) {
//                         my.servo3.angle(174);
//                     }
//                     if (ringPosition[0] < -88 )/*&& ringPosition[0] > -90)*/ {
//                         my.servo3.angle(180);
//                     }
//
//                 }
//             }
//

            ///////////end ring finger control////////////////////////////////





            ///////////pinkey finger control//////////////////////////////////

            //-48 is neutral, -7 is far right, -88 is far left
//             if(pinkyVelocity[0] >= 15 || pinkyVelocity[0] <= -15){
//                 if(pinkyPosition[0] >-88 && pinkyPosition[0] < -7){
//                     if(pinkyPosition[0] > -48&& pinkyPosition[0] < -47){
//                         my.servo4.angle(90);
//                     }
//                     if(pinkyPosition[0] > -47&& pinkyPosition[0] < -44){
//                         my.servo4.angle(83);
//                     }
//                     if(pinkyPosition[0] > -44&& pinkyPosition[0] < -41){
//                         my.servo4.angle(76);
//                     }
//                     if(pinkyPosition[0] > -41&& pinkyPosition[0] < -38){
//                         my.servo4.angle(69);
//                     }
//                     if(pinkyPosition[0] > -38&& pinkyPosition[0] < -35){
//                         my.servo4.angle(62);
//                     }
//                     if(pinkyPosition[0] > -35&& pinkyPosition[0] < -32){
//                         my.servo4.angle(55);
//                     }
//                     if(pinkyPosition[0] > -32&& pinkyPosition[0] < -29){
//                         my.servo4.angle(48);
//                     }
//                     if(pinkyPosition[0] > -29&& pinkyPosition[0] < -26){
//                         my.servo4.angle(41);
//                     }
//                     if(pinkyPosition[0] > -26&& pinkyPosition[0] < -23){
//                         my.servo4.angle(34);
//                     }
//                     if(pinkyPosition[0] > -23&& pinkyPosition[0] < -20){
//                         my.servo4.angle(27);
//                     }
//                     if(pinkyPosition[0] > -20&& pinkyPosition[0] < -17){
//                         my.servo4.angle(20);
//                     }
//                     if(pinkyPosition[0] > -17&& pinkyPosition[0] < -14){
//                         my.servo4.angle(13);
//                     }
//                     if(pinkyPosition[0] > -14&& pinkyPosition[0] < -11){
//                         my.servo4.angle(6);
//                     }
//                     if(pinkyPosition[0] > -11)/*&& pinkyPosition[0] < -6)*/{
//                         my.servo4.angle(0);
//                     }
//                     if (pinkyPosition[0] < -48 && pinkyPosition[0] > -51) {
//                         my.servo4.angle(90);
//                     }
//                     if (pinkyPosition[0] < -51 && pinkyPosition[0] > -54) {
//                         my.servo4.angle(97);
//                     }
//                     if (pinkyPosition[0] < -54 && pinkyPosition[0] > -57) {
//                         my.servo4.angle(104);
//                     }
//                     if (pinkyPosition[0] < -57 && pinkyPosition[0] > -60) {
//                         my.servo4.angle(111);
//                     }
//                     if (pinkyPosition[0] < -60 && pinkyPosition[0] > -63) {
//                         my.servo4.angle(118);
//                     }
//                     if (pinkyPosition[0] < -63 && pinkyPosition[0] > -66) {
//                         my.servo4.angle(125);
//                     }
//                     if (pinkyPosition[0] < -66 && pinkyPosition[0] > -69) {
//                         my.servo4.angle(132);
//                     }
//                     if (pinkyPosition[0] < -69 && pinkyPosition[0] > -72) {
//                         my.servo4.angle(139);
//                     }
//                     if (pinkyPosition[0] < -72 && pinkyPosition[0] > -75) {
//                         my.servo4.angle(146);
//                     }
//                     if (pinkyPosition[0] < -75 && pinkyPosition[0] > -78) {
//                         my.servo4.angle(153);
//                     }
//                     if (pinkyPosition[0] < -78 && pinkyPosition[0] > -81) {
//                         my.servo4.angle(160);
//                     }
//                     if (pinkyPosition[0] < -81 && pinkyPosition[0] > -84) {
//                         my.servo4.angle(167);
//                     }
//                     if (pinkyPosition[0] < -84 && pinkyPosition[0] > -88) {
//                         my.servo4.angle(174);
//                     }
//                     if (pinkyPosition[0] < -88 )/*&& pinkyPosition[0] > -90)*/ {
//                         my.servo4.angle(180);
//                     }
//
//                 }
//             }
//

            ///////////end pinkey finger control/////////////////////////////////



















































































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
