

let businessSwiper = new Swiper(".business-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 600,

    pagination: {
        el: ".business-pagination",
        clickable: true,
    }
});


let gallerySwiper = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 600,
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },

});