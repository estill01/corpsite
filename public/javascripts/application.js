$(document).ready(function () {


// IMAGE LOOP
	function frontLoop () {
		var x = 0;
		var max = 2;

		if ($('title').html() === "Protovore Partners | home") {
	
			setInterval(function () {
				$(".service_" + x).fadeOut(500);
				x++;
				if (x > max) {
					x = 0;
				}
				$(".service_" + x).delay(1000).fadeIn(500);
			}, 10000);
		}
	};

	frontLoop();


//Services Page
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
	$(".serviceItem, .frontItem").click(function () {
		$("#sidenav").fadeOut(200);
		$(".form").fadeIn(200);
		$("#floatForm").focus();		
	});
	
	$("#formOverlay").click(function(){
		$("#formOverlay, #floatingInquiry").fadeOut(200);
		$("#sidenav").fadeIn(200);

	});
		
});