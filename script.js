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
}).start();*/ // servo control example


"use strict";

var Cylon = require("cylon");

Cylon.robot({
    connections: {
        leapmotion: { adaptor: "leapmotion" }
    },

    devices: {
        leapmotion: { driver: "leapmotion" }
    },

   //work: function(my) {
   //   my.leapmotion.on("hand", function(hand) {
     //     console.log(hand.fingers.toString());//prints finger id, width, and direction for each finger. print only when hand is detected
   // work: function(my) {
      //  my.leapmotion.on("frame", function(frame) {
         //   console.log(frame.hands.length.toString());//prints 1 when hand is detected, prints 0 when hand is not detected: continous feed
    work: function(my) {
       /// my.leapmotion.on("hand", function(hand) {
            //console.log(hand);// prints objects of bones in hands....look into this
        ///    console.log("\n");
        ///    console.log(hand.fingers);
        ///    console.log("\n");
        my.leapmotion.on("hand", function(hand) {
           // console.log(hand.fingers.join(","));//displays each finger with direction
          // console.log(hand.pointables);// prints finger information
          //  console.log(hand.type);//prints left or right hand
            //console.log(hand.fingers.length);//prints 5 when hand is placed over sensor(each finger)
            //console.log(hand.palmPosition);// palm position xyz cordinates
            console.log(hand.fingerPosition);//prints finger data
            console.log("\n");

       //var a = hand.fingerTipPositions;
          // console.log(a);

        });


    }
}).start();


/* var Cylon = require('cylon');

 Cylon.robot({
 connections: {
 leapmotion: { adaptor: 'leapmotion' }
 },

 devices: {
 leapmotion: { driver: 'leapmotion' }
 },

 work: function(my) {
 my.leapmotion.on('hand', function(hand) {
 var position = hand.palmPosition.join(',');
 console.log("Hand position: " + position);
 });
 }
 }).start();*/ // palm position tracking...xyz cordinates
