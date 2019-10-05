  $(function () {
      $('.top-select').mouseenter(function () {
          $('.categoryBox').css('display', 'block');
      })
      $('.top-select').mouseleave(function () {
          $('.categoryBox').css('display', 'none');
      })
      $('.categoryBox').mouseenter(function () {
          $('.categoryBox').css('display', 'block');
      })
      $('.categoryBox').mouseleave(function () {
          $('.categoryBox').css('display', 'none');
      })


      $('.top-tips-aolaigo').mouseenter(function () {
          $('.top-tips').css('display', 'block');

      });
      $('.top-tips-aolaigo').mouseleave(function () {
          $('.top-tips').css('display', 'none');
      });
  })