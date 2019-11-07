$(document).ready(function() {

  "use strict";

  // -------------- Preloader -------------- 
  $(".preloader").addClass('animated fadeOut');
  setTimeout(function(){
    $(".preloader").addClass('loaded');
  }, 1000);

  $("#typed").typed({
    strings: ["I Am Passionate Social Entrepreneurship Trainer", "Community Hero", "Youth Leader","Peace Builder"],
    typeSpeed: 30,
    startDelay: 0,
    backSpeed: 30,
    backDelay: 3000,
    loop: true,
    loopCount: false,
    showCursor: true,
    attr: null,
    contentType: 'html',
    callback: function() {},
    preStringTyped: function() {},
    onStringTyped: function() {},
    resetCallback: function() {}
  });

  // -------------- On Scroll Navbar Effect -------------- 

  var window_width = $(window).width();

  $(window).scroll(function(){  
    "use strict"; 
    var scroll = $(window).scrollTop();
    if( scroll > 60 ){
      $(".navbar").addClass("scroll-fixed-navbar");
    } else {
      $(".navbar").removeClass("scroll-fixed-navbar");
    }
  });

  // -------------- Scroll to content animation -------------- 

  $(".scroll-info a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top-80
    }, 1000);
  });

  // -------------- Parallax -------------- 
  
  if( window_width > 992 ){
    $('.testimonial').parallax("50%", 0.1);
    $('.counter').parallax("50%", 0.1);
    $('.twitter-feed').parallax("50%", 0.1);
  }

  // -------------- Scroll to content animation -------------- 

  $(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top-60
    }, 1000);
  });

  // -------------- Jquery WOW (reveal content when scroll) -------------- 

  var wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      mobile:       false
    }
  );
  wow.init();

  // -------------- Jquery CountTo (Project Counter) -------------- 
 $('.counter').appear(function() {
    $('.timer').each(count);
    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data('countToOptions') || {});
      $this.countTo(options);
    }
  });

  // -------------- Owl Carousel -------------- 

  var owl = $("#clients");
 
  owl.owlCarousel({
    items : 5,
    itemsDesktop : [1000,5],
    itemsDesktopSmall : [900,3],
    itemsTablet: [600,2],
    itemsMobile : [400,1], 
    pagination: false,
    autoPlay : 3000
  });

  // -------------- Slick -------------- 

  $('.center').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }    ]
  });

  // -------------- Related Project --------------

  $('.related-project .prev-project').on('mouseover', function() {
    $('.related-project .prev-project').removeClass("lighter");
    $('.related-project .next-project').addClass("lighter");
  });

  $('.related-project .next-project').on('mouseover', function() {
    $('.related-project .next-project').removeClass("lighter");
    $('.related-project .prev-project').addClass("lighter");
  });

  // -------------- Jquery Masonry (Project Counter) -------------- 

  var $container = $('#masonry-container');

  $container.masonry({
    columnWidth: '.masonry',
    itemSelector: '.masonry'
  });

});


$(window).load(function(){ 

  // -------------- Jquery Isotope Setting -------------- 

  var $container = $('.portfoliocontent');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  $('.portfoliofilter a').on('click', function(e) {
    e.preventDefault();
    $('.portfoliofilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
     });
     return false;
  });

});