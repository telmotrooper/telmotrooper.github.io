$(document).ready(function() {
	// Copying stuff from desktop to mobile
	$("#name").clone().appendTo("#phone-bio");
	$("#mail").clone().appendTo("#phone-bio");
	$("#occupation").clone().appendTo("#phone-bio");
	$("#location").clone().appendTo("#phone-bio");

	$("#show-hide").click(function() {
		if($("#webpages").is(":visible")) {
			$("#show-hide-icon").removeClass("fa-chevron-down");
			$("#show-hide-icon").addClass("fa-chevron-right");
			$("#webpages").hide();
		} else {
			$("#show-hide-icon").removeClass("fa-chevron-right");
			$("#show-hide-icon").addClass("fa-chevron-down");
			$("#webpages").show();
		}
		
	});
});
