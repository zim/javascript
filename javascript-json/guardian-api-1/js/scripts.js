var request;
if (window.XMLHttpRequest) {
	request=new XMLHttpRequest();
} else {
	request=new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'http://content.guardianapis.com/search?q=arsenal&format=json&api-key=ragnru2k9y5fwm7eg2r7824y');

request.onreadystatechange = function() {
	if ((request.status === 200) &&
		(request.readyState === 4)) {

			info = JSON.parse(request.responseText);

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
			
			
	} //ready
} //event
request.send();