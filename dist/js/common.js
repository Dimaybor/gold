
$(document).ready(function(){
  link         = $('.menu-open');
  openNav     = $('.open-nav');
  nav_link     = $('.open-nav a');
  link.click(function() {
    link.toggleClass('menu-open--active');
    openNav.toggleClass('open-nav--active');
    $("body").addClass("body-inactive");
  });
  nav_link.click(function() {
    link.toggleClass('menu-open--active');
    openNav.toggleClass('open-nav--active');
    $("body").removeClass("body-inactive");
  });
  $('#closeMenu').on('click', function() {
    link.removeClass('menu-open--active');
    openNav.removeClass('open-nav--active');
    $("body").removeClass("body-inactive");
  });


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

  $('.filter-main').on('click', function() {
    $('.filter-products').fadeIn(0);
    $('body').addClass('body-inactive');
  });

  $('.filter-products-close').on('click', function() {
    $('.filter-products').fadeOut(0);
    $('body').removeClass('body-inactive');
  });

// Відкриття попапа нажаттям на button
  $('#open-modal').click(function() {
    $('.overlay').fadeIn(100);
    $('body').addClass('body-inactive');
  });
// Закриття попапа нажаттям на хрестик
  $('.close-popup').click(function() {
    $('.overlay').fadeOut(100);
    $('body').removeClass('body-inactive');
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
  // закриття акордеону при нажатті на inside-стрілку
  $('.accordeon-arrow--inside').on('click', function(){
    var $this = $(this),
        item = $this.closest('.accordeon__item'),
        content = item.find('.accordeon-inner'),
        duration = 200;
      item.removeClass('active');
      content.slideUp(duration);
  });


  //----------------Slider-some-product

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true
        }
      }
    ]
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
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });

  $('.slider__item').zoom();

  function checkWidth() {
    if ($(window).width() > 768) {
        $('.recomendations-slider').slick('unslick'),
        $('.slider__item').trigger('zoom.destroy');
    } else {
        $('.recomendations-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          arrows: false,
          dots: true
        });
    }
  };
 
  $(function(){
      checkWidth();
      $(window).on('resize', function(){checkWidth()});
  });

  //----------------- Forms

  $("#btnStep-1").on('click', function(e) {
    e.preventDefault();
    $('#step-1').addClass('shipping-step--hide');
    $('#step-2').removeClass('shipping-step--hide');
    $('#infoStep-1').addClass('shipping-informations__step--active');
  });
  $("#btnStep-2").on('click', function(e) {
    e.preventDefault();
    $('#step-2').addClass('shipping-step--hide');
    $('#step-3').removeClass('shipping-step--hide');
    $('#infoStep-2').addClass('shipping-informations__step--active');
  });
  $("#edit1").on('click', function(e) {
    e.preventDefault();
    $('#step-1').removeClass('shipping-step--hide');
    $('#step-2').addClass('shipping-step--hide');
    $('#step-3').addClass('shipping-step--hide');
    $('#infoStep-1').removeClass('shipping-informations__step--active');
    $('#infoStep-2').removeClass('shipping-informations__step--active');
  });
    $("#edit2").on('click', function(e) {
    e.preventDefault();
    $('#step-2').removeClass('shipping-step--hide');
    $('#step-1').addClass('shipping-step--hide');
    $('#step-3').addClass('shipping-step--hide');
    $('#infoStep-2').removeClass('shipping-informations__step--active');
  });

  //------------------ Cards

  $(".payment").not(":first").hide();
  $(".buyer-info__payment").click(function() {
    $(".buyer-info__payment").removeClass("payment-active");
    $(".buyer-info__payment").eq($(this).index()).addClass("payment-active");
    $(".payment").hide().eq($(this).index()).fadeIn(100);
  }).eq(0).addClass("payment-active");

  //----------------form show

  //$('.auxiliary-link__show').click(function(e) {
  //  e.preventDefault();
  //  $(".security-code").toggleClass('security-code--active');
  //});

  //------------------ securiti code

  $('.security-toggle').click(function() {
    $(".security-code").toggleClass('security-code--active');
  });

  //------------------ selectize
  
  $(function() {
    $('.main-select').selectize();
  });

});