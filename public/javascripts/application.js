// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function () {
	
	function cycle () {
		var x = true;
		while (x == true) {
			$(".mobile").delay(3000).fadeOut(300);
			$(".web").delay(3400).fadeIn(300);
			$(".web").delay(3800).fadeOut(300);			
			$(".data").delay(4200).fadeIn(300);
			$(".data").delay(5000).fadeOut(300);
			$(".mobile").delay(5400).fadeIn(300);
		};
	};
	
	// Main visual cycle
	// 
	// make an array of the images/combos
	// select a random number 0...n, and dump it in a variable
	// $select items not selected by the number generator, and .css("display", "none")
	// $select the item selected by the number generator and .fadeIn(300).delay(t).function() {
	// 	run the # generator
	// 	
	// 	if # == current #
	// 		run # generator again
	// 	else
	// 		recurse
	// 		
	// 	end
	// }
	// 
	// select a random number 3000
	// 
	// 
	// var x = [".web", ".mobile", ".data"]
	// var y = getRandomInt(0,2)				// to select which pic to show
	// var t = 3000							// time interval (ms) to wait to switch up the main visual
	// 
	// // figure out which element to show..
	// function getRandomInt (min, max) {
	// 	return Math.floor(Math.random() * (max - min + 1)) + min;
	// };	
	// 
	// // select that element...
	// function getMainVisual (y) {
	// 	$("x[y]").fadeIn(300);				// ex. x[2] => ".data"
	// };
	
	
	
	
	// cycle();


	// $("#howHelp textarea").focus();
	
	
	
	// Post-submit message/Twitter pimp-age
	// $("#inquiry_submit").click(function (event) {
	// 		event.preventDefault();
	// 		$("#new_inquiry").fadeOut(300);
	// 		$("#afterSend").delay(200).fadeIn(300);
	// 	});
	

// SERVICES PAGE

	// ITEM HOVER CHANGES
	$(".serviceItem").hover(
		function () {
			$(this).css({
				"background-color":"rgba(0,0,255,.1)",
				"cursor":"pointer",
				"border-radius":"10px",
				"-moz-border-radius":"10px",
				"-webkit-border-radius":"10px"
			});
		},
		function () {
			$(this).css({
				"background-color":"white",
				"border":"none"
			});
		}
	);
	
	// FORM OVERLAY
	$(".serviceItem").click(function () {
		$("#sidenav").fadeOut(200);
		$("div:hidden").fadeIn(200);
	});
	
	$("#formOverlay").click(function(){
		$("#formOverlay, #floatingInquiry").fadeOut(200);
		$("#sidenav").fadeIn(200);

	});

		
	
	
	
	// $(".serviceItem").mousedown(
	// 	function () {
	// 		$(this).css({
	// 			"background-color":"rgba(0,0,255,.5)",
	// 			"color":"white"
	// 		});
	// 	}
	// );
	// 
	// $(".serviceItem").mouseup(
	// 	function () {
	// 		$(this).css({
	// 			"background-color":"rgba(0,0,255,0.1)",
	// 			"color":"inherit"
	// 		});
	// 	}
	// );

	// ==> toss a scrollTo or whatever down to the form at the bottom.
	
});