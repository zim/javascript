$(function() {

	$.getJSON('data.json', function(data) {
		
		var template = $('#speakerstpl').html();
		var html = Mustache.to_html(template, data);
		$('#carousel').html(html);
		
		$('#carousel').cycle({
			fx: 'fade',
			pause: 1,
			next: '#next_btn',
			prev: '#prev_btn',
			speed: 500,
			timeout: 10000
		});
		
	}); //getJSON
}); //function
