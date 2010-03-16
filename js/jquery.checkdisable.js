// jquery.checkdisable.js
// ----------------------
(function(jQuery) {
    jQuery.fn.checkDisable = function(isDisabled) {
        return this.each(function() {
            var $current = jQuery(this);
            $current.attr('disabled', isDisabled);
        });
    }
})(jQuery);