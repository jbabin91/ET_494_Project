var webSocket = require('ws'),
    ws = new webSocket('ws://127.0.0.1:6437'),
    frame,
    palm = Array(),
    min = Array(Array(1e4,1e4,1e4), Array(1e4,1e4,1e4)),
    max = Array(Array(-1e4,-1e4,-1e4), Array(-1e4,-1e4,-1e4));

// process leap data
ws.on('message', function(data, flags) {
    frame = JSON.parse(data);
    // both hands at once
    if (frame.hands && frame.hands.length == 1) {
        // output x,y,z range in mm from controller
        // y is up down
        // x is left right
        // z is forward backward
        // left hand is 0, right hand is 1
        
        index = hand.fingers[1];
        indexPosition = index.dipPosition;
        // for both palms
       
        console.log(indexPosition);
    }
});
