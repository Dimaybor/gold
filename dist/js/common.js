$(document).ready(function(){
  $("#header").removeClass("default");
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      $("#header").addClass("main-header--scroll").fadeIn("fast");
    } else {
      $("#header").removeClass("main-header--scroll").fadeIn("fast");
    };
  });


// Відкриття попапа нажаттям на .modal-open
  $('.feedback__btn').click(function() {
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
    }
  });
});
