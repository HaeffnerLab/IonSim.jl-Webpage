$(function(){
    $('#cite-bar').css('display', 'inline-block');
    $('#cite-par').css('display', 'inline-block');
});

$(function() {
    $('#cite').hover(function() {
        if ($(window).width() < 992) return;
        setTimeout(() => {
            if (!$('#cite').is(':hover')) return;
            // $('html, body').stop(true, true).animate({scrollTop: 0}, 'slow');
            $('#main-cite').stop(true, true).delay(50).slideDown(500);
        }, 750)}, function() {
            setTimeout(() => {
                var isHover = $('#main-cite').is(':hover');
                (isHover) || $('#main-cite').stop(true, true).delay(250).slideUp(350);
                }, 250);
      });

    $('#main-cite').hover(function() {return},
      function() {
          $('#main-cite').stop(true, true).delay(250).slideUp(350);      
      });
});


