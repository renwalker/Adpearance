$(document).foundation({
	equalizer: {
		// Specify if Equalizer should make elements equal height once they become stacked.
		equalize_on_stack: true
	}
});



//peeping header
if (Modernizr.mq('only all and (min-width: 40em)')) {
	$(".header--main").headroom({
		"tolerance": 15,
		"offset": 20
	});
}


// Off Canvas Mobile Menu
$('#SideNav').hide();

function sideDrawer() {
	$('#SideNav').scotchPanel({
		containerSelector: 'body',
		direction: 'right',
		duration: 280,
		transition: 'ease-in',
		clickSelector: '.toggle-right-panel',
		distanceX: '300px', // Size for the toggle
		enableEscapeKey: true, 
		beforePanelOpen: function() {
			$(".toggle-right-panel").addClass("panel-open");
			$(".burger--label").text("Close");
			$("#SideNav").show();
		},
		afterPanelClose: function() {
			$(".toggle-right-panel").removeClass("panel-open");
			$(".burger--label").text("More");
		}
	});
}

if (Modernizr.mq('only all and (max-width: 40em)')) { //activate only on small screens
	sideDrawer();
}



//Service/Industry toggle
$("#service-grid").show();
$("#industry-grid").hide();
$('#serviceIndustry-switch').prop( "checked", false);

	function showIndustries(){
		$('#serviceIndustry-switch').prop('checked', true);
		$("#service-toggle").removeClass("active");
		$("#industry-toggle").addClass("active");
		$("#service-grid").slideUp("slow");
		$("#industry-grid").slideDown("slow");
	}

	function showServices(){
		$('#serviceIndustry-switch').prop('checked', false);
		$("#industry-toggle").removeClass("active");
		$("#service-toggle").addClass("active");
		$("#industry-grid").slideUp("slow");
		$("#service-grid").slideDown("slow");
	}

	//toggle via labels
	$("#industry-toggle").click(function() {
		showIndustries();
	})

	$("#service-toggle").click(function() {
		showServices();
	})

	//toggle via switcher
	$('#serviceIndustry-switch').click(function() {
		if( $(this).is(':checked')) {
			showIndustries();
		} 
		else {
			showServices();
		}
	});




//animate stats. run once
$('.stats').one('data800', function(e, direction) {
	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
		Counter: $(this).text()
		}, {
			duration: 2200,
			easing: 'easeOutCirc',
			step: function (now) {
			$(this).text((now).toFixed(1));
			}
		});
	});
});




//testonial slider
$('.testimonial-carousel').owlCarousel({
	items: 1,
	nav: true,
	dots: true,
	//autoplay: true,
	autoplayTimeout: 4000,
	autoplayHoverPause: true,
	smartSpeed: 450,
	autoHeight: false,
	loop: true
});




//blog feed. draggable
$('#article-carousel').owlCarousel({
	loop:true,
	dots: false,
	nav: false,
	responsiveClass:true,
	touchDrag: true,
	responsive:{
		0:{
			items:1,
			margin: 10,
			stagePadding: 40
		},
		500:{
			items:1,
			margin: 20,
			stagePadding: 60
		},
		700:{
			items:2,
			margin: 20,
			stagePadding: 60
		},
		1025:{
			items:3,
			margin: 20,
			stagePadding: 60
		},
		1280:{
			items: 4,
			margin: 20,
			stagePadding: 60
		},
		1300:{
			items: 4,
			margin: 30,
			stagePadding: 100
		}
	}
})







//init Skroller. Initialize LAST so it calculates height correct
if (Modernizr.mq('only all and (min-width: 40em)')) {

	var s = skrollr.init({
		forceHeight: false,
		keyframe: function(element, name, direction) {
			 $(element).trigger(name, [direction]);
		}
	}),

	//allow scroll one-way
	w  = $(window),
	dataToAttribute = function(data){
		return data.replace(/[A-Z]/g,function(match){return '-' + match.toLowerCase()});
	};

	w.on('scroll', function(){
		var finished = $('.skrollable-after.one-way');
		
		finished.each(function(){
			var self = $(this).removeClass('skrollable-after'),
					data = {};
			// remove relevant data- attributes
			$.each(this.attributes, function(){
				if (this.specified && this.name.indexOf('data-')===0){
					data[this.name] = true;
				}
			});
			for(var d in data){
				console.log('removing attribute', d, (new Date()).getTime());
				self.removeAttr( d );
			}
		});
		if (finished.length){
			s.refresh();
		}
	});
}




// Text Accordion, Toggler, Expander whatever the hell you call it
// (function(){

// 	function init_togglees() {
// 		$('.toggle_wrap .togglee').each(function() {
// 			if (!$(this).hasClass('default-open')) {
// 				$(this).hide();
// 			}
// 		});
// 	}
// 	$(document).on('replace', init_togglees);
// 	init_togglees();
// })();


// $(document).on('click', '.toggler', function() {
// 	if ($(this).parents('.toggle_wrap').length >= 1) {
// 		var accordian = $(this).parents('.toggle_wrap');
// 		if ($(this).hasClass('active')) {
// 			$(accordian).find('.toggler').removeClass('active');
// 			$(accordian).find('.togglee').slideUp();
// 		} else {
// 			$(accordian).find('.toggler').removeClass('active');
// 			$(accordian).find('.togglee').slideUp();
// 			$(this).addClass('active');
// 			$(this).next('.togglee').slideToggle();
// 		}
// 	} else {
// 		if ($(this).hasClass('active')) {
// 			$(this).removeClass('active');
// 		} else {
// 			$(this).addClass('active');
// 		}
// 	}
// 	return false;
// });

// $(document).on('click', '.toggler', function() {
// 	if (!$(this).parents('.toggle_wrap').length >= 1) {
// 		$(this).next('.togglee').slideToggle();
// 	}
// });



//Smooth scroll to + scroll to top
// function scrollToID(id, speed){
// 	var offSet = 50;
// 	var targetOffset = $(id).offset().top - offSet;
// 	//var mainNav = $('#main-nav');
// 	$('html,body').animate({scrollTop:targetOffset}, speed);
// 	//if (mainNav.hasClass("open")) {
// 		//mainNav.css("height", "1px").removeClass("in").addClass("collapse");
// 		//mainNav.removeClass("open");
// 	//}
// }
// $(function(){
//     $(document).on( 'scroll', function(){
//        //hide+show 'to top' link — visual controlled via CSS
//         if ($(window).scrollTop() > 100) {
//             $('.scrollTop').addClass('show');
//         } else {
//             $('.scrollTop').removeClass('show');
//         }
//     });
//     $('.scrollTop').on('click', function(event) {
// 		event.preventDefault();
// 		$('html, body').animate({scrollTop:0}, 'slow');
// 	});
// 	//smooth section scroll to
// 	$('.scrollLink').on('click', function(event){
// 		event.preventDefault();
// 		var sectionID = $(this).attr("data-id");
// 		scrollToID('#' + sectionID, 500);
// 	});
// });
		


