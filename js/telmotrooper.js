$(document).ready(function() {
	// Copying stuff from desktop to mobile
	$("#name").clone().appendTo("#phone-bio");
	$("#mail").clone().appendTo("#phone-bio");
	$("#occupation").clone().appendTo("#phone-bio");
	$("#location").clone().appendTo("#phone-bio");
});

function showOrHide(element) {
	if($("#" + element).is(":visible")) {
		$("#" + element + "-btn").removeClass("fa-chevron-down");
		$("#" + element + "-btn").addClass("fa-chevron-right");
		$("#" + element).hide();
	} else {
		$("#" + element + "-btn").removeClass("fa-chevron-right");
		$("#" + element + "-btn").addClass("fa-chevron-down");
		$("#" + element).show();
	}
}