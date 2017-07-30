$(document).ready(function() {
	var timer = parseInt($("#counter").html());
	
	var i = setInterval(function() {
		if(timer == 0) {
			window.location.replace("https://codepen.io/telmo_trooper/full/GEPMpy/");
			clearInterval(i);
		}

		$("#counter").html(timer--);
	}, 1000);
});