var TopayMain = TopayMain || (function(topayId,domId,topayTitle,debtList,show){
	
	// CREATE MAIN WRAPPER
	var topayElement = document.createElement('div');
	var viewTotal = 0;
	
	var viewTotalDiv = document.getElementById("total_div");
	
	// CREATE APP FUNCTION
	function createApp(topayId,domId,topayTitle,debtList,show){
		
		viewTotal = 0;
		
		// CREATE topay DOM ELEMENT
		var domElement = document.getElementById(domId);
		domElement.setAttribute('class','row topay_wrapper');
		
		domElement.onmouseover = onMouseOver;
		// CREATE topay ELEMENT
		// var topayElement = document.createElement('topay');
		topayElement.id = topayId + "_topay";
		topayElement.setAttribute('class','topay_wrapper_inner');

		
		// ATTACH topay TO DOM ELEMENT
		//console.log('topayElema' + topayElement);
		console.log('domElement.id createApp = ' + domElement.id);
		console.log('domElement.innerHTML createApp = ' + domElement.innerHTML);
		
		domElement.appendChild(topayElement);
		
		// document.getElementsByClassName("topay_wrapper_inner")[0].innerHTML;
		// console.log("('topay_wrapper_inner')[0].innerHTML = " + document.getElementsByClassName("topay_wrapper_inner")[1].innerHTML);
		
		// DEAL WITH DEBTLIST ARRAY
		var myJsonString = JSON.stringify(debtList);
		
		//console.log(myJsonString);
		
		// for (var i in debtList) {
		  // console.log(debtList[i]);
		  // debtList[i].displayDebit(domId);
		// }
		
		// for (var prop in debtList) {
		  // if( obj.hasOwnProperty( prop ) ) {
		    // console.log("o." + prop + " = " + obj[prop]);
		  // } 
		// }

		// createtopayControls(topayId,domElement);
		createDebitList(topayElement,debtList,show);

	}// end function createPlayer
	
	
	// CREATE CREATE DEBIT LIST FUNCTION
	
	
	
	//// PRIVATE FUNCTIONS ///////////////
	function createDebitList(domElement,debtList,show){
		var topayDebt = [];
		var debitNameElement = [];
		var debitDateElement = [];
		var debitValueElement = [];
		var debitPayedElement = [];
		var debitPayedCheckElement = [];
		var debitPayedCheckLabel = [];
		var btnEditValue = [];
		var greenTick = [];
		
		domElement.innerHTML = "";
		
		//console.log("domElement.innerHTML new = " + domElement.innerHTML);
		
		// CREATE CONTROLS
		for (var i in debtList) {
		  //console.log("debtList[i] = " + debtList[i]);
		  //console.log("debtList[i].getDate() = " + debtList[i].getDate());
		  
		  console.log("debtList[i].payed = " + debtList[i].payed);
		  
		  //console.log(show);
		  
		  switch (show) {
		    case "payed":
		        if(debtList[i].payed){
		        	
		        	viewTotal = viewTotal + debtList[i].value;
			  		console.log("viewTotal = " + viewTotal);
			  		viewTotalDiv.innerHTML = viewTotal;
		        	
				  	topayDebt[i] = document.createElement('div');
		  			topayDebt[i].id = "debt_" + i + "wrap";
		  			
		  			topayDebt[i].setAttribute('class','layout debt_wrap debt_green');
		  			
		  			domElement.appendChild(topayDebt[i]);
		  
					  // DEBIT NAME ELEMENT
					  debitNameElement[i] = document.createElement('div');
					  debitNameElement[i].setAttribute('class','col-md-4 span-name');
					  debitNameElement[i].innerHTML = debtList[i].name;
					  topayDebt[i].appendChild(debitNameElement[i]);
					  
					  // DATE
					  // debitDateElement[i] = document.createElement('span');
					  // debitDateElement[i].innerHTML = debtList[i].startDate;
					  // topayDebt[i].appendChild(debitDateElement[i]);
					  
					  // VALUE
					  debitValueElement[i] = document.createElement('div');
					  debitValueElement[i].setAttribute('class','col-md-4');
					  debitValueElement[i].innerHTML = debtList[i].value;
					  topayDebt[i].appendChild(debitValueElement[i]);
					  
					  // PAYED
					  debitPayedElement[i] = document.createElement('div');
					  debitPayedElement[i].setAttribute('class','col-md-4-end');
					  debitPayedElement[i].innerHTML = debtList[i].payed;
					  topayDebt[i].appendChild(debitPayedElement[i]);
					  
					 
					  
					greenTick[i] = document.createElement('div');
					greenTick[i].setAttribute('class','green_tick');
					
					debitPayedElement[i].appendChild(greenTick[i]);
				  }
		        break; 
		    case "unpayed":
		        if(debtList[i].payed==false){
		        	
		        	viewTotal = viewTotal + debtList[i].value;
			  		console.log("viewTotal = " + viewTotal);
			  		viewTotalDiv.innerHTML = viewTotal;
		        	
		        	topayDebt[i] = document.createElement('div');
				  	topayDebt[i].id = "debt_" + i + "wrap";
				  	
				  	topayDebt[i].setAttribute('class','layout debt_wrap debt_red');
				  	
				  	domElement.appendChild(topayDebt[i]);
		  
					  // DEBIT NAME ELEMENT
					  debitNameElement[i] = document.createElement('div');
					  debitNameElement[i].setAttribute('class','col-md-4 span-name');
					  debitNameElement[i].innerHTML = debtList[i].name;
					  topayDebt[i].appendChild(debitNameElement[i]);
					  
					  // DATE
					  // debitDateElement[i] = document.createElement('span');
					  // debitDateElement[i].innerHTML = debtList[i].startDate;
					  // topayDebt[i].appendChild(debitDateElement[i]);
					  
					  // VALUE
					  debitValueElement[i] = document.createElement('div');
					  debitValueElement[i].setAttribute('class','col-md-4');
					  debitValueElement[i].innerHTML = debtList[i].value;
					  topayDebt[i].appendChild(debitValueElement[i]);
					  
					  // PAYED
					  debitPayedElement[i] = document.createElement('div');
					  debitPayedElement[i].setAttribute('class','col-md-4-end');
					  debitPayedElement[i].innerHTML = debtList[i].payed;
					  topayDebt[i].appendChild(debitPayedElement[i]);
					  
					  // PAYED CHECKBOX ELLEMENT
					  // debitPayedCheckElement[i] = document.createElement('span');
					  // debitPayedCheckElement[i].innerHTML = debtList[i].payed;
					  // topayDebt[i].appendChild(debitPayedElement[i]);
					  
					  // debitPayedCheckElement[i] = document.createElement('input');
						// debitPayedCheckElement[i].type = "checkbox";
						// debitPayedCheckElement[i].name = "checkboxname";
						// debitPayedCheckElement[i].value = "checkboxvalue";
						// debitPayedCheckElement[i].id = "checkboxid";
						// topayDebt[i].appendChild(debitPayedCheckElement[i]);
			// 			
						// debitPayedCheckLabel[i] = document.createElement('label')
						// debitPayedCheckLabel[i].htmlFor = "id";
						// debitPayedCheckLabel[i].appendChild(document.createTextNode('text for label after checkbox'));
					  // topayDebt[i].appendChild(debitPayedCheckLabel[i]);
					  
					    btnEditValue[i] = document.createElement('button');
						btnEditValue[i].id = i + "_btnEditValue";
						btnEditValue[i].innerHTML = "[EDIT" + i + "]";
						
						if (btnEditValue[i].addEventListener) {
				            btnEditValue[i].addEventListener("click", editValue, false);
				        } else {
				            btnEditValue[i].attachEvent('onclick', editValue);
				        }
						debitPayedElement[i].appendChild(btnEditValue[i]);
				  }
		        break; 
		    case "all":
		        
	        	topayDebt[i] = document.createElement('div');
			  	topayDebt[i].id = "debt_" + i + "wrap";
			  	
			  	viewTotal = viewTotal + debtList[i].value;
			  	console.log("viewTotal = " + viewTotal);
			  	viewTotalDiv.innerHTML = viewTotal;
			  	
			  	if(debtList[i].payed){
				  	topayDebt[i].setAttribute('class','layout debt_wrap debt_green');
				  	
				  	
				  }else{
				  	topayDebt[i].setAttribute('class','layout debt_wrap debt_red');
				  }
				  
				  domElement.appendChild(topayDebt[i]);
		  
				  // DEBIT NAME ELEMENT
				  debitNameElement[i] = document.createElement('div');
				  debitNameElement[i].setAttribute('class','col-md-4 span-name');
				  debitNameElement[i].innerHTML = debtList[i].name;
				  topayDebt[i].appendChild(debitNameElement[i]);
				  
				  // DATE
				  // debitDateElement[i] = document.createElement('span');
				  // debitDateElement[i].innerHTML = debtList[i].startDate;
				  // topayDebt[i].appendChild(debitDateElement[i]);
				  
				  // VALUE
				  debitValueElement[i] = document.createElement('div');
				  debitValueElement[i].setAttribute('class','col-md-4');
				  debitValueElement[i].innerHTML = debtList[i].value;
				  topayDebt[i].appendChild(debitValueElement[i]);
				  
				  // PAYED
				  debitPayedElement[i] = document.createElement('div');
				  debitPayedElement[i].setAttribute('class','col-md-4-end');
				  debitPayedElement[i].innerHTML = debtList[i].payed;
				  topayDebt[i].appendChild(debitPayedElement[i]);
				  
				  // PAYED CHECKBOX ELLEMENT
				  // debitPayedCheckElement[i] = document.createElement('span');
				  // debitPayedCheckElement[i].innerHTML = debtList[i].payed;
				  // topayDebt[i].appendChild(debitPayedElement[i]);
				  
				  // debitPayedCheckElement[i] = document.createElement('input');
					// debitPayedCheckElement[i].type = "checkbox";
					// debitPayedCheckElement[i].name = "checkboxname";
					// debitPayedCheckElement[i].value = "checkboxvalue";
					// debitPayedCheckElement[i].id = "checkboxid";
					// topayDebt[i].appendChild(debitPayedCheckElement[i]);
		// 			
					// debitPayedCheckLabel[i] = document.createElement('label')
					// debitPayedCheckLabel[i].htmlFor = "id";
					// debitPayedCheckLabel[i].appendChild(document.createTextNode('text for label after checkbox'));
				  // topayDebt[i].appendChild(debitPayedCheckLabel[i]);
				  
				  if(debtList[i].payed){
				  	topayDebt[i].setAttribute('class','layout debt_wrap debt_green');
				  	
				  	greenTick[i] = document.createElement('div');
					greenTick[i].setAttribute('class','green_tick');
					
					debitPayedElement[i].appendChild(greenTick[i]);
				  	
				  }else{
				  	btnEditValue[i] = document.createElement('button');
					btnEditValue[i].id = i + "_btnEditValue";
					btnEditValue[i].innerHTML = "[EDIT" + i + "]";
					
					if (btnEditValue[i].addEventListener) {
			            btnEditValue[i].addEventListener("click", editValue, false);
			        } else {
			            btnEditValue[i].attachEvent('onclick', editValue);
			        }
					debitPayedElement[i].appendChild(btnEditValue[i]);
				  }
				  
				    
				  
		        break; 
		    default: 
		        text = "Looking forward to the Weekend";
		  }
		  
		}// end for
			
	}// END function createtopayControls(topayId,domElement){
	
	
	function editValue(id) {
        
			console.log("btn edit clicked" + this + " THIS");
			//console.log("btn edit clicked" + debtList[i].payed + " THIS");
			
    }
	
	function createtopayControls(topayId,domElement){
		// CREATE CONTROLS
		var topayControls = document.createElement('div');
		topayControls.id = topayId + "_controls";
		topayControls.setAttribute('class','topayplayer_controls');
		
		
		topayControls.style.left = "-176px";
		
		topayControls.style.opacity = '1';
		topayControls.style.transition = 'left 10s';
		topayControls.style['-webkit-transition'] = 'left .6s';
		// topayControls.style.transition = 'opacity 1s';
		// topayControls.style['-webkit-transition'] = 'opacity 1s';
		if(supportsTransitions()){
			topayControls.addEventListener("webkitTransitionEnd",ontopayFadeIn,false);			
			topayControls.addEventListener("transitionend",ontopayFadeIn,false);			
		}else{
			alert('oooops');
		}
		
		// ATTACH CONTROLS TO DOM ELEMENT
		domElement.appendChild(topayControls);
		
		// CREATE CONTROLS BUTTONS
		var btnRestart = document.createElement('button');
		btnRestart.id = topayId + "_btnRestart";
		btnRestart.innerHTML = "[RESTART]";
		
		if (btnRestart.addEventListener) {
            btnRestart.addEventListener("click", restart, false);
        } else {
            btnRestart.attachEvent('onclick', restart);
        }
		topayControls.appendChild(btnRestart);
		
		var btnPause = document.createElement('button');
		btnPause.id = topayId + "_btnPause";
		btnPause.innerHTML = "[PAUSE]";
		
		if (btnPause.addEventListener) {
            btnPause.addEventListener("click", pause, false);
        } else {
            btnPause.attachEvent('onclick', pause);
        }
		topayControls.appendChild(btnPause);
		
		
		var btnPlay = document.createElement('button');
		btnPlay.id = topayId + "_btnPlay";
		btnPlay.innerHTML = "[PLAY]";
		
		if (btnPlay.addEventListener) {
            btnPlay.addEventListener("click", topayplay, false);
        } else {
            btnPlay.attachEvent('onclick', topayplay);
        }
		topayControls.appendChild(btnPlay);
		
		var btnToggle = document.createElement('button');
		btnToggle.id = topayId + "_btnToggle";
		btnToggle.innerHTML = "[+]";
		
		if (btnToggle.addEventListener) {
            btnToggle.addEventListener("click", animControls, false);
        } else {
            btnToggle.attachEvent('onclick', animControls);
        }
		topayControls.appendChild(btnToggle);
			
	}// END function createtopayControls(topayId,domElement){
	
	function topayplay() {
       // var topay = document.getElementById("topay1");
       // var button = document.getElementById("play");
       //if (topay.paused) {
       	//console.log("topayElement = " + topayElement);
          topayElement.play();
          //button.textContent = "||";
       // } else {
          // topay.pause();
          // button.textContent = ">";
       // }
    }

    function restart() {
        topayElement.currentTime = 0;
        //console.log("restarted");
    }
    
    function pause() {
        topayElement.pause();
			isPlaying = false;
			//console.log(isPlaying);
    }
    
    function animControls() {
    	
    	if(!controlsExpanded){
	    	//console.log('controlsExpanded = true ' + this.parentNode.id);
	        this.parentNode.style.left = '0px';
			
			controlsExpanded = true;
		}else{
			//console.log('controlsExpanded = false ' + this.parentNode.id);
	        this.parentNode.style.left = '-176px';
			
			controlsExpanded = false;
		}
    }
    
    // get current pointer X position cross browser
	function getPointerX(event){
		var ev = event || window.event// need for < ie9;	
		if(ev.preventDefault) ev.preventDefault(); // prevent dragging bounce on mobile	
		var pointerX;
		if(ev.touches){
			pointerX = ev.touches[0].pageX;
		}
		else{
			pointerX = ev.x || ev.pageX;			
		}
		return pointerX;
	}
	
	function onMouseOver(event){
		// console.log('onMouseOver hit');
		// console.log('mouse over this = ' + this.style.opacity);
		// console.log('mouse over this info = ' + this.childNodes[1]);
		//this.childNodes[1].style.opacity = '1';
		
		mouseOver = true;
		var pointerX = getPointerX(event);
	}
	
	function ontopayFadeIn(event){
		// console.log('onMouseOver hit');
		//console.log('ontopayFadeIn = ' + this.id);
	}
	
	////////////// Public methods ///////////////////////////////////////////	
	return{
		
		createApp:function(topayId,domId,topayTitle,debtList,show){
			createApp(topayId,domId,topayTitle,debtList,show);
		}
		
	};
});