var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

drawObject(ctx, 300, 300);

function drawObject (ctx, x, y)
{
	ctx.translate(x,y);
	ctx.beginPath();
	ctx.fillStyle = "#802b00";
	ctx.arc(40, -40, 20, 0, 2 * Math.PI);
	ctx.arc(-40, -40, 20, 0, 2 * Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(0, 0, 50, 0, 2 * Math.PI);
	ctx.fill();
	ctx.fillStyle = "#ff7733";
	ctx.beginPath();
	ctx.arc(40, -40, 10, 0, 2 * Math.PI);
	ctx.arc(-40, -40, 10, 0, 2 * Math.PI);
	ctx.fill();
}
	
var moveLR = 0;//left and Right direction

function moveLeftRight(direction)
{
	//border: right: 240, left:-240
	if(moveLR > 230)
	{
		if(direction > 0)
		{
			direction = 0;
		}
	}
	else if (moveLR < -230)
	{
		if (direction < 0)
		{
			direction = 0;
		}
	}
		ctx.clearRect(-300, -300, 600, 600);
		ctx.fillStyle = "#802b00";
		ctx.beginPath();
		ctx.arc(40 + moveLR + direction, -40 + moveUD, 20, 0, 2 * Math.PI);
		ctx.arc(-40 + moveLR + direction, -40 + moveUD, 20, 0, 2 * Math.PI);
		ctx.fill();
		ctx.beginPath();
		ctx.arc(0 + moveLR + direction, 0 + moveUD, 50, 0, 2 * Math.PI);
		ctx.fill();
		ctx.fillStyle = "#ff7733";
		ctx.beginPath();
		ctx.arc(40 + moveLR + direction, -40 + moveUD, 10, 0, 2 * Math.PI);
		ctx.arc(-40 + moveLR+direction, -40 + moveUD, 10, 0, 2 * Math.PI);
		ctx.fill();
	
	
	moveLR += direction;
	
	if (moveLR > 230)
	{
		moveLR = 240;
	}
	else if (moveLR < -230)
	{
		moveLR = -240;
	}
	
}

var moveUD = 0; //up and down direction
function moveUpDown(direction)
{
	//border: up: -240, down:250
	if(moveUD > 240)
	{
		if(direction > 0)
		{
			direction = 0;
		}
	}
	else if (moveUD < -230)
	{
		if (direction < 0)
		{
			direction = 0;
		}
	}
		ctx.clearRect(-300, -300, 600, 600);
		ctx.fillStyle = "#802b00";
		ctx.beginPath();
		ctx.arc(40 + moveLR, -40 + moveUD + direction, 20, 0, 2 * Math.PI);
		ctx.arc(-40 + moveLR, -40 + moveUD + direction, 20, 0, 2 * Math.PI);
		ctx.fill();
		ctx.beginPath();
		ctx.arc(0 + moveLR, 0 + moveUD + direction, 50, 0, 2 * Math.PI);
		ctx.fill();
		ctx.fillStyle = "#ff7733";
		ctx.beginPath();
		ctx.arc(40 + moveLR, -40 + moveUD + direction, 10, 0, 2 * Math.PI);
		ctx.arc(-40 + moveLR, -40 + moveUD + direction, 10, 0, 2 * Math.PI);
		ctx.fill();
	
	
	moveUD += direction;
	
	if (moveUD > 240)
	{
		moveUD = 250;
	}
	else if (moveUD < -230)
	{
		moveUD = -240;
	}
	
}

function reset()
{
	ctx.clearRect(-300, -300, 600, 600);
	ctx.beginPath();
	ctx.fillStyle = "#802b00";
	ctx.arc(40, -40, 20, 0, 2 * Math.PI);
	ctx.arc(-40, -40, 20, 0, 2 * Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(0, 0, 50, 0, 2 * Math.PI);
	ctx.fill();
	ctx.fillStyle = "#ff7733";
	ctx.beginPath();
	ctx.arc(40, -40, 10, 0, 2 * Math.PI);
	ctx.arc(-40, -40, 10, 0, 2 * Math.PI);
	ctx.fill();
	
	moveLR = 0;
	moveUD = 0;
}
