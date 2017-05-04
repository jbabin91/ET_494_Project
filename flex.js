var five = require("johnny-five"),
  fsr,fsr1,fsr2,fsr3,fsr4,led;

(new five.Board()).on("ready", function() {

  // Create a new `fsr` hardware instance.
  fsr = new five.Sensor({
    pin: "A0",
    freq: 25
  });// Thumb
  fsr1 = new five.Sensor({
	 pin: "A1",
	freq: 25
  });//Index
  fsr2 = new five.Sensor({
	  pin: "A2",
	  freq: 25
  });//Middle
  fsr3 = new five.Sensor({
	  pin: "A3",
	  freq: 25
  });//Ring
  fsr4 = new five.Sensor({
	  pin: "A4",
	  freq: 25
  });//Pinky
 
    fsr4.scale([0, 1027]).on("data", function() {
	console.log(this.raw);
  });
  /*  fsr1.scale([0, 1027]).on("data", function() {
	console.log(this.raw);
  });
    fsr2.scale([0, 1027]).on("data", function() {
	console.log(this.raw);
  });
    fsr3.scale([0, 1027]).on("data", function() {
	console.log(this.raw);
  });
    fsr4.scale([0, 1027]).on("data", function() {
	console.log(this.raw);
  });*/
});
