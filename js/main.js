$(document).ready(function () {
    t396_init('67387498');
    t396_init('67378117');
    t657_init('67653335');
    t396_init('67770113');
    t396_init('68093616');
    t585_init('68064250');
    t396_init('67491311');
    t396_init('68193808');
    t354_checkPosition('67655771');

    $(window).bind('scroll', t_throttle(function () {
        t354_checkPosition('67655771')
    }, 200));


    setTimeout(function () {
        t702_initPopup('67686963');
    }, 500);

    setTimeout(function () {
        t_animateInputs('67686963');
    }, 500);

    setTimeout(function () {
        t702_initPopup('68203331');
    }, 500);

    setTimeout(function () {
        t_animateInputs('67408150');
    }, 500);

    try {
        setTimeout(function () {
            t_datepicker_init('67686963', '1495810354468');
        }, 500);
    } catch (err) {
    }


    function t_animateInputs(recid) {
        var el = $('#rec' + recid);
        var inputs = el.find('.t-input:not(.t-inputquantity)');
        el.find('.t-input-group:not(.t-input-group_da):not(.t-input-group_uw):not(.t-input-group_ri):not(.t-input-group_rg) .t-input-block, .t-datepicker__wrapper').css({
            'position': 'relative',
            'overflow': 'hidden'
        });
        inputs.each(function () {
            $(this).addClass('t-input_pvis');
            if (typeof $(this).attr('placeholder') != 'undefined' && $(this).attr('placeholder') != '') {
                $(this).after('<div class="t-input__vis-ph">' + $(this).attr('placeholder') + '</div>');
            }
            $(this).attr('placeholder', '');
        });
        inputs.on("blur", function () {
            if ($(this).val() != '') {
                $(this).addClass('t-input_has-content');
            } else {
                $(this).removeClass('t-input_has-content');
            }
        });
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            el.find('textarea:not(.t-input_bbonly)').css('padding-left', '17px');
            el.find('textarea.t-input_bbonly').css('text-indent', '-3px');
        }
    }


    // плавный скрол телефон десктоп
    $('.tn-elem__673781171537443163225').click(function () {
        $('html, body').animate({scrollTop: $('#rec67387498').position().top}, 1000);
    });

    document.querySelector('.tn-elem__673781171537443163225').addEventListener('touchstart', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $('#rec67770113').offset().top}, 1000);
    });

});