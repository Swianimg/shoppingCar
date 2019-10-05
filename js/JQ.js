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

    $('.social-help-item').mouseenter(function () {

    })



    $('.dingbu').eq(0).click(function (even) {
         $('.right').animate({
             right: '0px'
        })
        even.stopPropagation();
    })

    $('.chacha').click(function(){
       $('.right').animate({
             right: '-332px'
        })
        
    })
  $('.dingbu').eq(1).click(function (even) {
         $('.right').animate({
             right: '0px'
        })
        even.stopPropagation();
    })
      $('.dingbu').eq(2).click(function (even) {
         $('.right').animate({
             right: '0px'
        })
        even.stopPropagation();
    })
      $('.dingbu').eq(3).click(function (even) {
         $('.right').animate({
             right: '0px'
        })
        even.stopPropagation();
    })
      $('.dingbu').eq(4).click(function (even) {
         $('.right').animate({
             right: '0px'
        })
        even.stopPropagation();
    })

//    $(document).click(function(even){
//     $('.right').animate({
//         right: '-332px'
//    })
//    even.stopPropagation();
//    })

   $('.bannerbox').mouseenter(function(){
   $('.box-btn-left').css('display','block')
  
   })
   $('.bannerbox').mouseleave(function(){
    $('.box-btn-left').css('display','none')

   })


   $('.bannerbox').mouseenter(function(){
    $('.box-btn-right').css('display','block')
 
    })
    $('.bannerbox').mouseleave(function(){
     $('.box-btn-right').css('display','none')
  
    })
   
$('')

})

