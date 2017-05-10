$(() => {
  const $window = $(window);
  const $links = $('nav a');
  const $header = $('header');

  const $title1 = $('.title1');
  const $title2 = $('.title2');
  const $title3 = $('.title3');
  const $title4 = $('.title4');

  const $content1 = $('.content1');
  const $content2 = $('.content2');
  const $content3 = $('.content3');
  const $content4 = $('.content4');



  function scrollToSection() {
    const section = $(this).attr('href');
    $('body').animate( {
      scrollTop: $(section).offset().top -94.5
    }, 1000, () => {
      if ($window.width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }


  function makeVisisble1(){
    $content1.toggleClass('visible');
    $content2.removeClass('visible');
    $content3.removeClass('visible');
    $content4.removeClass('visible');
  }

  function makeVisisble2(){
    $content2.toggleClass('visible');
    $content1.removeClass('visible');
    $content3.removeClass('visible');
    $content4.removeClass('visible');
  }

  function makeVisisble3(){
    $content3.toggleClass('visible');
    $content1.removeClass('visible');
    $content2.removeClass('visible');
    $content4.removeClass('visible');
  }

  function makeVisisble4(){
    $content4.toggleClass('visible');
    $content1.removeClass('visible');
    $content2.removeClass('visible');
    $content3.removeClass('visible');
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
  $title1.on('click', makeVisisble1);
  $title2.on('click', makeVisisble2);
  $title3.on('click', makeVisisble3);
  $title4.on('click', makeVisisble4);
});
