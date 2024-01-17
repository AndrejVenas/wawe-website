$('.menu__btn').click(function(){
  $('.menu__list').toggleClass('menu__list--active');
});
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
