var canvas = document.getElementById("main");
var ctx = canvas.getContext("2d");
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var fps = 60;
var counter = 0;
var arriba = true;

//Init some variables
var circles = [];
for(var i = 1; i<=190; i++){
	circles.push({
		x: centerX,
		y: centerY,
		rad: i,
	});
}

//REMOVE
for(var i in circles){
	var circle = circles[i];
	console.log(circle);
}

function updateCircle(){
	if(arriba){
		counter++;	
		console.log(counter);
		var circle = circles[counter - 1];
		drawOneCircle(circle.x, circle.y, circle.rad, 'white');		
		if(counter == circles.length - 1) {
			arriba = false;
			return;
		}				
	}

	if(arriba == false){
		var circle = circles[counter];
		drawOneCircle(circle.x, circle.y, circle.rad, 'white');
		counter--;
		if(counter == 0) arriba = true;
		console.log(counter);
	}
}

function drawBackground(){
	ctx.save();
	ctx.fillStyle= 'black';
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.restore();
}
	
function drawOneCircle(x,y,r,color){
	ctx.beginPath();
	ctx.arc(x, y, r, 0,2*Math.PI);
	ctx.lineWidth = 1;
	ctx.strokeStyle = color;
	ctx.stroke();	
}

//REMOVE
function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function gameTick(){
	drawBackground();
	updateCircle();
}

setInterval(gameTick, 1000/fps);