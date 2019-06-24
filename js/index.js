$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});

$('.secondary-videos .videos, .main-video').addClass('active-jq');

  $('.secondary-videos .videos').click(function() {
    var number = $(this).attr('class').split(" ")[1].split("-")[1];

    $('.secondary-videos .videos').removeClass('selected-video');
    $(this).addClass('selected-video');

    $('.main-video').each(function() {
      if ($(this).hasClass('show-video')) {
        var video = $(this).find('.video-wrapper iframe').attr("src");
        $(this).find('.video-wrapper iframe').attr("src", "");
        $(this).find('.video-wrapper iframe').attr("src", video);
      }
    });


    $('.main-video').removeClass('show-video');
    $('.main-video-' + number).addClass('show-video');
  })

  var isMobile = false;
  if ($('.videos').css('float') == 'none') {
    isMobile = true;
    $('.secondary-videos .videos, .main-video').removeClass('active-jq');
  }


  $(document).ready(function() {
   
    $menu = $('.mobile-sidebar');
    $close = $('.close');
   
    function isOpen(x) {
      x.toggleClass("open");
    }
 
    $('.toggle').click(function() {
      isOpen($menu);
      $menu.animate({
        "left" : 0
      }, 1000);
    });
    
    $('.close').click(function() {
      $menu.animate({
        "left" : "-1000px"
      }, 1500);
      setTimeout(function() {
        isOpen($menu);
      }, 1000);
    });
    
    
  });

