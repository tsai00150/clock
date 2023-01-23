var startMin = -1
function setup() {
	createCanvas(800,600);

  }
  
function draw() {

	if (hour() >= 12){
	  var hour_12 = hour()-12;
	}
	else{
	  var hour_12 = hour();
	}
	d = (mouseX-400)*(mouseX-400)+(mouseY-300)*(mouseY-300)
	background(225);
	strokeWeight(0);
	fill(0);
	textSize(32);
	text('Try to hover the cursor over the clock', 100, 30);
	strokeWeight(15);
	noFill();
	stroke('red');
	arc(400, 300, 300, 300, PI*1.5, PI*1.5+PI*second()/30);
	stroke('orange');
	arc(400, 300, 260, 260, PI*1.5, PI*1.5+PI*minute()/30);
	stroke('green');
	arc(400, 300, 220, 220, PI*1.5, PI*1.5+PI*hour_12/6);
	if (d <= 80*80){

	}
	else if (d <= 110*110){
		strokeWeight(25);
		stroke('green');
		arc(400, 300, 220, 220, PI*1.5, PI*1.5+PI*hour_12/6);
	}
	else if (d <= 140*140){
		strokeWeight(25);
		stroke('orange');
		arc(400, 300, 260, 260, PI*1.5, PI*1.5+PI*minute()/30);
	}
	else if (d <= 170*170){
		strokeWeight(25);
		stroke('red');
		arc(400, 300, 300, 300, PI*1.5, PI*1.5+PI*second()/30);
	}
	if (startMin != minute()){
		startMin = minute()
		console.log("Minute value:" + minute());
	}
}