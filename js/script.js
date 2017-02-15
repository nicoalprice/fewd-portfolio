// JS for portfolio

/* Hamburger Menu */
$("#hamburger").on("click", function(){
	if ($(".menu").hasClass("open")) {
		$(".menu").removeClass("open")
	} else {
		$(".menu").addClass("open")
	}
});
