import {FormGroup} from "./../form-group";

/***
 * in case behaviour has to be altered
 */
export class FormGroupCustomElement extends FormGroup {

    attached() {

        // Setup
        $("input:not(.token-input):not(.bootstrap-tagsinput > input), textarea, select").on("checkval change", function () {

            // Define label
            var label = $(this).parents('.form-group-material').children(".control-label");

            // Toggle label
            if (this.value !== "") {
                label.addClass(showClass);
            }
            else {
                label.removeClass(showClass).addClass('animate');
            }

        }).on("keyup", function () {
            $(this).trigger("checkval");
        }).trigger("checkval").trigger('change');


        // Remove animation on page load
        $(window).on('load', function() {
            $(".form-group-material").children('.control-label.is-visible').removeClass('animate');
        });

    }

}
