 function init(){
	   var ctx = document.getElementById("canvas").getContext('2d');
	   ctx.beginPath();
	   ctx.strokeStyle = "rgb(255,255,255)";
	   ctx.arc(200,200,50,0,2*Math.PI, false);
	   ctx.fillStyle = "rgb(0,200,200)";
	   ctx.closePath();
	   ctx.fill();
	   ctx.strokeStyle = "rgb(255,0,0)";
	   ctx.lineWidth = 5;
	   ctx.stroke();
	   ctx.clearRect(200,200,10,10);	 
	 }