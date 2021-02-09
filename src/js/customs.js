$('.burger-menu__picture').on('click',function (){
    $(this).toggleClass('menu__open');

    if ($('.burger-menu__picture').hasClass('menu__open')){
        $('body').css({'overflow-y':'hidden'})
        $('.nav').show(700)
        $('.menu-fixed').css({'z-index': '3','background-color': 'transparent','box-shadow':'none'})
        $('.logo__svg').show(700).addClass('--mobile-logo')
        $('.logo__svg-scroll').hide(700)

    }else {
        $('body').css({'overflow-y':''})
        $('.nav').hide(500)
        $('.menu-fixed').css({'z-index': '','background-color':'','box-shadow':''})
        $('.logo__svg').hide(700).removeClass('--mobile-logo')
        $('.logo__svg-scroll').show(700)
    }
})
$(document).ready(function (){
    if ($(window).width() >= "768"){
        $(".nav__mobile-li").removeClass("mobile-li")
    }
})
$('.mobile-li,.--close-li').on('click', function (){
    $('.nav').hide(700)
    $('.burger-menu__picture').removeClass('menu__open')
    $('body').css({'overflow-y':''})
    $('.logo__svg').hide(700).removeClass('--mobile-logo')
    $('.logo__svg-scroll').show(700)
    $('.menu-fixed').css({'z-index': '','background-color':'','box-shadow':''})
})
function onScroll(){
    if (window.pageYOffset > 9 ){
        $('.burger-menu__text').hide(500);
        $('header').addClass('menu-fixed');
        $('.burger-menu').css({'margin-top':'28px'})
    }else{
        $('header').removeClass('menu-fixed');
        $('.burger-menu__text').show(500);
        $('.burger-menu').css({'margin-top':''})

    }
}
window.addEventListener('scroll', onScroll)

$('.slider__items').slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
    ]
});
$('.form-name').keyup(function (){
    if (this.value.length >= 2){
        $(this).addClass('--valid')
        $(this).removeClass('--invalid')
    }else {
        $(this).addClass('--invalid')
        $(this).removeClass('--valid')
        return false

    }
})
$('.form-email').keyup(function (){
    if (this.value.length >= 5){
        $(this).addClass('--valid')
        $(this).removeClass('--invalid')
    }else {
        $(this).addClass('--invalid')
        $(this).removeClass('--valid')
        return false
    }
})
$('.form-number').keyup(function (){
    this.value = this.value.replace(/[^\d.]/g, '');
    if (this.value.length >= 4){
        $(this).addClass('--valid')
        $(this).removeClass('--invalid')
    }else {
        $(this).addClass('--invalid')
        $(this).removeClass('--valid')
        return false
    }
})
$('.contacts-form__file').on('change', function (){
    let file = $('#contacts-form__file')[0].files[0]
    if (file){
        $('.contacts-form__text').html(file.name).css({'text-transform':'lowercase'})
    }else{
        $('.contacts-form__text').html('Attach CV').css({'text-transform':''})
    }
})