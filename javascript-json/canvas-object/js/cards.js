$(function() {

	$.getJSON('cards.json', function(data) {
		
		
		for (key in data) {
          $.each(data[key], function(k, arrayItem) {
            console.log(arrayItem.suit);
            console.log(arrayItem.value);
          });
        }
        
        //console.log();
        
        var i=0;
         for(i=0;i<data.length;i++){
            
            console.log(data[i].suit);
            console.log(data[i].value);
        }
		
		
		// var template = $('#cardstpl').html();
		// var html = Handlebars.to_html(template, data);
		// $('#deckwrap').html(html);
		
		var source   = $("#cardstpl").html();
		var template = Handlebars.compile(source);
		
		
		//shuffles list in-place
		function shuffle(array) {
		  var currentIndex = array.length;
		  var temporaryValue;
		  var randomIndex;
		
		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {
		
		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		
		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }
		
		  return array;
		}
		// end shuffle
		var arr = [2, 11, 37, 42];
		shuffle(arr);
		console.log(arr);
		
		// $('#carousel').cycle({
			// fx: 'fade',
			// pause: 1,
			// next: '#next_btn',
			// prev: '#prev_btn',
			// speed: 500,
			// timeout: 10000
		// });
		
	}); //getJSON
}); //function
