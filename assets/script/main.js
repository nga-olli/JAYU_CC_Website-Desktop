(function($){
    "use strict";


    /* search */
    if ($('.search_box').length){
        $('.search_box .icon-search').on('click',function () {
            $(this).closest('.search_box').addClass('show');
            console.log('text');
        });
    }

    if ($('.calender-bottom').length){
        $('.calender-bottom .action').on('click',function () {
            $(this).closest('.calender-bottom').toggleClass('show');
        });
    }
    /* end search */

    function setCookie(name, value) {
        let date = new Date();
        date.setTime(date.getTime() + 5*60*1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    }

    function getCookie(name) {
        let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value? value[2] : null;
    }
    function loadTab(){
        $('section.tab').hide();
        $('nav.tab-nav ul li').removeClass('active');
        let i;
        let parse_url = location.href.split('#');
        if(parse_url.length > 1 && parse_url[1] >= 1 && parse_url[1] <= 4){
            i = parse_url[1];
        }else{
            i = getCookie('tab');
        }
        if(i){
            $('section.tab'+i).show();
            $('.li'+i).addClass('active');
        }else{
            $('section.tab:first').show();
            $('nav.tab-nav ul li:first').addClass('active');
        }
        console.log(i);
    }
    $(window).on('hashchange', function(e){
        loadTab();
    });
    $(document).ready(function() {
        loadTab();
        $('nav.tab-nav ul li').click(function(){
            location.href = "#"+$(this).attr('data-id');
            //$(window).scrollTo.p(0);
            $('nav.tab-nav ul li').removeClass('active');
            $(this).addClass('active');

            var i = $(this).index();
            setCookie('tab', i+1);
            $('section.tab').hide();
            $('.tab'+(i+1)).show();
        });
        $('.list_tab').click(function(){
            if ($(this).hasClass('on')) {
                $('.list_tab').removeClass('on');
                $('.list_tab').closest('tr').removeClass('on');
                $(this).next('.hidden_slide').slideUp();
                $(this).children('.right').css({'transform':'rotate(0deg)'});
            } else {
                $('.list_tab').removeClass('on');
                $('.list_tab').closest('tr').removeClass('on');

                $('.list_tab').next('.hidden_slide').slideUp();
                $('.list_tab').children('.right').css({'transform':'rotate(0deg)'});
                $(this).addClass('on');
                $(this).closest('tr').addClass('on');
                $(this).next('.hidden_slide').slideDown();
                $(this).children('.right').css({'transform':'rotate(180deg)'});
            }
        }); $('.select-brand').click(function(){
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.our-brands').slideUp();
            } else {
                $(this).addClass('active');
                $('.our-brands').slideDown();
            }
        });
    });
    var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });

    //$('#popup_terms').modal('show'); 
    $('#popup_terms').modal({ show: true });

    //Popup galary
    $('.popup-gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return '';
                }
            }
        });
    });
    $(".btn-click").click(function () {
        $(this).toggleClass('active');
        console.log('2545');
        $(".note-side-right").animate({
            width: "toggle"
        });
    });


})(jQuery);