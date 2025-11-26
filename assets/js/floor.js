const boxes = document.querySelectorAll('.floor-svg-box');
const infoBox = document.getElementById('info-box');
const floorCount = infoBox.querySelector('.floor-count');
const numberRooms = infoBox.querySelector('.number-rooms');
const numberPremises = infoBox.querySelector('.number-premises');
const costPremises = infoBox.querySelector('.cost-premises');
const floorButtons = document.querySelectorAll('.floor-selection-count li');

let isOverSvg = false;

// Показать инфо-блок
function showInfoBox(box) {
    const floor = box.getAttribute('data-count'); // этаж
    const rooms = box.getAttribute('data-number'); // помещений
    const premises = box.getAttribute('data-premises');
    const cost = box.getAttribute('data-cost');

    floorCount.textContent = floor;
    numberRooms.textContent = rooms;
    numberPremises.textContent = premises;
    costPremises.textContent = cost;
}

// Очистить активные состояния
function clearActive() {
    boxes.forEach(f => f.classList.remove('active-floor'));
    floorButtons.forEach(b => b.classList.remove('active-btn'));
}

// Наведение на SVG этаж
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        isOverSvg = true;
        showInfoBox(box);
    });
    box.addEventListener('mouseleave', () => {
        isOverSvg = false;
        setTimeout(() => {
            if (!isOverSvg) return;
        }, 100);
    });
});

// Клик по цифрам этажей
floorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const floorNum = btn.textContent.trim();
        const box = document.querySelector(`.floor-svg-box[data-count="${floorNum}"]`);
        if (!box) return;
        clearActive();
        btn.classList.add('active-btn');
        box.classList.add('active-floor');
        showInfoBox(box);
    });
});




$('.floor-svg-box').on('click', function() {
    $('body').addClass('body-fixed');
    $('.select-layout').addClass('select-layout-opened');
    if (window.fullpage_api) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
    }
})


$('.pop-office').on('click', function() {
    $('body').addClass('body-fixed');
    $('.select-layout').addClass('select-layout-opened');
    if (window.fullpage_api) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
    }
})






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





const cards = document.querySelectorAll('.card');
const fill = document.querySelector('.scrollbar-fill');
let current = 0;
let autoPlay;

// === Функция обновления карточек ===
function updateClasses() {
    const total = cards.length;

    cards.forEach((card, i) => {
        const indexDiff = (i - current + total) % total;

        let top = '0';
        let opacity = 0;
        let zIndex = 0;

        if (indexDiff === 0) {
            top = '0';
            opacity = 1;
            zIndex = 3;
            card.classList.add('active');
        } else if (indexDiff === 1) {
            top = '-30px';
            opacity = 0.6;
            zIndex = 2;
            card.classList.remove('active');
        } else if (indexDiff === 2) {
            top = '-60px';
            opacity = 0.4;
            zIndex = 1;
            card.classList.remove('active');
        } else {
            card.classList.remove('active');
        }

        gsap.to(card, {
            top: top,
            opacity: opacity,
            zIndex: zIndex,
            duration: 0.6,
            ease: "power4.out"
        });
    });

    const progress = (current / (cards.length - 1)) * 100;
    fill.style.width = `${progress}%`;
}

// === Автопрокрутка ===
function startAutoPlay() {
    stopAutoPlay(); // чтобы не было двух интервалов
    autoPlay = setInterval(() => {
        current = (current + 1) % cards.length;
        updateClasses();
    }, 2500);
}

function stopAutoPlay() {
    if (autoPlay) clearInterval(autoPlay);
}

// === Наведение мышки: остановка / запуск ===
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        stopAutoPlay();
    });
    card.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
});

// === Управление мышкой (desktop) ===
let mouseStartY = null;
document.addEventListener('mousedown', (e) => {
    mouseStartY = e.clientY;
});
document.addEventListener('mouseup', (e) => {
    if (mouseStartY !== null) {
        const diff = e.clientY - mouseStartY;
        if (diff > 30) {
            current = (current - 1 + cards.length) % cards.length;
        } else if (diff < -30) {
            current = (current + 1) % cards.length;
        }
        updateClasses();
        mouseStartY = null;
    }
});

// === Управление касанием (mobile) ===
let touchStartY = null;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});
document.addEventListener('touchend', (e) => {
    if (touchStartY !== null) {
        const diff = e.changedTouches[0].clientY - touchStartY;
        if (diff > 30) {
            current = (current - 1 + cards.length) % cards.length;
        } else if (diff < -30) {
            current = (current + 1) % cards.length;
        }
        updateClasses();
        touchStartY = null;
    }
});

// === Инициализация ===
updateClasses();
startAutoPlay(); // 🟢 запускаем сразу!
