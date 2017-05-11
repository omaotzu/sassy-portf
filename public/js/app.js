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
      scrollTop: $(section).offset().top - 75
    }, 1000, function () {
      if ($window.width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }

  function makeVisisble1() {
    $content1.fadeToggle('slow');
    $content2.fadeOut('slow');
    $content3.fadeOut('slow');
    $content4.fadeOut('slow');
  }

  function makeVisisble2() {
    $content2.fadeToggle('slow');
    $content1.fadeOut('slow');
    $content3.fadeOut('slow');
    $content4.fadeOut('slow');
  }

  function makeVisisble3() {
    $content3.fadeToggle('slow');
    $content1.fadeOut('slow');
    $content2.fadeOut('slow');
    $content4.fadeOut('slow');
  }

  function makeVisisble4() {
    $content4.fadeToggle('slow');
    $content1.fadeOut('slow');
    $content2.fadeOut('slow');
    $content3.fadeOut('slow');
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