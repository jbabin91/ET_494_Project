var five = require("johnny-five");
var boards = new five.Boards(["A", "B"]),
fsr,led ;

// Create 2 board instances with IDs "A" & "B"
boards.on("ready", function() {

  // Both "A" and "B" are initialized
  // (connected and available for communication)

  // Access them by their ID:
  var fsr = new five.Sensor({
    pin: "A0",
    board: this.byId("A"),
	freq: 25
  });//Thumb
  var fsr1 = new five.Sensor({
	 pin: "A1",
	 board: this.byId("A"),
	 freq: 25
  });//Index
  
  var fsr2 = new five.Sensor({
	 pin: "A2",
	 board: this.byId("A"),
	 freq: 25
  });//Middle
  
  var fsr3 = new five.Sensor({
	 pin: "A3",
	 board: this.byId("A"),
	 freq: 25
  });//Ring
  
  var fsr4 = new five.Sensor({
	 pin: "A4",
	 board: this.byId("A"),
	 freq: 25
  });//Pinky
  var led = new five.Led({
	 pin: 2,
	 board: this.byId("B")
  });
  var led1 = new five.Led({
	 pin: 3,
	 board: this.byId("B")
  });
  var led2 = new five.Led({
	 pin: 4,
	 board: this.byId("B")
  });
  var led3 = new five.Led({
	 pin: 5,
	 board: this.byId("B")
  });
  var led4 = new five.Led({
	 pin: 6,
	 board: this.byId("B")
  });
    fsr.scale([0,1023]).on("data",function(){
	  console.log(this.raw);
	  if(this.raw >= 400 ){
		  led3.on();
	  }
	  else {
		led3.off();
	  }
  });
    fsr1.scale([0,1023]).on("data",function(){
	  console.log(this.raw);
	  if(this.raw >= 495 ){
		  led1.on();
	  }
	  else {
		led1.off();
	  }
  });
    fsr2.scale([0,1023]).on("data",function(){
	  console.log(this.raw);
	  if(this.raw >= 530 ){
		  led2.on();
	  }
	  else {
		led2.off();
	  }
  });
    fsr3.scale([0,1023]).on("data",function(){
	  console.log(this.raw);
	  if(this.raw >= 630 ){
		  led3.on();
	  }
	  else {
		led3.off();
	  }
  });
  fsr4.scale([0,1023]).on("data",function(){
	  console.log(this.raw);
	  if(this.raw >= 540 ){
		  led4.on();
	  }
	  else {
		led4.off();
	  }
  });
});
