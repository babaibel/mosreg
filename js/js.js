var $W = $(window),
    $D = $(document),
    $H = $('html'),
    $B = $('body');


$(function() {

    $('.js-map-btn').click(function () {
    	$(this).toggleClass('active');
    	if($(this).hasClass('active')){
    		$(this).text('Свернуть карту');
    	} else{
			$(this).text('Развернуть карту');
    	}
    	$(this).parent('.map__topline').next('.js-map').slideToggle(200);
	    return false;
	});

});

$(function() {

	$(".js-mob_menu").on("click touchstart",function(e){e.preventDefault(),toggleNav()});

	$(".js-close-menu").click(function () {
		$("#js-canvas").removeClass("layout__canvas_show");
	});

	function toggleNav(){
		if( $("#js-canvas").hasClass("layout__canvas_show") ){
			$("#js-canvas").removeClass("layout__canvas_show");
		}
		else{
			$("#js-canvas").addClass("layout__canvas_show");
		}
	}

	var swidth=(window.innerWidth-$(window).width());

	$('.js-popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		showCloseBtn: false,
		mainClass: 'popup-modal-overlay',
		callbacks: {
			open: function() { $('.header__layout.fixed').css('padding-right', swidth + "px"); }, 
			close: function() { $('.header__layout.fixed').css('padding-right', 0); },
		}
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

$(function () {
    function setScrolled(){
        var scroll = $W.scrollTop();

        if(scroll > 90 ){
            if(!$B.hasClass('_scrolled')) $B.addClass('_scrolled');
        }else{
            $B.removeClass('_scrolled');
        }
    }

    setScrolled();

    $W.scroll(function(){
        setScrolled();
    })

});

$(function() {

	var $tab = $('.js-tab');

	if(!$tab.length) return;

	var $tabBtns = $tab.find('.js-tab-btns > div'),
		$tabTabs = $tab.find('.js-tab-tabs > div');

	function tab(numb) {
	    $tabTabs.removeClass('active')
	        .eq(numb).addClass('active');

	    $tabBtns.removeClass('active')
	        .eq(numb).addClass('active');
	}

	$tabBtns.bind('click', function () {
        var index = $(this).index();
        tab(index);
    });

});

$(function() {

	var $services = $('.js-services');

	if(!$services.length) return;

	var $servicesSlider = $services.find('.js-services-slider'),
		$servicesBtns = $services.find('.js-services-btns > div'),
		$servicesTabs = $services.find('.js-services-tabs > div'),
		$servicesSliderBtns = $services.find('.js-services-slider-btns'),
		$servicesSliderTabs = $services.find('.js-services-slider-tabs > div'),
		$servicesSliderBtns2 = $services.find('.js-services-slider-btns2'),
		$servicesSliderTabs2 = $services.find('.js-services-slider-tabs2 > div');

	function servicesTabs(numb) {
        $servicesTabs.removeClass('active')
            .eq(numb).addClass('active');

        $servicesBtns.removeClass('active')
            .eq(numb).addClass('active');
    }

    function servicesSliderTabs(numb) {
        $servicesSliderTabs.removeClass('active')
            .eq(numb).addClass('active');

        $servicesSliderBtns.removeClass('active').parent('div')
            .eq(numb).children('div').addClass('active');
    }

     function servicesSliderTabs2(numb) {
        $servicesSliderTabs2.removeClass('active')
            .eq(numb).addClass('active');

        $servicesSliderBtns2.removeClass('active').parent('div')
            .eq(numb).children('div').addClass('active');
    }

    $servicesBtns.bind('click', function () {
        var index = $(this).index();
        servicesTabs(index);
        $servicesSlider.slick('setPosition');
    });

    $servicesSliderBtns.bind('click', function () {
        var index = $(this).parent('div').index();
        servicesSliderTabs(index);
    });

    $servicesSliderBtns2.bind('click', function () {
        var index = $(this).parent('div').index();
        servicesSliderTabs2(index);
    });


	$servicesSlider.slick({
	  infinite: false,
	  arrows: false,
	  slidesToShow: 6,
	  slidesToScroll: 3,
	  dots: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 5
	      }
	    },
	    {
	      breakpoint: 860,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 780,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 560,
	      settings: {
	        centerMode: true,
	        variableWidth: true,
	        slidesToShow: 1
	      }
	    }
	  ]
	});

});

