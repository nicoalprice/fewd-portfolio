// JS for portfolio

var $overlay = $("<div id='overlay'></div>");
var $overlay-image;

/* Hamburger Menu */
$("#hamburger").on("click", function(){
	if ($(".menu").hasClass("open")) {
		$(".menu").removeClass("open")
	} else {
		$(".menu").addClass("open")
	}
});

//$("body").append($overlay);
//
//// When a user clicks on a project image or title
//$(".project").click(function(event){
//	// Stop click from opening project URL
//	event.preventDefault();
//	console.log("You clicked on this project.");
//// Open a lightbox with more info and link to Github repository
////	$("body").append($overlay);
//
//	// $overlay-image = url of project that was clicked
//
//	//Display the overlay
//	$overlay.fadeIn(1500);
//});
//
//
///* Hide overlay when esc key is pressed */
//$("body").keydown(function(event) {
//	if (event.which == 27) {
//		$overlay.fadeOut(1000).hide();
//	}
//});
