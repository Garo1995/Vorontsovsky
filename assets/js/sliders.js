

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
let technoSwiper = new Swiper(".techno-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".techno-button-next",
        prevEl: ".techno-button-prev",
    },

});











let constructDescSwiper = new Swiper(".construct-desc-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    slidesPerGroup: 1,
    speed: 600,

    navigation: {
        nextEl: ".construct-next",
        prevEl: ".construct-prev",
    },

    breakpoints: {

        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },
});











let newsSwiper = new Swiper(".news-slider", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 16,
    speed: 600,

    grid: {
        rows: 2,
        fill: "row",
    },
    navigation: {
        nextEl: ".news-button-next",
        prevEl: ".news-button-prev",
    },
});













let galleryModalSwiper = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 600,
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },
    pagination: {
        el: ".gallery-pagination",
        type: "fraction",
    }
});