var TopayMain = TopayMain || (function(topayId,domId,topayTitle,debtList){
	
	console.log('BOOOOOOOOM');
	
	// CREATE MAIN WRAPPER
	var topayElement = document.createElement('div');
	
	var controlsExpanded = false;
	
	// CHECK FOR MOBILE TOUCH DEVICE
	var touchEnabled = ('ontouchstart' in document.documentElement);
	console.log("touchEnabled = " + touchEnabled);
	
	// CHECK BROWSER SUPPORT FOR CSS3 TRANSITIONS
	function supportsTransitions(){
		var testDiv = document.createElement('div');
		if(testDiv.style.transition != undefined || testDiv.style['-webkit-transition'] != undefined){
			return true;
		}else{
			return false;			
		}
	}
	
	// CREATE APP FUNCTION
	function createApp(topayId,domId,topayTitle,debtList){
		console.log('function createApp called');
		console.log('topayId = ' + topayId + " domId = " + domId);
		console.log('debtList = ' + debtList);
		//callback("boom");
		
		// CREATE topay DOM ELEMENT
		var domElement = document.getElementById(domId);
		console.log('domElements = ' + domElement);
		domElement.setAttribute('class','col-md-12 topay_wrapper');
		
		domElement.onmouseover = onMouseOver;
		// CREATE topay ELEMENT
		// var topayElement = document.createElement('topay');
		topayElement.id = topayId + "_topay";
		topayElement.setAttribute('class','topay_wrapper_inner');
		//topayElement.attributeName = 'controls';
		//topayElement.createAttribute('controls');
		// var attControls=document.createAttribute("controls");
		// topayElement.setAttributeNode(attControls);
		
		
		//topayElement.style.height = "169px";
		topayElement.style.opacity = '1';
		
		topayElement.style.transition = 'left 2s';
		
		// ATTACH topay TO DOM ELEMENT
		domElement.appendChild(topayElement);
		
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
		createDebitList(topayElement,debtList);

	}// end function createPlayer
	
	
	// CREATE CREATE DEBIT LIST FUNCTION
	
	
	
	//// PRIVATE FUNCTIONS ///////////////
	function createDebitList(domElement,debtList){
		var topayDebt = [];
		var debitNameElement = [];
		var debitDateElement = [];
		var debitValueElement = [];
		var debitPayedElement = [];
		// CREATE CONTROLS
		for (var i in debtList) {
		  console.log(debtList[i]);
		  console.log(debtList[i].getDate());
		  
		  topayDebt[i] = document.createElement('div');
		  topayDebt[i].id = "debt_" + i + "wrap";
		  topayDebt[i].setAttribute('class','debt_wrap');
		  //console.log("topayDebt[i] = " + topayDebt[i])
		  
		  console.log("domElement = " + domElement.id);
		  
		  
		  domElement.appendChild(topayDebt[i]);
		  
		  // DEBIT NAME ELEMENT
		  debitNameElement[i] = document.createElement('span');
		  debitNameElement[i].setAttribute('class','span-name');
		  debitNameElement[i].innerHTML = debtList[i].name;
		  topayDebt[i].appendChild(debitNameElement[i]);
		  
		  // DATE
		  debitDateElement[i] = document.createElement('span');
		  debitDateElement[i].innerHTML = debtList[i].startDate;
		  topayDebt[i].appendChild(debitDateElement[i]);
		  
		  // VALUE
		  debitValueElement[i] = document.createElement('span');
		  debitValueElement[i].innerHTML = debtList[i].value;
		  topayDebt[i].appendChild(debitValueElement[i]);
		  
		  // PAYED
		  debitPayedElement[i] = document.createElement('span');
		  debitPayedElement[i].innerHTML = debtList[i].payed;
		  topayDebt[i].appendChild(debitPayedElement[i]);
		  
		}// end for
		
		
		
			
	}// END function createtopayControls(topayId,domElement){
	
	
	
	
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
       	console.log(topayElement);
          topayElement.play();
          //button.textContent = "||";
       // } else {
          // topay.pause();
          // button.textContent = ">";
       // }
    }

    function restart() {
        topayElement.currentTime = 0;
        console.log("restarted");
    }
    
    function pause() {
        topayElement.pause();
			isPlaying = false;
			console.log(isPlaying);
    }
    
    function animControls() {
    	
    	if(!controlsExpanded){
	    	console.log('controlsExpanded = true ' + this.parentNode.id);
	        this.parentNode.style.left = '0px';
			
			controlsExpanded = true;
		}else{
			console.log('controlsExpanded = false ' + this.parentNode.id);
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
		console.log('ontopayFadeIn = ' + this.id);
	}
	
	////////////// Public methods ///////////////////////////////////////////	
	return{
		
		createApp:function(topayId,domId,topayTitle,debtList){
			createApp(topayId,domId,topayTitle,debtList);
		}
		
	};
});