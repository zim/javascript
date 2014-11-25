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

var graph = function() {
	
	var barH1 = 0;
	
  var itemCount =  0;
  
 var myCanvas = document.createElement('canvas');
	myCanvas.id = arguments[0];
	myCanvas.width = 600;
	myCanvas.height = 300;
	document.body.appendChild(myCanvas); 
	
	//set up overlay styles
	myCanvas.style.position = 'relative';
	//myCanvas.style.top = 0;
	// myCanvas.style.backgroundColor = 'rgba(0,0,0,0.7)';
	// myCanvas.style.cursor = 'pointer';
	
	//var theCanvas = document.getElementById('canvas1');
	if (myCanvas && myCanvas.getContext) {
		var ctx = myCanvas.getContext("2d");
		if (ctx) {
			ctx.fillStyle = "lightGray";
			ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
			
			// ctx.fillStyle = "green";
			// ctx.fillRect(20,20,100,100);
			
			// ctx.lineWidth = 5;
			// ctx.strokeStyle="rgba(0,0,255,1)";
			// ctx.strokeRect(20,20,100,100);
			
			for (var key in arguments[1]) {
			  	console.log(arguments[1][key]);
			  	console.log(key);
			  	
			  	anim(arguments[1][key]);
			  	
			  	ctx.beginPath();
				ctx.lineWidth = 10;
				ctx.moveTo(25, 25+itemCount*25);
				ctx.lineTo(arguments[1][key], 25+itemCount*25);
				ctx.stroke();
			    
			    itemCount++;
			  }
			  
			  function anim(barHeight) {
			  	console.log('barHeight = ' + barHeight);
					if (barH1 < barHeight) {
						console.log('barH1 = ' + barH1);
						barH1++;
					}
				}// end anim
			
		}
	}
  
  for (var i = arguments.length - 1; i >= 0; i--) {
    console.log(arguments[i]);
  }
  
  
  
}

graph('graph1',data1);