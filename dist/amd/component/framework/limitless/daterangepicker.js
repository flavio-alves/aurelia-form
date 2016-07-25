define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var DaterangepickerCustomElement = exports.DaterangepickerCustomElement = function () {
        function DaterangepickerCustomElement() {
            _classCallCheck(this, DaterangepickerCustomElement);
        }

        DaterangepickerCustomElement.prototype.activate = function activate(model) {
            this.element = model.element;
            this.model = model.value;
        };

        DaterangepickerCustomElement.prototype.attached = function attached() {
            var self = this;
            var element = $('#' + this.element.key);
            var datarangepicker = $(element).daterangepicker({
                locale: {
                    format: 'YYYY-MM-DD'
                },
                autoUpdateInput: false,
                singleDatePicker: self.element.options.singleDatePicker,
                showDropdowns: self.element.options.showDropdowns,
                startDate: self.element.options.startDate,
                endDate: self.element.options.endDate,
                minDate: self.element.options.minDate,
                maxDate: self.element.options.maxDate
            }, function (start, end, label) {
                var date = start.format('YYYY-MM-DD');
                if (self.element.options.singleDatePicker !== true) {
                    date += ' - ' + end.format('YYYY-MM-DD');
                }
                $(element).val(date);
            });
        };

        DaterangepickerCustomElement.prototype.detached = function detached() {};

        return DaterangepickerCustomElement;
    }();
});