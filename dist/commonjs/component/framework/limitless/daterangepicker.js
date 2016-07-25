'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DaterangepickerCustomElement = exports.DaterangepickerCustomElement = function () {
    function DaterangepickerCustomElement() {
        _classCallCheck(this, DaterangepickerCustomElement);
    }

    DaterangepickerCustomElement.prototype.activate = function activate(model) {
        this.element = model.element;
        this.model = model.value;
    };

    DaterangepickerCustomElement.prototype.attached = function attached() {
        var element = $('#' + this.element.key);
        var datarangepicker = $(element).daterangepicker({
            locale: {
                format: 'YYYY-MM-DD'
            },
            autoUpdateInput: false,
            singleDatePicker: this.element.options.singleDatePicker,
            showDropdowns: this.element.options.endDate,
            minDate: this.element.options.minDate,
            maxDate: this.element.options.maxDate
        }, function (start, end, label) {
            var date = start.format('YYYY-MM-DD');
            if (this.element.options.singleDatePicker !== true) {
                date += ' - ' + end.format('YYYY-MM-DD');
            }
            $(element).val(date);
        });
    };

    DaterangepickerCustomElement.prototype.detached = function detached() {};

    return DaterangepickerCustomElement;
}();