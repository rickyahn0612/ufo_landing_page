$(document).ready(function(){
  $('#countdown').countdown('2016/07/02').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="countdown-container"> \
          <div class="countdown-number"> \
            <span class="number-text">%-D</span> \
          </div> \
          <span>Days</span> \
        </div> \
        <div class="countdown-seperator">:</div>'
     + '<div class="countdown-container"> \
          <div class="countdown-number"> \
            <span class="number-text">%-H</span> \
          </div> \
          <span>Hours</span> \
        </div> \
        <div class="countdown-seperator">:</div>'
     + '<div class="countdown-container"> \
          <div class="countdown-number"> \
            <span class="number-text">%M</span> \
          </div> \
          <span>Minutes</span> \
        </div> \
        <div class="countdown-seperator">:</div>'
     + '<div class="countdown-container"> \
          <div class="countdown-number"> \
            <span class="number-text">%S</span> \
          </div> \
          <span>Seconds</span> \
        </div>'));
  });

  $('#form-popup').on('click', function(e){
    $('#notify-form').fadeIn();
    $('#ufo-overlay').fadeIn();
  });

  var closeElms = $('#ufo-close-button, #ufo-overlay')

  closeElms.on('click', function(e){
    $('#notify-form').fadeOut()
    $('#ufo-overlay').fadeOut();
  });
});
