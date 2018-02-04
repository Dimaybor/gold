
$(document).ready(function(){
  $("#header").removeClass("default");
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      $("#header").addClass("main-header--scroll").fadeIn("fast");
    } else {
      $("#header").removeClass("main-header--scroll").fadeIn("fast");
    };
  });


// -------- Корзина
  $(".user-bag__container").on('click', function() {
    $('.open-bag').toggleClass('open-bag--active');
  });
  $(".open-bag__close").on('click', function() {
    $('.open-bag').removeClass('open-bag--active');
  });

// -------- Фільтр

  $("#brands").on('click', function() {
    if ($('#sizes-items').hasClass('selection-items--active')) {
      $('#sizes-items').removeClass('selection-items--active');
      $('#sizes').removeClass('selection-list--active');
      };
    $("#brands-items").toggleClass('selection-items--active');
    $(this).toggleClass('selection-list--active');
  });
  $("#sizes").on('click', function() {
    if ($('#brands-items').hasClass('selection-items--active')) {
      $('#brands-items').removeClass('selection-items--active');
      $('#brands').removeClass('selection-list--active');
      };
    $("#sizes-items").toggleClass('selection-items--active');
    $(this).toggleClass('selection-list--active');
  });


// Відкриття попапа нажаттям на button
  $('#open-modal').click(function() {
    $('.overlay').fadeIn(100);
    $("body").addClass("body-inactive");
  });
// Закриття попапа нажаттям на хрестик
  $('.close').click(function() {
    $('.overlay').fadeOut(100);
    $("body").removeClass("body-inactive");
  });  
// Закриття попапа нажаттям на "сіру зону"
  $(document).mouseup(function(e){
    var pop = $('.popup');
    if(e.target!=pop[0]&&pop.has(e.target).length === 0) {
      $('.overlay').fadeOut(100);
      $("body").removeClass("body-inactive");
    };
  });
// Закриття попапа нажаттям на "Esc"
  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
      $('.overlay').fadeOut(100);
      $("body").removeClass("body-inactive");
  });

  // Акордеон
  $('.accordeon-trigger').on('click', function(e){
    e.preventDefault();
    var $this = $(this),
        item = $this.closest('.accordeon__item'),
        list = $this.closest('.accordeon__list'),
        otherArrow = list.find('.accordeon-arrow'),
        itemArrow = $this.find('.accordeon-arrow'),
        items = list.find('.accordeon__item'),
        content = item.find('.accordeon-inner'),
        otherContent = list.find('.accordeon-inner'),
        duration = 200;
      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
        otherContent.slideUp(duration);
        content.slideDown(duration);
        otherArrow.removeClass('accordeon-arrow--rotate');
        itemArrow.addClass('accordeon-arrow--rotate');
      } else {
        content.slideUp(duration);
        item.removeClass('active');
        itemArrow.removeClass('accordeon-arrow--rotate');
      };
  });



//----------------Slider-some-product

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider',
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: '0px',
    focusOnSelect: true,
    vertical: true,
  });
  $('.slider__item').zoom();

});
