$('.menu__btn').click(function(){
  $('.menu__list').toggleClass('menu__list--active');
  $('.menu__btn').toggleClass('menu__btn--active');
});

$(".menu a").on("click", function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body, html').animate({scrollTop: top}, 1500);
  $('.menu__list').removeClass('menu__list--active');
  $('.menu__btn').removeClass('menu__btn--active');
});

let header = document.querySelector(".header")
window.onscroll = function()
{
  if(window.scrollY > 100){
    header.style.background = "#063740"
  }
  else{
    header.style.background = "rgba(0, 0, 0, 0)" 
  }
}

$('.blog__slider').slick({
  arrows: false,
  dots: true
});

var largeImg = document.getElementsByClassName('large-img');
const screenWidth = window.screen.width;
if(screenWidth < 641){
  for (var element of largeImg) {
    element.classList.remove('mix');
}
}

var mixer = mixitup('.gallery__box');
