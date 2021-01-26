
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

});
