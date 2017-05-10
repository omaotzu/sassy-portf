'use strict';

$(function () {
  var $window = $(window);
  var $links = $('nav a');
  var $header = $('header');

  var $title1 = $('.title1');
  var $title2 = $('.title2');
  var $title3 = $('.title3');
  var $title4 = $('.title4');

  var $content1 = $('.content1');
  var $content2 = $('.content2');
  var $content3 = $('.content3');
  var $content4 = $('.content4');

  function scrollToSection() {
    var section = $(this).attr('href');
    $('body').animate({
      scrollTop: $(section).offset().top - 94.5
    }, 1000, function () {
      if ($window.width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }

  function makeVisisble1() {
    $content1.toggleClass('visible');
    $content2.removeClass('visible');
    $content3.removeClass('visible');
    $content4.removeClass('visible');
  }

  function makeVisisble2() {
    $content2.toggleClass('visible');
    $content1.removeClass('visible');
    $content3.removeClass('visible');
    $content4.removeClass('visible');
  }

  function makeVisisble3() {
    $content3.toggleClass('visible');
    $content1.removeClass('visible');
    $content2.removeClass('visible');
    $content4.removeClass('visible');
  }

  function makeVisisble4() {
    $content4.toggleClass('visible');
    $content1.removeClass('visible');
    $content2.removeClass('visible');
    $content3.removeClass('visible');
  }

  function updateHeader() {
    var bottomOfHeader = $header.offset().top + $header.height();
    var viewportHeight = $window.height();

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