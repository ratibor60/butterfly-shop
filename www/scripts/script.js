$(document).ready(function () {

//бургер
  $('.burger').on('click', function () {
    $('.main-nav').slideToggle();
  });

//табы
  $('.contacts-tab-link').on('click', function (event) {
    event.preventDefault();

    let index = $(this).index('.contacts-tab-link');

    $('.contacts-tab-link').removeClass('active');
    $(this).addClass('active');

    $('.contacts-content').removeClass('active');
    $('.contacts-content').eq(index).addClass('active');
  });

//фильтры
  $('.filter-link').on('click', function(event) {
    event.preventDefault();

    let linkType = $(this).data('type');

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (linkType === 'all') {
      $('.portfolio-item').show();
      return;
    }

    $('.portfolio-item').each (function() {
      let portfolioType = $(this).data('type');

      if (linkType === portfolioType) {
        $(this).show();
        return;
      }
      $(this).hide();
    });
  });


// аккордеон
  let prevIndex;
  $('.faq-button').on('click', function() {
    let currentIndex = $(this).index('.faq-button');

    if (currentIndex === prevIndex) {
      $(this).next().slideToggle();
      $(this).toggleClass('open');
      return;
    }

    $(this).next().slideDown();
    $(this).addClass('open');
    $('.faq-button').eq(prevIndex).next().slideUp();
    $('.faq_button').eq(prevIndex).removeClass('open');
    prevIndex = currentIndex;
  });



  //слайдер
  $('.carousel').slick();

});
