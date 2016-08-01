import { FormGroup } from "./../form-group";

export let FormGroupCustomElement = class FormGroupCustomElement extends FormGroup {

    attached() {

        let onClass = "on";
        let showClass = "is-visible";

        $("input:not(.token-input):not(.bootstrap-tagsinput > input), textarea, select").on("checkval change", function () {
            var label = $(this).parents('.form-group-material').children(".control-label");

            if (this.value !== "") {
                label.addClass(showClass);
            } else {
                label.removeClass(showClass).addClass('animate');
            }
        }).on("keyup", function () {
            $(this).trigger("checkval");
        }).trigger("checkval").trigger('change');

        $(window).on('load', function () {
            $(".form-group-material").children('.control-label.is-visible').removeClass('animate');
        });
    }

};