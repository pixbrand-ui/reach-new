$(document).ready(function () {

    // Filter box show hide
    $('.filter_toggle').click(function () {
        $(this).toggleClass('active');
        $(this).parent('.cmn_input_box').addClass('active');
        $(this).parent('.cmn_input_box').parent('.search_box').find('.filter_list').show();
    })


    // Filter box close on outside click
    $(document).on("click", function (event) {
        if (!$(event.target).closest(".filter_toggle").length && $(event.target).closest('.filter_list').length == 0) {
            $('.filter_toggle').removeClass('active');
            $('.filter_toggle').parent('.cmn_input_box').removeClass('active');
            $('.filter_toggle').parent('.cmn_input_box').parent('.search_box').find('.filter_list').hide();
        }
    });

    // Filter list on input changes
    $(document).ready(function () {
        $(".filter_input").on("keyup", function () {
            var value = $(this).val().toLowerCase();

            $(this).parent().parent('.search_box').find('.filter_list li').filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });

        });
    });

    // Make filter input clear on click
    $(".cancel_btn").on("click", function () {
        $('.filter_input').val('');
    });

    //Input value change on selecting item from list
    $('.filter_list a').click(function(){
        $(this).parent().parent().parent('.search_box').find('.cmn_input_box input').val(this.innerText);
        $(this).parent().parent().parent('.search_box').find('.cmn_input_box input').focus();
    })

    $('.open_filter_list').click(function(){
        $('.filter_list').addClass('show');
    })




    // menu drawer for mobile size
    $('.toggle_drawer').click(function () {
        $('.header_link').toggleClass('show');
    })

    // menu drawer for mobile size close on outside click
    $(document).mouseup(function (event) {
        var target = $(event.target);
        if (target.closest(".header_link").length == 0 && target.closest(".toggle_drawer").length == 0 && $('.header_link').hasClass('show')) {
            $('.header_link').removeClass("show")
        }
    });

    // index page carousel
    var acc_sl = $('.professional_expert_slide');
    acc_sl.owlCarousel({
        items: 5,
        slideBy: 5,
        loop: false,
        margin: 15,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ['<div class="left_nav cmn_nav"><img src="./assets/img/left-nav.png" alt=""></div>' , '<div class="right_nav cmn_nav"><img src="./assets/img/right-nav.png" alt=""></div>'],
        dots: false,
        responsive: {
            // breakpoint from 0 up
            0 : {
                items: 1,
                slideBy: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 3,
                slideBy: 3
            },
            // breakpoint from 1024 up
            1024: {
                items: 4,
                slideBy: 4
            },
            1300: {
                items: 5,
                slideBy: 5
            }
        }
    });

    // testimonials video trigger
    $(".video_controller .play_btn").click(function (e) {
        $(this).parents(".video_wrapper").find("video").trigger('play');
        $(this).parents('.video_controller').addClass("show_pause_btn");
    });

    $(".video_controller .pause_btn").click(function (e) {
        $(this).parents(".video_wrapper").find("video").trigger('pause');
        $(this).parents('.video_controller').removeClass("show_pause_btn");
    });


    var test_slide = $('.testi_slides_wrapper');
    test_slide.owlCarousel({
        items: 1,
        loop: false,
        margin: 15,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 3000,
        autoplayHoverPause: true,
        navText: ['<div class="left_nav cmn_nav"><img src="./assets/img/left-nav.png" alt=""></div>' , '<div class="right_nav cmn_nav"><img src="./assets/img/right-nav.png" alt=""></div>'],
        dots: false,
        responsive: {

            // breakpoint from 0 up
            0 : {
                items: 1,
                slideBy: 1,
                navText:false
            },
            // breakpoint from 768 up
            768 : {
                items: 1,
                slideBy: 1,
                navText: ['<div class="left_nav cmn_nav"><img src="./assets/img/left-nav.png" alt=""></div>' , '<div class="right_nav cmn_nav"><img src="./assets/img/right-nav.png" alt=""></div>'],
            },
            // breakpoint from 1024 up
            1024: {
                items: 1,
                slideBy: 1,
                navText: ['<div class="left_nav cmn_nav"><img src="./assets/img/left-nav.png" alt=""></div>' , '<div class="right_nav cmn_nav"><img src="./assets/img/right-nav.png" alt=""></div>'],
            }
        }
    });


    // Most Browse topics

    var most_browse = $('.most_browse_topic_slide');
    most_browse.owlCarousel({
        items: 4,
        slideBy: 4,
        loop: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        navText: ['<div class="left_nav cmn_nav"><img src="./assets/img/left-nav.png" alt=""></div>' , '<div class="right_nav cmn_nav"><img src="./assets/img/right-nav.png" alt=""></div>'],
        dots: false,
        responsive: {

            // breakpoint from 0 up
            0 : {
                items: 1,
                slideBy: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 3,
                slideBy: 3
            },
            // breakpoint from 1024 up
            1024: {
                items: 4,
                slideBy: 4
            }
        }
    });

    var charles_blog = $('.charles_blog_slide');
    charles_blog.owlCarousel({
        items: 3,
        slideBy: 3,
        loop: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        navText: ['<div class="left_nav cmn_nav"><img src="./assets/img/left-nav.png" alt=""></div>' , '<div class="right_nav cmn_nav"><img src="./assets/img/right-nav.png" alt=""></div>'],
        dots: false,
        responsive: {
            // breakpoint from 0 up
            0 : {
                items: 1,
                slideBy: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
                slideBy: 2
            },
            // breakpoint from 1024 up
            1024: {
                items: 3,
                slideBy: 3
            }
        }
    });

    
    // AOS.init();

    $('.cmn_tab_btn').click(function(){
        $('.cmn_tab_btn').removeClass('active');
        $(this).addClass('active');

        var tabId = $(this).data('id');

        $('.cmn_tabs').removeClass('show')
        $('#' + tabId).addClass('show');
    })

    $('.toggle_password .lock_icon').click(function(){
        $(this).hide();
        $(this).parent('.toggle_password').find('.lock_show_icon').show();
        $(this).parent('.toggle_password').parent('.input_wrapper').find('input').attr('type' , 'text');
        $(this).parent('.toggle_password').parent('.input_wrapper').find('input').focus();
    })

    $('.toggle_password .lock_show_icon').click(function(){
        $(this).hide();
        $(this).parent('.toggle_password').find('.lock_icon ').show();
        $(this).parent('.toggle_password').parent('.input_wrapper').find('input').attr('type' , 'password');
        $(this).parent('.toggle_password').parent('.input_wrapper').find('input').focus();
    })

    $('.user_mem_tab a').click(function(){
        $('.user_mem_tab a').removeClass('active');
        $(this).addClass('active');

        var tabId = $(this).data('id');

        $('.user_mem_list').removeClass('show')
        $('#' + tabId).addClass('show');
    })

    $('.call_request_btn').click(function(){
        $(this).parent().parent('.review_card').find('.user_call_request').slideToggle();
    })
    $('.user_call_request .close_msg').click(function(){
        $(this).parent().slideUp();
    })

    // Deactivate step radio
    $('.deactivate_radio_wrapper label').click(function(){
        $('.deactivate_radio_wrapper').removeClass('active');
        $(this).parent('.deactivate_radio_wrapper').addClass('active');
    })

    // custom checkbox
    $('.deactivate_check_wrapper label').click(function(){
        $(this).parent('.deactivate_check_wrapper').toggleClass('active');
    })

    // Interested topics select
    $('.intereted_topic_card').click(function(){
        $(this).toggleClass('active');
    })

    // Connect disconnect social media btn
    $('.toggle_connect_btn').click(function(){
        if($(this).hasClass('connect_btn')){
            $(this).text('Disconnect');
            $(this).removeClass('connect_btn');
            $(this).addClass('disconnect_btn cmn_outline_grey_btn clr_grey');
        }else{
            $(this).text('Connect');
            $(this).addClass('connect_btn theme_outline_btn');
            $(this).removeClass('disconnect_btn cmn_outline_grey_btn clr_grey');
        }
    });

    // Chat profile show hide

    $('.hide_profile_btn').click(function(){
        $('.user_information').slideUp()
        $('.chat_view').addClass('expand');
    })

    $('.view_profile_btn').click(function(){
        $('.user_information').slideDown()
        $('.chat_view').removeClass('expand');
        $('.chat_box').addClass('show_side_panel');
    })

    $('.user_information .closer').click(function(){
        $('.chat_view').addClass('expand');
        $('.chat_box').removeClass('show_side_panel');
    })
    
    $('.contct_chat_ a').click(function(){
        $('.chat_list').addClass('hide');
        $('.chat_view').addClass('show');
    })
    $('.toggle_list_view').click(function(){
        $('.chat_list').removeClass('hide');
        $('.chat_view').removeClass('show');
    })

    // Video call section
    $('.toggle_chatbox').click(function(){
        $('.video_sec').toggleClass('expand');
        $('.video_chat_sec').toggleClass('show');
    })

    

    // Filter chat list on input change 
    $(".chat_list_filter").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        $('.contct_chat_ .contact_info h6').filter(function () {
            // $(this).parent('div').parent('div').parent('.contact_info').parent().addClass('hy');
            $(this).parent('div').parent('div').parent('.contact_info').parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

    });
    
    // hash navigation for policy page
    $('a[href^="#"]').on('click', function(e) {
        var hash  = this.hash,
            $hash = $(hash),
            addHash = function() {
                window.location.hash = hash;
            };
    
        if ( hash !== '#header_sec' ) {
            $('html,body').animate({ 'scrollTop': $hash.offset().top - 100 }, 50, addHash);
        } else {
            $('html,body').animate({ 'scrollTop': $hash.offset().top}, 50, addHash);
        }

    });
    


});

// header div hide on scroll

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.header_box_2').addClass('hide');
      $('.header_sec').addClass('bg_white');
      $('.header_sec .header_logo img').attr('src' , './assets/img/footer_logo.png');

    } else {
      $('.header_box_2').removeClass('hide');
      $('.header_sec').removeClass('bg_white');
      $('.header_sec .header_logo img').attr('src' , './assets/img/logo.png');
    }
});

