var five = require("johnny-five"),
  board = new five.Board();

board.on("ready", function() {
  var motor;
  /*
      Motor A
        pwm: 3
        dir: 12
   */


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

  motor.on("start", function() {
    console.log("start", Date.now());
  });

  motor.on("stop", function() {
    console.log("automated stop on timer", Date.now());
  });

  motor.on("forward", function() {
    console.log("forward", Date.now());

    // demonstrate switching to reverse after 5 seconds
    board.wait(5000, function() {
      motor.reverse(255);
    });
  });

  motor.on("reverse", function() {
    console.log("reverse", Date.now());

    // demonstrate stopping after 5 seconds
    board.wait(5000, function() {
      motor.stop();
    });
  });

  // set the motor going forward full speed
  motor.forward(255);
});