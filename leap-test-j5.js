var webSocket = require('ws'),
    ws = new webSocket('ws://127.0.0.1:6437'),
    five = require('johnny-five'),
    Leap = require()
    board = new five.Board(),
    led, frame;

board.on('ready', function() {  
    ws.on('message', function(data, flags) {
        frame = JSON.parse(data);
        var thumb = frame.hands[0];
        var x = thumb.fingers[0];
      console.log( x + "frame hand" + frame.hands+"\n"+ " hand lenth" + frame.hands.length + "\n");
        
    });
});