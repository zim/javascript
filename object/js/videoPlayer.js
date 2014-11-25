var videoPlayer = videoPlayer || (function(videoId,domId,vidTitle){
	
	console.log('BOOOOOOOOM');
	
	function supportsTransitions(){
		var testDiv = document.createElement('div');
		if(testDiv.style.transition != undefined || testDiv.style['-webkit-transition'] != undefined){
			return true;
		}else{
			return false;			
		}
	}
	
	var videoElement = document.createElement('video');
	
	var defaultVidSrc = 'default_vid_path';
	var isPlaying = true;
	
	var controlsExpanded = false;
	
	var touchEnabled = ('ontouchstart' in document.documentElement);
	
	console.log("touchEnabled = " + touchEnabled);
	
	function createPlayer(videoId,domId,vidTitle){
		console.log('function createPlayer called');
		console.log('videoId = ' + videoId + " domId = " + domId);
		
		
		//callback("boom");
		
		// CREATE VIDEO DOM ELEMENT
		var domElement = document.getElementById(domId);
		console.log('domElements = ' + domElement);
		domElement.setAttribute('class','vidplayer_wrapper');
		
		domElement.onmouseover = onMouseOver;
		// CREATE VIDEO ELEMENT
		// var videoElement = document.createElement('video');
		videoElement.id = videoId + "_vid";
		//videoElement.attributeName = 'controls';
		//videoElement.createAttribute('controls');
		// var attControls=document.createAttribute("controls");
		// videoElement.setAttributeNode(attControls);
		
		videoElement.style.position = "relative";
		videoElement.style.display = "inline-block";
		videoElement.style.margin = "0px";
		videoElement.style.padding = "0px";
		videoElement.style.width = "300px";
		videoElement.style.height = "169px";
		videoElement.style.opacity = '1';
		
		videoElement.style.transition = 'left 2s';
		
		// ATTACH VIDEO TO DOM ELEMENT
		domElement.appendChild(videoElement);
		
		// CREATE VIDEO SOURCE ELEMENTS THEN ADD TO VIDEO ELEMENT
		var videoSrcMp4 = document.createElement('source');
		var videoSrcOgg = document.createElement('source');

		videoElement.appendChild(videoSrcMp4);
		videoElement.appendChild(videoSrcOgg);
		
		// ADD SRC ATTRIBUTES
		var attSrcMp4=document.createAttribute("src");
		attSrcMp4.value="vids/" + vidTitle + ".mp4";
		
		var attSrcOgg=document.createAttribute("src");
		attSrcOgg.value="vids/" + vidTitle + ".ogv";
		
		videoSrcMp4.setAttributeNode(attSrcMp4);
		videoSrcOgg.setAttributeNode(attSrcOgg);

		createPlayerControls(videoId,domElement);

	}// end function createPlayer
	
	//// PRIVATE FUNCTIONS ///////////////
	function createPlayerControls(videoId,domElement){
		// CREATE CONTROLS
		var PlayerControls = document.createElement('div');
		PlayerControls.id = videoId + "_controls";
		PlayerControls.setAttribute('class','vidplayer_controls');
		
		
		PlayerControls.style.left = "-176px";
		
		PlayerControls.style.opacity = '1';
		PlayerControls.style.transition = 'left 10s';
		PlayerControls.style['-webkit-transition'] = 'left .6s';
		// PlayerControls.style.transition = 'opacity 1s';
		// PlayerControls.style['-webkit-transition'] = 'opacity 1s';
		if(supportsTransitions()){
			PlayerControls.addEventListener("webkitTransitionEnd",onPlayerFadeIn,false);			
			PlayerControls.addEventListener("transitionend",onPlayerFadeIn,false);			
		}else{
			alert('oooops');
		}
		
		// ATTACH CONTROLS TO DOM ELEMENT
		domElement.appendChild(PlayerControls);
		
		// CREATE CONTROLS BUTTONS
		var btnRestart = document.createElement('button');
		btnRestart.id = videoId + "_btnRestart";
		btnRestart.innerHTML = "[RESTART]";
		
		if (btnRestart.addEventListener) {
            btnRestart.addEventListener("click", restart, false);
        } else {
            btnRestart.attachEvent('onclick', restart);
        }
		PlayerControls.appendChild(btnRestart);
		
		var btnPause = document.createElement('button');
		btnPause.id = videoId + "_btnPause";
		btnPause.innerHTML = "[PAUSE]";
		
		if (btnPause.addEventListener) {
            btnPause.addEventListener("click", pause, false);
        } else {
            btnPause.attachEvent('onclick', pause);
        }
		PlayerControls.appendChild(btnPause);
		
		
		var btnPlay = document.createElement('button');
		btnPlay.id = videoId + "_btnPlay";
		btnPlay.innerHTML = "[PLAY]";
		
		if (btnPlay.addEventListener) {
            btnPlay.addEventListener("click", vidplay, false);
        } else {
            btnPlay.attachEvent('onclick', vidplay);
        }
		PlayerControls.appendChild(btnPlay);
		
		var btnToggle = document.createElement('button');
		btnToggle.id = videoId + "_btnToggle";
		btnToggle.innerHTML = "[+]";
		
		if (btnToggle.addEventListener) {
            btnToggle.addEventListener("click", animControls, false);
        } else {
            btnToggle.attachEvent('onclick', animControls);
        }
		PlayerControls.appendChild(btnToggle);
			
	}// END function createPlayerControls(videoId,domElement){
	
	
	
	function vidplay() {
       // var video = document.getElementById("Video1");
       // var button = document.getElementById("play");
       //if (video.paused) {
       	console.log(videoElement);
          videoElement.play();
          //button.textContent = "||";
       // } else {
          // video.pause();
          // button.textContent = ">";
       // }
    }

    function restart() {
        videoElement.currentTime = 0;
        console.log("restarted");
    }
    
    function pause() {
        videoElement.pause();
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
	
	function onPlayerFadeIn(event){
		// console.log('onMouseOver hit');
		console.log('onPlayerFadeIn = ' + this.id);
		
		
	}
	
	////////////// Public methods ///////////////////////////////////////////	
	return{
		
		createPlayer:function(videoId,domId,vidTitle){
			createPlayer(videoId,domId,vidTitle);
		}
		
	};
	
});