$(document).ready(function(){
    function puMenu() {
        var a = $('#status-btnmenu').val();
        if (a == 0) {
            $('.wapper-menu').addClass('show-menu-tablet');
            $('#status-btnmenu').val(1);
            $('.nav-menu').addClass('active-menu');
            $('#bg-menu-cl').css('display', 'block');
        } else {
            $('.wapper-menu').removeClass('show-menu-tablet');
            $('#status-btnmenu').val(0);
            $('.nav-menu').removeClass('active-menu');
            $('#bg-menu-cl').css('display', 'none');
        }
    }
	function BindProHover() {
        $('.ProductList3Col_item').unbind('mouseenter').unbind('mouseleave');
        $('.ProductList3Col_item').mouseenter(function () {
            $(this).addClass('dHover');
            $('.dHover .detail').fadeIn(200);
        }).mouseleave(function () {
            $('.dHover .detail').hide();
            $(this).removeClass('dHover');
        });
    }
    $('.content-detail-news .content-left .content .item-bh').hover(function () {
            $(this).addClass('active2');
        }, function () {
            $(this).removeClass('active2');
        });
    function toolbarHide() {
            var a = $('header .container').width() + 30;
            if (($(window).width() - a) > 160) {
                $('#wptoolbar').css('display', 'block');
            } else {
                $('#wptoolbar').css('display', 'none');
            }
        }
    $(window).resize(function () {
        $('.wapper-menu').removeClass('show-menu-tablet');
        $('#status-btnmenu').val(0);
        $('.nav-menu').removeClass('active-menu');
        resize();
    });
    $(function() {
        toolbarHide();
    });
    $(window).resize(function () {
        toolbarHide();
    });

    $('.anhtt .more1 .xem-anh').click(function(){
        $(this).slideUp();
        $(this).parent().find('.content').slideDown();
    });

    /*slide bai viet noi bat*/    
    $("#owl-tin-tuc").owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1199, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [992, 3], // betweem 900px and 601px
        itemsTablet: [991, 2], //2 items between 600 and 0
        itemsMobile: [768, 2],
        navigationText: ["", ""],
        pagination: false,
        navigation: true
    });
        /*
    function view_block(id) {
        var offset;
        if (id == 1) {
            offset = $('.feature').offset();
            active(offset.top);
        }
        if (id == 2) {
            offset = $('.digital').offset();
            active(offset.top);
        }
        if (id == 3) {
            offset = $('.related-news').offset();
            active(offset.top);
        }
        if (id == 4) {
            offset = $('.compare-produce').offset();
            active(offset.top);
        }
        if (id == 5) {
            offset = $('#tabs-comment').offset();
            active(offset.top);
        }
        if (id == 6) {
            offset = $('.hasptt').offset();
            active(offset.top);
        }
    }
    $('.toolbar').scrollToFixed();
    $(function () {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
            //active quick menu
            var vt = $(window).scrollTop() + 150;
            if ($('.feature').offset().top < vt) {
                $('#step11').addClass('active');
            } else {
                $('#step11').removeClass('active');
            }
            if ($('.digital').offset().top < vt) {
                $('#step12').addClass('active');
            } else {
                $('#step12').removeClass('active');
            }
            if ($('.related-news').offset().top < vt) {
                $('#step13').addClass('active');
            } else {
                $('#step13').removeClass('active');
            }
            if ($('.compare-produce').offset().top < vt) {
                $('#step14').addClass('active');
            } else {
                $('#step14').removeClass('active');
            }
            if ($('#tabs-comment').offset().top < vt) {
                $('#step15').addClass('active');
            } else {
                $('#step15').removeClass('active');
            }
            if ($('.wapper-pk-detail').offset().top < vt) {
                $('#step16').addClass('active');
            } else {
                $('#step16').removeClass('active');
            }
            if ($('.hasptt').offset().top < vt) {
                $('#step17').addClass('active');
            } else {
                $('#step17').removeClass('active');
            }
            if ($('footer').offset().top < vt + 250) {
                $('#toolbar').fadeOut(300);
            } else {
                $('#toolbar').fadeIn(300);
            }
        });
        $('.scrollToTop').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 300, 'linear');
            return false;
        });
    });    */
    /*add to cart popup*/
    $('.order').click(function(e){
        e.preventDefault();
        var parent = $(this).parent();
        var productID = parent.find('a.add_to_cart_button').attr('data-product_id');
        var productSku = parent.find('a.add_to_cart_button').attr('data-product_sku');
        var productQuantity = parent.find('a.add_to_cart_button').attr('data-quantity');
        $.ajax({
            url:ajax_object.ajax_url,
            type:'post',
            data:{
                action: 'get_product_by_id',
                product_id: productID
            },
            beforeSend:function(){

            },
            success: function(post){
                $('#popup_payment1').find('#Gen1spThanhToan').html(post);
                $('#popup_payment1').fadeIn(300);
            },
            error: function(errorThrown){
                console.log(errorThrown);
            }
        })
    });
    $('#popup_payment1').find('.fa-close').click(function(){
        $('#popup_payment1').fadeOut(300);
    });
    $('p.buttons a.checkout').click(function(e){
        e.preventDefault();
        $('#popup_giohang1').fadeOut(300);
        $('#popup_payment1').fadeIn(300);
    });
    BindProHover();
    $( document ).ajaxComplete(function() {
    BindProHover();
	});

});
$(document).ready(function () {
        $("#owl-slide-2").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: false,
            pagination: false,
            lazyLoad: true,
            navigationText: ["", ""]
        });
        $("#owl-slide-3").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: false,
            pagination: false,
            lazyLoad: true,
            navigationText: ["", ""]
        });
        $("#owl-news").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [991, 2],
            itemsTablet: [768, 2],
            itemsMobile: [479, 2],
            responsiveRefreshRate: 100,
            pagination: false,
            paginationSpeed: 400,
            autoPlay: false,
            lazyLoad: true,
            navigationText: ["", ""]
        });
        $('.h-item > .content').hover(function () {
            $(this).addClass('hHover');
            $('.hHover .h-detail').fadeIn(200);
        }, function () {
            $(this).removeClass('hHover');
            $('.h-detail').hide();
        });
    });
    function resize() {
        resizeItem($('.phone-wapper'), $('.phone-wapper > .h-item'));
        resizeItem($('.laptop-wapper'), $('.laptop-wapper > .h-item'));
        resizeItem($('.tablet-wapper'), $('.tablet-wapper > .h-item'));
        resizeItem($('.pk-wapper'), $('.pk-wapper > .h-item'));
        }
    $(window).init(function () {
        resize();
    });
    $(document).ready(function () {
        $('.new-btn-menu').click(function () {
            var w = $('header .container').width();
            if (w >= 1140) {
                var a = $('#status-btnmenu').val();
                if (a == 0) {
                    $('#home-slide').css('margin-left', '0');
                } else {
                    $('#home-slide').css('margin-left', '195px');
                }
            }
        });
        // Hot News random
        $("#slides_News").slidesjs({
            navigation: false,
            pagination: false,
            generatePagination: false,
            width: 500,
            height: 10,
            play: {
                active: false,
                auto: true,
                effect: "fade",
                interval: 5000,
                swap: true,
                restartDelay: 2500
            },
            effect: {
                fade: {
                    speed: 600
                }
            }
        });
    });
    $(document).ready(function () {
        // Lazy load
        $(".phone-wapper .h-item img, .laptop-wapper .h-item img, .tablet-wapper .h-item img, .pk-wapper .h-item img, .content-danh-muc .right .item .img img").lazyload({
            effect: "fadeIn"
        });

        $(".phone-wapper .h-item img, .laptop-wapper .h-item img, .tablet-wapper .h-item img, .pk-wapper .h-item img, .content-danh-muc .right .item .img img").each(function () {
            $(this).attr("data-original", $(this).attr("src"));
            
        });

        $('#cartCount11234').text('0').show();
    });
    $(document).ready(function () {

        var sync1 = $("#owl-slide");
        var sync2 = $("#sync2");

        sync1.owlCarousel({
            singleItem: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            autoPlay: true,
            navigation: true,
            navigationText: ["", ""],
            pagination: false,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
            lazyLoad: true
        });

        sync2.owlCarousel({
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [991, 4],
            itemsTablet: [768, 4],
            itemsMobile: [479, 4],
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function (el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });

        function syncPosition(el) {
            var current = this.currentItem;
            $("#sync2")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced");
            if ($("#sync2").data("owlCarousel") !== undefined) {
                center(current);
            }
        }

        $("#sync2").on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo", number);
        });

        function center(number) {
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for (var i in sync2visible) {
                if (num === sync2visible[i]) {
                    var found = true;
                }
            }

            if (found === false) {
                if (num > sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", num - sync2visible.length + 2);
                } else {
                    if (num - 1 === -1) {
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if (num === sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", sync2visible[1]);
            } else if (num === sync2visible[0]) {
                sync2.trigger("owl.goTo", num - 1);
            }

        }

    });