/* Please ❤ this if you like it! */


(function($) { "use strict";
	

	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	//p1//
	//Travel portfolio page
	
	$(".travel").on('click', function () {
		$("body").addClass("travel-on");
	});
	$(".travel-close").on('click', function () {
		$("body").removeClass("travel-on");
	});

	
	//Wildlife portfolio page
	
	$(".wildlife").on('click', function () {
		$("body").addClass("wildlife-on");
	});
	$(".wildlife-close").on('click', function () {
		$("body").removeClass("wildlife-on");
	});

	
	//Nature portfolio page
	
	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
	});
   //magic portfolio page

	$(".magic").on('click', function () {
		$("body").addClass("magic-on");
	});
	$(".magic-close").on('click', function () {
		$("body").removeClass("magic-on");
	});


    //p2//
    //twoTravel portfolio page
	
	$(".twotravel").on('click', function () {
		$("body").addClass("twotravel-on");
	});
	$(".twotravel-close").on('click', function () {
		$("body").removeClass("twotravel-on");
	});

	
	//twoWildlife portfolio page
	
	$(".twowildlife").on('click', function () {
		$("body").addClass("twowildlife-on");
	});
	$(".twowildlife-close").on('click', function () {
		$("body").removeClass("twowildlife-on");
	});

	
	//twoNature portfolio page
	
	$(".twonature").on('click', function () {
		$("body").addClass("twonature-on");
	});
	$(".twonature-close").on('click', function () {
		$("body").removeClass("twonature-on");
	});
   //twomagic portfolio page

	$(".twomagic").on('click', function () {
		$("body").addClass("twomagic-on");
	});
	$(".twomagic-close").on('click', function () {
		$("body").removeClass("twomagic-on");
	});
	

	//web//
	//webTravel portfolio page
	
	$(".webtravel").on('click', function () {
		$("body").addClass("webtravel-on");
	});
	$(".webtravel-close").on('click', function () {
		$("body").removeClass("webtravel-on");
	});

	
	//webWildlife portfolio page
	
	$(".webwildlife").on('click', function () {
		$("body").addClass("webwildlife-on");
	});
	$(".webwildlife-close").on('click', function () {
		$("body").removeClass("webwildlife-on");
	});

	
	//webNature portfolio page
	
	$(".webnature").on('click', function () {
		$("body").addClass("webnature-on");
	});
	$(".webnature-close").on('click', function () {
		$("body").removeClass("webnature-on");
	});
})(jQuery);