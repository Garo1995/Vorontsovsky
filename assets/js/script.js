
$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.header-menu').addClass('transition-menu');
            // $('body').addClass('body_fix');
        } else {
            $('.header-menu').addClass('menu-width');
            // $('body').removeClass('body_fix');
            $('.header-menu').removeClass('transition-menu');
        }
    });
    $('.header-menu a').on('click', function () {
        $('.header-menu').addClass('menu-width');
        // $('body').removeClass('body_fix');
        $('.header-menu').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});




$('.open-menu').on('click', function (e) {
    e.stopPropagation();
    $('.head-menu').toggleClass('menu-opened');

})
$(window).on('click', function (e) {
    let menuSort = $('.head-menu');
    if (e.target !== menuSort) {
        menuSort.removeClass('menu-opened');
    }
    let menuCLose = $('.open-menu');
    if (e.target !== menuCLose) {
        menuCLose.removeClass('close-menu');
    }

});























$('.open_modal').on('click', function (e) {
    e.preventDefault();
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);

    modal.removeClass('out');
    $('body').css({ overflow: 'hidden' });
    modal.fadeIn();

});

$('.close').on('click', function () {
    let prt = $(this).closest('.modal');
    prt.addClass('out');

    setTimeout(function () {
        prt.fadeOut(200, function () {
            // После fadeOut() — включаем scroll обратно
            const anyOpen = $('.modal:visible').length > 0;


            $('body').css({ overflow: 'visible' }); // ❗️без пробела
        });
    }, 100);
});

$(window).on('click', function (event) {
    $('.modal').each(function () {
        const modal = $(this);
        const content = modal.find('.modal-content');

        if (event.target === this || event.target === content[0]) {
            modal.addClass('out');
            setTimeout(function () {
                modal.fadeOut(200, function () {
                    const anyOpen = $('.modal:visible').length > 0;


                    $('body').css({ overflow: 'visible' });
                });
            }, 100);
        }
    });
});







