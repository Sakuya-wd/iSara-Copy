
$(function () {


  /* "お問い合わせ&資料請求はこちら"のボタンをクリックした際にお問い合わせフォームに飛ぶ。 */
  $('.headerContact a').click(function () {

    var id = $(this).attr('href');
    var position = $(id).offset().top;
    var positionOffset = 70;

    position = position - positionOffset;

    $('html,body').animate({

      'scrollTop': position

    }, 500);

    return false;

  });

  $('.secondSection-fourthParagraph a').click(function () {

    var id = $(this).attr('href');
    var position = $(id).offset().top;
    var positionOffset = 70;

    position = position - positionOffset;

    $('html,body').animate({

      'scrollTop': position

    }, 500);

    return false;

  });



  /* スクロールバーを表示/非表示する。 */
  $(window).scroll(function () {

    var targetPoint = 70;
    var scrollPoint = $(this).scrollTop();

    if (targetPoint <= scrollPoint) {

      $('.secondSection-scroll a').fadeIn('slow');

    } else {

      $('.secondSection-scroll a').fadeOut('slow');

    }

  });



  /* スクロールバーををクリックした際にページのトップに飛ぶ。 */
  $('.secondSection-scroll a').click(function () {

    var id = $(this).attr('href');
    var position = $(id).offset().top - 74;

    $('html,body').animate({

      'scrollTop': position

    }, 500);

    return false;

  });


  /* よくある質問の各質問をクリックした際にアコーディオンを表示/非表示する。 */
  /* アコーディオン 1 */
  $('.twentiethSection-secondParagraph').click(function () {

    var $question = $('.twentiethSection-firstInner');
    var $answer = $('.twentiethSection-secondInner');
    var $accordionClose = $(this).find('.twentiethSection-firstCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-firstOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 2 */
  $('.twentiethSection-fourthParagraph').click(function () {

    var $question = $('.twentiethSection-thirdInner');
    var $answer = $('.twentiethSection-fourthInner');
    var $accordionClose = $(this).find('.twentiethSection-secondCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-secondOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 3 */
  $('.twentiethSection-sixthParagraph').click(function () {

    var $question = $('.twentiethSection-fifthInner');
    var $answer = $('.twentiethSection-sixthInner');
    var $accordionClose = $(this).find('.twentiethSection-thirdCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-thirdOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 4 */
  $('.twentiethSection-eighthParagraph').click(function () {

    var $question = $('.twentiethSection-seventhInner');
    var $answer = $('.twentiethSection-eighthInner');
    var $accordionClose = $(this).find('.twentiethSection-fourthCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-fourthOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 5 */
  $('.twentiethSection-tenthParagraph').click(function () {

    var $question = $('.twentiethSection-ninthInner');
    var $answer = $('.twentiethSection-tenthInner');
    var $accordionClose = $(this).find('.twentiethSection-fifthCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-fifthOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 6 */
  $('.twentiethSection-twelfthParagraph').click(function () {

    var $question = $('.twentiethSection-eleventhInner');
    var $answer = $('.twentiethSection-twelfthInner');
    var $accordionClose = $(this).find('.twentiethSection-sixthCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-sixthOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 7 */
  $('.twentiethSection-fourteenthParagraph').click(function () {

    var $question = $('.twentiethSection-thirteenthInner');
    var $answer = $('.twentiethSection-fourteenthInner');
    var $accordionClose = $(this).find('.twentiethSection-seventhCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-seventhOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 8 */
  $('.twentiethSection-sixteenthParagraph').click(function () {

    var $question = $('.twentiethSection-fifteenthInner');
    var $answer = $('.twentiethSection-sixteenthInner');
    var $accordionClose = $(this).find('.twentiethSection-eighthCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-eighthOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 9 */
  $('.twentiethSection-eighteenthParagraph').click(function () {

    var $question = $('.twentiethSection-seventeenthInner');
    var $answer = $('.twentiethSection-eighteenthInner');
    var $accordionClose = $(this).find('.twentiethSection-ninthCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-ninthOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 10 */
  $('.twentiethSection-twentiethParagraph').click(function () {

    var $question = $('.twentiethSection-ninteenthInner');
    var $answer = $('.twentiethSection-twentiethInner');
    var $accordionClose = $(this).find('.twentiethSection-tenthCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-tenthOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 11 */
  $('.twentiethSection-twentySecondParagraph').click(function () {

    var $question = $('.twentiethSection-twentyFirstInner');
    var $answer = $('.twentiethSection-twentySecondInner');
    var $accordionClose = $(this).find('.twentiethSection-eleventhCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-eleventhOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 12 */
  $('.twentiethSection-twentyFourthParagraph').click(function () {

    var $question = $('.twentiethSection-twentyThirdInner');
    var $answer = $('.twentiethSection-twentyFourthInner');
    var $accordionClose = $(this).find('.twentiethSection-twelfthCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-twelfthOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 13 */
  $('.twentiethSection-twentySixthParagraph').click(function () {

    var $question = $('.twentiethSection-twentyFifthInner');
    var $answer = $('.twentiethSection-twentySixthInner');
    var $accordionClose = $(this).find('.twentiethSection-thirteenthCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-thirteenthOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 14 */
  $('.twentiethSection-twentyEighthParagraph').click(function () {

    var $question = $('.twentiethSection-twentySeventhInner');
    var $answer = $('.twentiethSection-twentyEighthInner');
    var $accordionClose = $(this).find('.twentiethSection-fourteenthCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-fourteenthOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });

  /* アコーディオン 15 */
  $('.twentiethSection-twentyThirtiethParagraph').click(function () {

    var $question = $('.twentiethSection-twentyNinthInner');
    var $answer = $('.twentiethSection-twentyThirtiethInner');
    var $accordionClose = $(this).find('.twentiethSection-fifteenthCloseArrow');
    var $accordionOpen = $(this).find('.twentiethSection-fifteenthOpenArrow');

    if ($question.hasClass('open')) {

      $question.removeClass('open');
      $answer.slideUp(230);
      $accordionClose.css('display', 'block');
      $accordionOpen.css('display', 'none');

    } else {

      $question.addClass('open');
      $answer.slideDown(230);
      $accordionClose.css('display', 'none');
      $accordionOpen.css('display', 'block');

    }

  });


});
