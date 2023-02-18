
$(function(){


/* "お問い合わせ&資料請求はこちら"のボタンをクリックした際にお問い合わせフォームに飛ぶ。 */
$('.headerContact a').click(function(){

  var id = $(this).attr('href');
  var position = $(id).offset().top ;
  var positionOffset = 70;

  position = position - positionOffset;

  $('html,body').animate({

    'scrollTop' : position

  },500);

  return false;

});

$('.secondSection-fourthParagraph a').click(function(){

  var id = $(this).attr('href');
  var position = $(id).offset().top;
  var positionOffset = 70;

  position = position - positionOffset;

  $('html,body').animate({

    'scrollTop' : position

  },500);

  return false;

});



/* スクロールバーを表示/非表示する。 */
 $(window).scroll(function(){

  var targetPoint = 70;
  var scrollPoint = $(this).scrollTop();

   if(targetPoint<=scrollPoint){

     $('.secondSection-scroll a').fadeIn('slow');

   } else {

     $('.secondSection-scroll a').fadeOut('slow');

   }

  });



 /* スクロールバーををクリックした際にページのトップに飛ぶ。 */
  $('.secondSection-scroll a').click(function(){

   var id = $(this).attr('href');
   var position = $(id).offset().top -74;

   $('html,body').animate({

     'scrollTop' : position

   },500);

     return false;

  });


});
