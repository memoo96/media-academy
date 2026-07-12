var width = $(window).width();

$(document).ready(function () {

      // Slider 
      $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });



    $('.responsiveCustomer').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });


    $('.dropdown-menu a.dropdown-toggle').on('click', function() {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');
      
      
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function() {
          $('.dropdown-submenu .show').removeClass('show');
        });
      
      
        return false;
    });




    // $(".DesktopSearch").click(function() {
    //     // $(".search-box").slideToggle();
    //     $(".search-box").animate({width: 'toggle'});
    // });

    $('[data-toggle="tooltip"]').tooltip();   

   
    // Scroll top
    var scrollButton = $(".scroll_top");
    $(window).scroll(function () {
        $(this).scrollTop() > 500 ? scrollButton.show() : scrollButton.hide();
    });

    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });



    /* icon of navbar Links slidToggle When Click On It */
    $('header img.icon').click(function () {
        $('header nav .NavbarUL').slideDown();
        $(this).css('display', 'none');
        $('header img.icon_close').css('display', 'block');
    });
    $('header img.icon_close').click(function () {
        $('header nav .NavbarUL').slideUp();
        $(this).css('display', 'none');
        $('header img.icon').css('display', 'block');
    });

    $(window).resize(function(){
        if ($(this).width() != width) {
            if($(this).width() > 991){
                $('header nav .NavbarUL').css('display','block');
                $('header img.icon_close').css('display', 'none');
                $('header img.icon').css('display', 'none');
            }
            else {
                $('header nav .NavbarUL').css('display','none');
                $('header img.icon_close').css('display', 'none');
                $('header img.icon').css('display', 'block');
            }
            width = $(window).width();
        }
    });

    $(document).on("click", function (event) {
        if ($(this).width() <= 991) {
            var $trigger = $("header");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                $("header nav .NavbarUL").slideUp();
                $('header img.icon_close').css('display', 'none');
                $('header img.icon').css('display', 'block');
            }
        }
    });

    // $(document).on("click", function (event) {
    //     var $trigger = $(".DesktopSearch");
    //     var $triggerInput = $(".search-box .search_input");
    //     if ($trigger[0] !== event.target && !$trigger.has(event.target).length && $triggerInput[0] !== event.target) {
    //         if($(".search-box").show()) {
    //             $(".search-box").hide();
    //         }
    //     }
    // });

    $(".Course .image img,.card_news .slider_img,#OurCustomers .Content .Brand .brandImg img,#Partners .Content .carousel-inner img,#Partners .Content .item h4 img,#Download img,#Goals img,#Message img,#Mission img,#News_Details .Content .News_img img,.trainer .image img,#News_Details .News_img img,#Trainer_Details .News_img img,#Verified_Details .News_img img,#Course_Details .productDetails .image img").on("error", function(){
        $(this).attr('src', 'images/NoImage.png');
    });


    $('#ViewVedio').on('hide.bs.modal', function (e) {
        var ModalBody = $("#ViewVedio").find('.PopUpVedio')[0];
        ModalBody.pause();
    })


});



function DeleteItem() {
    var deletecard = document.getElementsByClassName("deletecard");
    for (var i = 0; i < deletecard.length; i++) {
        deletecard[i].addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('table tr.Item').remove();
        });
    }
}
DeleteItem();



function ShowVideo(url,title) {
    var ViewVedioModal = $("#ViewVedio");
    var ModalBody = ViewVedioModal.find('.PopUpVedio');
    var ModalTitle = ViewVedioModal.find('.modal-title');
    ModalBody.attr("src", url);
    ModalTitle.html(title);
    ViewVedioModal.modal("show");
}

function CloseVideo() {
    var ViewVedioModal = $("#ViewVedio");
    var ModalBody = ViewVedioModal.find('.PopUpVedio')[0];
    ModalBody.pause();
    ViewVedioModal.modal("hide");

}