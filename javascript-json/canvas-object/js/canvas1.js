


(function() {

	

			var myCanvas = document.createElement('canvas');
			myCanvas.id = 'canvas1';
			document.body.appendChild(myCanvas);

			//set up overlay styles
			myCanvas.style.position = 'absolute';
			myCanvas.style.top = 0;
			myCanvas.style.backgroundColor = 'rgba(0,0,0,0.7)';
			myCanvas.style.cursor = 'pointer';

			//resize and position overlay
			myCanvas.style.width = window.innerWidth/2 + 'px';
			myCanvas.style.height = window.innerHeight/2 + 'px';
			myCanvas.style.top = window.pageYOffset + 'px';
			myCanvas.style.left = window.pageXOffset + 'px';

			
			//var theCanvas = document.getElementById('canvas1');
				if (myCanvas && myCanvas.getContext) {
					var ctx = myCanvas.getContext("2d");
					if (ctx) {
						ctx.fillStyle = "lightGray";
						ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
						
						ctx.fillStyle = "green";
						ctx.fillRect(20,20,100,100);
						
						ctx.lineWidth = 5;
						ctx.strokeStyle="rgba(0,0,255,1)";
						ctx.strokeRect(20,20,100,100);
						
						
						
						for (var i = 0; i < 30; i++){
							ctx.beginPath();
							ctx.lineWidth = i+1;
							ctx.moveTo(25, 25+i*15);
							ctx.lineTo(475, 25+i*15);
							ctx.stroke();
						}
					}
				}
			


			window.addEventListener('scroll', function() {
				if (myCanvas) {
					
					myCanvas.style.width = window.innerWidth/3 + 'px';
					myCanvas.style.height = window.innerHeight/3 + 'px';
					myCanvas.style.top = window.pageYOffset + 'px';
					myCanvas.style.left = window.pageXOffset + 'px';
					
				}
			}, false);

			window.addEventListener('resize', function() {
				if (myCanvas) {
					
				}
			}, false)


	



	function centerImage(theImage) {
		// var myDifX = (window.innerWidth - theImage.width)/2;
		// var myDifY = (window.innerHeight - theImage.height)/2;
// 
		// theImage.style.top = myDifY + 'px';
		// theImage.style.left = myDifX + 'px';
// 
		// return theImage;
	}

})(); //self executing function