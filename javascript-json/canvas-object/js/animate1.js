var data1 = {
  1: 200,
  2: 120,
  3: 240,
  4: 290,
  5: 300,
  6: 120,
  7: 240,
  8: 150,
  9: 340,
  10: 250
};

// function drawGraph(){
var drawGraph = function() {
	
	var myCanvas = document.createElement('canvas');
	myCanvas.id = arguments[0];
	myCanvas.width = 200;
	// myCanvas.height = 300;
	document.body.appendChild(myCanvas);
  
  	// for (var i = 0; i <= 100; i++) {
  		// console.log(i);
	    // draw(i);
	  // }
  
  	//setInterval(draw(400),100);
  	draw(0,0);
  	
  	
}

function draw(x,y){
	var myCanvas = document.getElementById('graph1');
	//myCanvas.id = arguments[0];
	var ctx = myCanvas.getContext('2d');
	// ctx.save();
	// ctx.clearRect(0,0,550,400);
	// ctx.fillStyle = "rgba(0,200,0,1)";
    // ctx.fillRect (x, y, 50, 50);
    
    ctx.beginPath();
	ctx.lineWidth = 10;
	ctx.moveTo(25, 100);
	ctx.lineTo(x, 100);
	ctx.stroke();
	
	// for (var key in arguments[1]) {
			  	// console.log(arguments[1][key]);
			  	// console.log(key);
// 			  	
			  	// anim(arguments[1][key]);
// 			  	
			  	// ctx.beginPath();
				// ctx.lineWidth = 10;
				// ctx.moveTo(25, 25+itemCount*25);
				// ctx.lineTo(arguments[1][key], 25+itemCount*25);
				// ctx.stroke();
// 			    
			    // itemCount++;
			  // }
    
	ctx.restore(); 
	x += 1;
	var loopTimer = setTimeout('draw('+x+','+y+')',30);
}

drawGraph('graph1',data1);
