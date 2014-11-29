var QuizMain = QuizMain || (function(quizId,domId,quizTitle){
	
	console.log('BOOOOOOOOM');
	
	function supportsTransitions(){
		var testDiv = document.createElement('div');
		if(testDiv.style.transition != undefined || testDiv.style['-webkit-transition'] != undefined){
			return true;
		}else{
			return false;			
		}
	}
	
	var quizElement = document.createElement('div');
	var controlsExpanded = false;
	
	var touchEnabled = ('ontouchstart' in document.documentElement);
	
	console.log("touchEnabled = " + touchEnabled);
	
	function createQuiz(quizId,domId,quizTitle){
		console.log('function createQuiz called');
		console.log('quizId = ' + quizId + " domId = " + domId);
		
		
		//callback("boom");
		
		// CREATE QUIZ DOM ELEMENT
		var domElement = document.getElementById(domId);
		console.log('domElements = ' + domElement);
		domElement.setAttribute('class','quiz_wrapper');
		
		domElement.onmouseover = onMouseOver;
		// CREATE QUIZ ELEMENT
		// var quizElement = document.createElement('QUIZ');
		quizElement.id = quizId + "_quiz";
		//quizElement.attributeName = 'controls';
		//quizElement.createAttribute('controls');
		// var attControls=document.createAttribute("controls");
		// quizElement.setAttributeNode(attControls);
		
		quizElement.style.position = "relative";
		quizElement.style.display = "inline-block";
		quizElement.style.margin = "0px";
		quizElement.style.padding = "0px";
		quizElement.style.width = "300px";
		quizElement.style.height = "169px";
		quizElement.style.opacity = '1';
		
		quizElement.style.transition = 'left 2s';
		
		// ATTACH QUIZ TO DOM ELEMENT
		domElement.appendChild(quizElement);
		
		

		createQuizControls(quizId,domElement);

	}// end function createPlayer
	
	
	//// PRIVATE FUNCTIONS ///////////////
	function createQuizControls(quizId,domElement){
		// CREATE CONTROLS
		var QuizControls = document.createElement('div');
		QuizControls.id = quizId + "_controls";
		QuizControls.setAttribute('class','quizplayer_controls');
		
		
		QuizControls.style.left = "-176px";
		
		QuizControls.style.opacity = '1';
		QuizControls.style.transition = 'left 10s';
		QuizControls.style['-webkit-transition'] = 'left .6s';
		// QuizControls.style.transition = 'opacity 1s';
		// QuizControls.style['-webkit-transition'] = 'opacity 1s';
		if(supportsTransitions()){
			QuizControls.addEventListener("webkitTransitionEnd",onQuizFadeIn,false);			
			QuizControls.addEventListener("transitionend",onQuizFadeIn,false);			
		}else{
			alert('oooops');
		}
		
		// ATTACH CONTROLS TO DOM ELEMENT
		domElement.appendChild(QuizControls);
		
		// CREATE CONTROLS BUTTONS
		var btnRestart = document.createElement('button');
		btnRestart.id = quizId + "_btnRestart";
		btnRestart.innerHTML = "[RESTART]";
		
		if (btnRestart.addEventListener) {
            btnRestart.addEventListener("click", restart, false);
        } else {
            btnRestart.attachEvent('onclick', restart);
        }
		QuizControls.appendChild(btnRestart);
		
		var btnPause = document.createElement('button');
		btnPause.id = quizId + "_btnPause";
		btnPause.innerHTML = "[PAUSE]";
		
		if (btnPause.addEventListener) {
            btnPause.addEventListener("click", pause, false);
        } else {
            btnPause.attachEvent('onclick', pause);
        }
		QuizControls.appendChild(btnPause);
		
		
		var btnPlay = document.createElement('button');
		btnPlay.id = quizId + "_btnPlay";
		btnPlay.innerHTML = "[PLAY]";
		
		if (btnPlay.addEventListener) {
            btnPlay.addEventListener("click", quizplay, false);
        } else {
            btnPlay.attachEvent('onclick', quizplay);
        }
		QuizControls.appendChild(btnPlay);
		
		var btnToggle = document.createElement('button');
		btnToggle.id = quizId + "_btnToggle";
		btnToggle.innerHTML = "[+]";
		
		if (btnToggle.addEventListener) {
            btnToggle.addEventListener("click", animControls, false);
        } else {
            btnToggle.attachEvent('onclick', animControls);
        }
		QuizControls.appendChild(btnToggle);
			
	}// END function createQuizControls(quizId,domElement){
	
	function quizplay() {
       // var quiz = document.getElementById("quiz1");
       // var button = document.getElementById("play");
       //if (quiz.paused) {
       	console.log(quizElement);
          quizElement.play();
          //button.textContent = "||";
       // } else {
          // quiz.pause();
          // button.textContent = ">";
       // }
    }

    function restart() {
        quizElement.currentTime = 0;
        console.log("restarted");
    }
    
    function pause() {
        quizElement.pause();
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
		console.log('mouse over this = ' + this.style.opacity);
		console.log('mouse over this info = ' + this.childNodes[1]);
		this.childNodes[1].style.opacity = '1';
		
		mouseOver = true;
		var pointerX = getPointerX(event);
	}
	
	function onQuizFadeIn(event){
		// console.log('onMouseOver hit');
		console.log('onQuizFadeIn = ' + this.id);
	}
	
	////////////// Public methods ///////////////////////////////////////////	
	return{
		
		createQuiz:function(quizId,domId,quizTitle){
			createQuiz(quizId,domId,quizTitle);
		}
		
	};
});