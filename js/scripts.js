// shrink header on scroll
$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $("header").addClass("shrink-header");
      $("#me").addClass("shrink-me");
      $("#logo-ab").addClass("shrink-logo-ab");
      $("#logo").addClass("shrink-logo");
		}
		else
		{
			$("header").removeClass("shrink-header");
      $("#me").removeClass("shrink-me");
      $("#logo-ab").removeClass("shrink-logo-ab");
      $("#logo").removeClass("shrink-logo");
		}
	});

// smooth scroll with nav
  $(document).ready(function () {
    // bind click event to all internal page anchors
    $('a[href*="#"]').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
				// var headerOffset = document.getElementById('header').offsetHeight;
        // scroll to each target
        $(target).velocity('scroll', {
            duration: 1000,
            offset: -75,
            easing: 'easeOutCirc'
            });
        });
      });
