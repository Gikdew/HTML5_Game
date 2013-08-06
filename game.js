var canvas = document.getElementById("main");
var ctx = canvas.getContext("2d");
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var fps = 60;
var counter = 0;
var arriba = true;
var cursorX;
var cursorY;
var frameCir;
var velocity = 1;

//Init some variables
var circles = [];
for(var i = 50; i<=190; i+=velocity){
	circles.push({
		x: centerX,
		y: centerY,
		rad: i,
	});
}

//REMOVE
for(var i in circles){
	var circle = circles[i];
	console.log(circle.rad);
}

function updateCircle(){
	if(arriba){
		counter++;	
		//console.log(counter);
		var circle = circles[counter - 1];
		drawOneCircle(circle.x, circle.y, circle.rad, 'white');	
		frameCir = circle.rad;
		//console.log(frameCir);	
		if(counter == circles.length - 1) {
			arriba = false;
			return;

		}				
	}

	if(arriba == false){
		var circle = circles[counter];
		drawOneCircle(circle.x, circle.y, circle.rad, 'white');
		frameCir = circle.rad;
		//console.log(frameCir);
		counter--;
		if(counter == 0) arriba = true;
		//console.log(counter);
	}
}

function drawBackground(){
	ctx.save();
	ctx.fillStyle= 'black';
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.restore();
}
	
function drawOneCircle(x,y,r,color){
	ctx.save();
	ctx.beginPath();
	ctx.arc(x, y, r, 0,2*Math.PI);
	ctx.lineWidth = 1;
	ctx.strokeStyle = color;
	ctx.stroke();	
	ctx.restore();
}

function drawOneLine(fX,fY){
	ctx.save();
	ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(fX, fY);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.restore();
}


//MouseMove
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
    //console.log(cursorX + ',' + cursorY);
}

function distance2Points(ax,ay,bx,by){
	var numb = Math.pow((bx-ax),2)+Math.pow((by-ay), 2);
	var distance = Math.sqrt(numb)
	return Math.floor(distance);
}

function collision(ax,ay,bx,by,rad){
	var dis = distance2Points(ax, ay, bx, by);
	//console.log(dis);
	if(rad <= dis){ //I can change that to == if I want to now the exact Point of Collision
		console.log('collision');
	}else{
		console.log('No collision');

	}
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
	drawOneLine(cursorX, cursorY);
	collision(centerX, centerY, cursorX, cursorY, frameCir); //With the distance and the rad
	updateCircle();
}

var interval = setInterval(gameTick, 1000/fps);