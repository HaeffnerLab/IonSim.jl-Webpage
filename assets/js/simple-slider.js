var slideTo = function(span) {
    mySwiper.update();
    var slide_index = span.getAttribute('slide-index');
    mySwiper.slideTo(slide_index);
    // alert(`${slide_index}`);
    // console.log(`slide index: ${slide_index}`);
    setTimeout(mySwiper.update, 200);
};

$(function(){

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        // autoplay: 1000,
        // autoplayDisableOnInteraction: true,
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        paginationClickable: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        keyboardControl: true,
        paginationCustomRender: function (swiper, current, total) {
            var content = `<span class='slider-names selected-slider' slide-index=${current}>
                    ${swiper.slides[current].getAttribute('name')}
                </span>`;
            var lbullets = '';
            var rbullets = '';
            for (var i=1; i < current; i++) {
                lbullets += `<span class='slider-names' style='z-index:${total-i + 10}' 
                                   slide-index=${i} onclick='slideTo(this)'>
                        ${swiper.slides[i].getAttribute('name')}
                    </span>`;
            }
            for (var i=current+1; i <= total; i++) {
                rbullets += `<span class='slider-names' style='z-index:${total-i + 10}'
                                   slide-index=${i} onclick='slideTo(this)'>
                        ${swiper.slides[i].getAttribute('name')}
                    </span>`;
            }
            return lbullets + content + rbullets;
          },
    });
});

