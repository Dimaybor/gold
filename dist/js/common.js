$(document).ready(function(){
  $("#header").removeClass("default");
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      $("#header").addClass("main-header--scroll").fadeIn("fast");
    } else {
      $("#header").removeClass("main-header--scroll").fadeIn("fast");
    };
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
        items = list.find('.accordeon__item'),
        content = item.find('.accordeon-inner'),
        otherContent = list.find('.accordeon-inner'),
        duration = 200;
      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
        otherContent.slideUp(duration);
        content.slideDown(duration);
      } else {
        content.slideUp(duration);
        item.removeClass('active');
      }
  });


});
