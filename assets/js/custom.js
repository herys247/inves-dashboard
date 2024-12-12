(function($) {
	"use strict";

	//Color-Theme
	$(document).on("click", "a[data-theme]", function() {
		$("head link#theme").attr("href", $(this).data("theme"));
		$(this).toggleClass('active').siblings().removeClass('active');
	});

	// ______________Full screen
	$(document).on("click", ".fullscreen-button", function toggleFullScreen() {
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	})


	// ______________Quantity Cart Increase & Descrease
	$(function () {
		$('.add').on('click',function(){
			var $qty=$(this).closest('div').find('.qty');
			var currentVal = parseInt($qty.val());
			if (!isNaN(currentVal)) {
				$qty.val(currentVal + 1);
			}
		});
		$('.minus').on('click',function(){
			var $qty=$(this).closest('div').find('.qty');
			var currentVal = parseInt($qty.val());
			if (!isNaN(currentVal) && currentVal > 0) {
				$qty.val(currentVal - 1);
			}
		});
	});


	// ______________ PAGE LOADING
	$(window).on("load", function(e) {
		$("#global-loader").fadeOut("slow");
	})

	// ______________ BACK TO TOP BUTTON
	$(window).on("scroll", function(e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$(document).on("click", "#back-to-top", function(e) {
		$("html, body").animate({
			scrollTop: 0
		}, 0);
		return false;
	});


	// ______________ COVER IMAGE
	$(".cover-image").each(function() {
		var attr = $(this).attr('data-bs-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});


	// Search
	$('.search-btn').click(function(){
		$('.search-area').fadeIn();
		$('body').addClass("search-header");
		$('.close-btn').fadeIn();
	});
	$('.close-btn').click(function(){
		$('.search-area').fadeOut();
		$('body').removeClass("search-header");
	});


	// ______________Chart-circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function() {
			let $this = $(this);
			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: 'rgba(119, 119, 142, 0.1)',
				lineCap: 'round'
			});
		});
	}

	// ______________ CARD
	const DIV_CARD = 'div.card';

	 // ______________Tooltip
	 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		 return new bootstrap.Tooltip(tooltipTriggerEl)
	 })
	 // ______________Popover
	 var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	 var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		 return new bootstrap.Popover(popoverTriggerEl)
	 })

	// ______________ FUNCTION FOR REMOVE CARD
	$(document).on('click', '[data-bs-toggle="card-remove"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});


	// ______________ FUNCTIONS FOR COLLAPSED CARD
	$(document).on('click', '[data-bs-toggle="card-collapse"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ______________ CARD FULL SCREEN
	$(document).on('click', '[data-bs-toggle="card-fullscreen"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});


	// Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity
	});
	// Select2 by showing the search
	$('.select2-show-search').select2({
		minimumResultsForSearch: ''
	});


})(jQuery);

$(document).on('click', '[data-toggle="fullscreen"]', function () {
    $(this).toggleClass('fscreen');

    if (document.fullscreenEnabled) {
      if ($(this).hasClass("fscreen")) {
        document.documentElement.requestFullscreen();
      } 
	  else if ($(this).hasClass("fscreen")) {
        document.documentElement.webkitRequestFullscreen(); 
      } 
	  else if ($(this).hasClass("fscreen")) {
        document.documentElement.msRequestFullscreen(); 
      } else {
        document.exitFullscreen();
      }
    } else {
      alert("Your browser does not support fullscreen.");
    }

    return false;
  });


// ______________ SWITCHER-toggle ______________//
$('.layout-setting').on("click", function (e) {
	let html = document.querySelector('html');
	if (html.getAttribute('data-theme-color') === "dark") {
		html.setAttribute('data-theme-color', 'light');
		html.setAttribute('data-header-style', 'light');
		html.setAttribute('data-menu-style', 'light');
		$('#switchbtn-lightmenu').prop('checked', true);
		$('#switchbtn-lightheader').prop('checked', true);
		
		localStorage.setItem("dashleadlighttheme", true);
		localStorage.removeItem("dashleaddarktheme");
		localStorage.removeItem("dashleadbgColor");
		localStorage.removeItem("dashleadheaderbg");
		localStorage.removeItem("dashleadbgwhite");
		localStorage.removeItem("dashleadmenubg");
		localStorage.removeItem("dashleadtransparentBgColor");

		localStorage.setItem("dashleadHeader", 'light');
		localStorage.setItem("dashleadMenu", 'light');

		//checkOptions();

		//if (!document.body.classList.contains('auth-page')) {
		// 	let mainHeader = document.querySelector('.app-header');
		// 	mainHeader.style = "color";
		// 	let appSidebar = document.querySelector('.app-sidebar');
		// 	appSidebar.style = "hover1";
		// }
		document.querySelector('html').style = '';
		//names();

	} 
	else {
		html.setAttribute('data-theme-color', 'dark');
		html.setAttribute('data-header-style', 'dark');
		html.setAttribute('data-menu-style', 'dark');
		$('#switchbtn-darkmenu').prop('checked', true);
		$('#switchbtn-darkheader').prop('checked', true);
		
		localStorage.setItem("dashleaddarktheme", true);
		localStorage.removeItem("dashleadlighttheme");
		localStorage.removeItem("dashleadbgColor");
		localStorage.removeItem("dashleadheaderbg");
		localStorage.removeItem("dashleadbgwhite");
		localStorage.removeItem("dashleadmenubg");

		localStorage.setItem("dashleadHeader", 'dark');
		localStorage.setItem("dashleadMenu", 'dark');
		
		//checkOptions();

		// if (!document.body.classList.contains('auth-page')) {
		// 	let mainHeader = document.querySelector('.app-header');
		// 	mainHeader.style = "";
		// 	let appSidebar = document.querySelector('.app-sidebar');
		// 	appSidebar.style = "";
		// }
		document.querySelector('html').style = '';
		//names();
	}
});



