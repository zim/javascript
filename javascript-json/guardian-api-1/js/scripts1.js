$(document).ready(function() {

	$.getJSON('http://content.guardianapis.com/search?q=arsenal&format=json&api-key=ragnru2k9y5fwm7eg2r7824y', function(info){



			var output='';
			for (var i = 0; i <= info.response.results.length-1; i++) {
				for (key in info.response.results[i]) {
					if (info.response.results[i].hasOwnProperty(key)) {
						output += '<li>' + 
						'<p>' + key +
						'</p><p>' + info.response.results[i][key] + '</p>';
						'</li>';
			    }   
				}
			}
			
			var update = document.getElementById('links');
			update.innerHTML = output;
			
			
	
	}); //getJSON

}); // ready