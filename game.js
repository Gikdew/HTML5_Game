var canvas = document.getElementById("main");
var ctx = canvas.getContext("2d");
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var fps = 1;

//Init some variables
var circles = [];
for(var i = 1; i<=10; i++){
	circles.push({
		x: centerX,
		y: centerY,
		rad: i*10,
	});
}

for(var i in circles){
	var circle = circles[i];
	console.log(circle);
}

function updateCircle(){

}

function drawBackground(){
	ctx.save();
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.restore();
}
	
function drawOneCircle(x,y,r,color){
	ctx.beginPath();
	ctx.arc(x, y, r, 0,2*Math.PI);
	ctx.lineWidth = Math.random();
	ctx.strokeStyle = color;
	ctx.stroke();	
}

function gameTick(){
	drawBackground();
	for(var j in circles){
		var circle = circles[j];
		drawOneCircle(circle.x, circle.y, circle.rad, 'white')
	}
}

setInterval(gameTick, 1000/fps);