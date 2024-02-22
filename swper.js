var vw = window.innerWidth;
var swiper = new Swiper(".mySwiper", {

    slidesPerView: 10,
    loop: true,
    spaceBetween: 1,
    centeredSlides: true,
    autoplay: {
        delay: 1600,
        disableOnInteraction: true,
    },
    touch: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        fade: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 4,
        }
    },

});