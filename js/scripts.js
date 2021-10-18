$(function(){
    $('.main_li_a').hover(function(){
        $('.main_ul li .down_menu').removeClass('show_down_menu');
        $(this).next('.down_menu').addClass('show_down_menu')
    });
    $('.header_body').hover(function(){
        $('.main_ul li .down_menu').removeClass('show_down_menu');
    });

    $('.mygumtree').on('click',function(){
        $('.down').toggleClass('show_down');
    });

    //start burger
    $('.bars i').on('click',function(){
        $('.burgur').addClass('show_down')
    });
    $('.close_menu i').on('click',function(){
        $('.burgur').removeClass('show_down')
    })
    //end burger
     

/**************************** start search part in the header  ******/
    //show hide dropdown menue 
    $('.main_items .showing_message').on('click',function(){
        $('.main_down').toggleClass('show_down');
        $('.select ul').removeClass('show_down');
        $(this).toggleClass('back_green');
        $(this).children('i').toggleClass('for_rotate');
        $(this).children('i').toggleClass('wight_color');
    });

    //to print main titile
    $('.main_down .menus .menu .header .title').on('click',function(){
        $('.showing_message i').toggleClass('for_rotate');
        $('.main_items .showing_message p').text($(this).children('a').text());
        $('.main_down').removeClass('show_down');
    })

    //to print inside a 
    $('.main_down .menus .menu .inside_ul a').on('click',function(){
        $('.showing_message i').toggleClass('for_rotate');
        $('.menus .menu ul').removeClass('show_down');//شيل الكل الاول
        $('.main_items .showing_message p').text($(this).text())
        $('.down').removeClass('show_down');
        $('.menus .menu .header .icons .up').fadeIn(.1);
        $('.main_down').removeClass('show_down');
    });


    //when click on down button
    $('.menus .menu .header .icons .down').on('click',function(){
        $('.menus .menu ul').removeClass('show_down');//شيل الكل الاول
            $(this).parent('.icons').parent('.header').next('ul').addClass('show_down');
            $(this).fadeOut(.1).removeClass('show_down');
            $(this).siblings('.up').fadeIn(.1);  
            $(this).parent('.icons').parent('.header').parent('.menu').siblings('.menu').children('.header').children('.icons').children('.up').fadeOut(.1);
            $(this).parent('.icons').parent('.header').parent('.menu').siblings('.menu').children('.header').children('.icons').children('.down').fadeIn(.1)
    });

    //when click on up button
    $('.menus .menu .header .icons .up').on('click',function(){
        $('.menus .menu ul').removeClass('show_down')
        $(this).parent('.icons').parent('.header').next('ul').removeClass('show_down');
            $(this).fadeOut(.1).removeClass('show_down');
            $(this).siblings('.down').fadeIn(.1);
    });

    //trick
    $('.menus .menu ul li').on('click',function(){
        $('.menus .menu .header .icons .down').addClass('show_down').fadeIn(.2);
        $('.menus .menu .header .icons .up').removeClass('show_down').fadeOut(.2);
    });

    //for select
    $('.select .sele_header').on('click',function(){
        $(this).parent('.select').toggleClass('green_border');
        $('.main_down').removeClass('show_down');
        $('.select ul').toggleClass('show_down');
        $(this).children('i').toggleClass('for_select_rotate');
    });

    $('.select .sele_header').on('move',function(){
        $(this).parent('.select').removeClass('green_border');
    })

    //for select print value
    $('.select ul li').on('click',function(){
        $('.select .sele_header p').text($(this).text());
        $('.select ul').removeClass('show_down');
        $('.select').removeClass('green_border');
        $('.select .sele_header i').removeClass('for_select_rotate');
    });

    //for add class green and remove show_down
    $('.search_one input').on('click',function(){
        $(this).parent('.search_one').toggleClass('green_border');
        $('.main_down').removeClass('show_down');
        $('.select ul').removeClass('show_down');
    });
    $('.search_one input').on('blur',function(){
        $(this).parent('.search_one').removeClass('green_border');
    });
    $('.search_two input').on('click',function(){
        $(this).parent('.search_two').toggleClass('green_border');
        $('.main_down').removeClass('show_down');
        $('.select ul').removeClass('show_down');
    });
    $('.search_two input').on('blur',function(){
        $(this).parent('.search_two').removeClass('green_border');
    });

    //to remove class show_down when clicked in some areas 
    $('.items, .wrapper, .hero_title, .icon_search').on('click',function(){
        $('.main_down').removeClass('show_down');
        $('.select ul').removeClass('show_down');
    });
/**************************** end search part in the header  ******/

/**************  start items ************** */
    //start menu
    $('.items .menu ul li a').on('click',function(){
        $(this).addClass('active_item_link').parent('li').siblings().children('a').removeClass('active_item_link');
    $('.items .content > div').css('display','none')
    $($(this).data('items')).fadeIn(500)
    })
    //end menu

    //start heart
    $('.description .heart i').on('click',function(){
        $(this).addClass('show_heart').siblings().removeClass('show_heart')
    });
    //end heart
/**************  end items ************** */


/****** start slider */
$('.carousel').carousel({
    interval: 200000
  })
/***** end slider */
})