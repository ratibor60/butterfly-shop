$(document).ready(function () {

  $('.burger').on('click', function () {
    $('.main-nav').slideToggle();
  });


  $('.contacts-tab-link').on('click', function (event) {
    event.preventDefault();

    let index = $(this).index('.contacts-tab-link');

    $('.contacts-tab-link').removeClass('active');
    $(this).addClass('active');

    $('.contacts-content').removeClass('active');
    $('.contacts-content').eq(index).addClass('active');
  });

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

});
