$(() => {

  const $window = $(window);
  const $links = $('nav a');
  const $header = $('header');
  const $menu = $('.menu');


  const $title1 = $('.title1');
  const $title2 = $('.title2');
  const $title3 = $('.title3');
  const $title4 = $('.title4');

  const $content1 = $('.content1');
  const $content2 = $('.content2');
  const $content3 = $('.content3');
  const $content4 = $('.content4');

  const $bio = $('.bio');

  const $close = $('.close');

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }

  function scrollToSection() {
    const section = $(this).attr('href');
    if ($window.width() < 575) {
      $('body').animate( {
        scrollTop: $(section).offset().top -48
      }, 1000, () => {
        $('.dropdown').slideToggle();
      });
    }else{
      $('body').animate( {
        scrollTop: $(section).offset().top -75
      }, 1000, () => {
      });
    }
  }
  function orientation(e) {
    if (e.orientation === 'horizontal') {
      $bio.addClass('smallerText');
    }else if (e.orientation === 'vertical') {
      $bio.removeClass('smallerText');
    }
  }

  function makeVisisble1(){
    if ($window.width() < 800) {
      $('body').css({'overflow-y': 'hidden'});
    }
    $content1.fadeToggle('slow');
    $content2.fadeOut('slow');
    $content3.fadeOut('slow');
    $content4.fadeOut('slow');
  }

  function makeVisisble2(){
    if ($window.width() < 800) {
      $('body').css({'overflow-y': 'hidden'});
    }
    $content2.fadeToggle('slow');
    $content1.fadeOut('slow');
    $content3.fadeOut('slow');
    $content4.fadeOut('slow');
  }

  function makeVisisble3(){
    if ($window.width() < 800) {
      $('body').css({'overflow-y': 'hidden'});
    }
    $content3.fadeToggle('slow');
    $content1.fadeOut('slow');
    $content2.fadeOut('slow');
    $content4.fadeOut('slow');
  }

  function makeVisisble4(){
    if ($window.width() < 800) {
      $('body').css({'overflow-y': 'hidden'});
    }
    $content4.fadeToggle('slow');
    $content1.fadeOut('slow');
    $content2.fadeOut('slow');
    $content3.fadeOut('slow');
  }
  function makeInvisible(){
    $('body').css({'overflow-y': 'scroll'});
    $content1.fadeOut('slow');
    $content2.fadeOut('slow');
    $content3.fadeOut('slow');
    $content4.fadeOut('slow');
  }

  function updateHeader() {
    const bottomOfHeader = $header.offset().top + $header.height();
    const viewportHeight = $window.height();

    if (bottomOfHeader >= viewportHeight) {
      $header.addClass('opaque');
    } else {
      $header.removeClass('opaque');
    }
  }

  $links.on('click', scrollToSection);
  $window.scroll(updateHeader).trigger('scroll');
  $menu.on('click', toggleMenu);
  $title1.on('click', makeVisisble1);
  $title2.on('click', makeVisisble2);
  $title3.on('click', makeVisisble3);
  $title4.on('click', makeVisisble4);
  $close.on('click', makeInvisible);
  $window.on('orientationchange', orientation);
});
