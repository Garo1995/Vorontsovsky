

let businessSwiper = new Swiper(".business-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 600,

    pagination: {
        el: ".business-pagination",
        clickable: true,
    }
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
            loop: true,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,

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













document.querySelectorAll(".gallery-slider").forEach((slider) => {
    const parent = slider.closest(".modal-gallery");

    const nextBtn = parent.querySelector(".gallery-button-next");
    const prevBtn = parent.querySelector(".gallery-button-prev");
    const pagination = parent.querySelector(".gallery-pagination");

    new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 600,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
        pagination: {
            el: pagination,
            type: "fraction",
        },
    });
});






let countSwiper = new Swiper(".floor-count-slider", {
    slidesPerView: 1,
    spaceBetween: 1,
    slidesPerGroup: 1,

    navigation: {
        nextEl: ".floor-count-next",
        prevEl: ".floor-count-prev",
    },

});



















let layoutSwiper = new Swiper(".layout-number-slider", {
    spaceBetween: 10,
    slidesPerView: 5,
    direction: "vertical",
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".layout-button-next",
        prevEl: ".layout-button-prev",
    },
    breakpoints: {
        1199: {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        1020: {
            slidesPerView: 5,
            slidesPerGroup: 1,
            direction: "horizontal",
        },
        320: {
            direction: "horizontal",
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
    },
});

let swiper2 = new Swiper(".select-layout-slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    navigation: {
        nextEl: ".layout-button-next",
        prevEl: ".layout-button-prev",
    },
    thumbs: {
        swiper: layoutSwiper,
    },
});
