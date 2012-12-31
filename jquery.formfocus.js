/*!
 * jQuery forFocus v1
 * http://scsandbox.oxiemsites.com/jquery/form-focus/
 *
 * Copyright, Oxiem Interactive
 */
;(function($) {
  $.fn.formFocus = function(options) {
    //setup defaults
    var defaults = {
      color: '#000',
      focusColor: '#ccc'
    }
    //setup options
    var options = $.extend(defaults, options);
    
    $('label', this).each(function(){
      var input_id = $(this).attr('for');
      var el = $(this);
      var el_input = $("#"+input_id);
      
      el_input.live('keydown', hideLabels);
      el_input.live('paste', hideLabels);
      el_input.live('focusin', function() {
        el.css('color', options.focusColor);
      });
      el_input.live('focusout', function() {
        el.css('color', options.color);
      });
      el_input.attr('autocomplete','off');
      function hideLabels(){
        var input = $(this);
      	setTimeout(function() {
          if (!input.val()) {
      		  el.css('visibility', '');
      		} else {
      		  el.css('visibility', 'hidden');
      		}
      	}, 0);
      };
    });
    return this;
  }
})(jQuery);