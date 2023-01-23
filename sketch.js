function setup() {
	createCanvas(400, 400);
  }
  
  function draw() {
	if (hour() >= 12){
	  var hour_12 = hour()-12;
	}
	else{
	  var hour_12 = hour()-12;
	}
	background(225);
	noStroke();
	fill(255,0,0);
	arc(200, 200, 80, 80, PI*1.5, PI*1.5+PI*second()/30);
	fill(255);
	arc(200, 200, 65, 65, PI*1.5, PI*1.5+PI*second()/30);
	fill(0,255,0);
	arc(200, 200, 65, 65, PI*1.5, PI*1.5+PI*minute()/30);
	fill(255);
	arc(200, 200, 50, 50, PI*1.5, PI*1.5+PI*minute()/30);
	fill(0,0,125);
	arc(200, 200, 50, 50, PI*1.5, PI*1.5+PI*hour_12/6);
	fill(255);
	arc(200, 200, 35, 35, PI*1.5, PI*1.5+PI*hour_12/6);
  
  }