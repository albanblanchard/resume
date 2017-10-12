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


  $(document).ready(function () {
		// smooth scroll with nav
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

				// hamburger menu
				// 0 = hide, 1 = visible
			  var menuState = 0;
			  //if($(".mini-menu-options").is(":hidden")) {
			    /* Add a Click event listener to btn-select */
			    $(".btn-select").on("click",function() {
			      if(menuState === 0) {
			        $(".mini-menu-options").slideDown("slow");
			        menuState = 1;
			      } else {
			        $(".mini-menu-options").slideUp("slow");
			        menuState = 0;
			      }
			    });
			  //}
			  $(".mini-menu-options li").on("click", function() {
			    var numHijos = $(this).children().length;
			    if(numHijos < 2) {
			      // hide the menu
			      $(".mini-menu-options").hide("fast");

			      var texto = $(this).text();

			      $(".menu-select .menu-actual").text(texto);
			    }
			    menuState = 0;
			  });
				
      });
