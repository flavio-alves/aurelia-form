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
            var element = $('#' + this.element.key);
            var datarangepicker = $(element).daterangepicker({
                locale: {
                    format: 'YYYY-MM-DD'
                },
                singleDatePicker: element.options.singleDatePicker,
                showDropdowns: element.options.endDate,
                startDate: element.options.startDate,
                endDate: element.options.endDate
            });

            $(datarangepicker).on('change', function (event) {
                if (event.originalEvent) {
                    return;
                }

                var notice = new Event('change', {
                    bubble: false
                });

                $(element)[0].dispatchEvent(notice);
            });

            $(".styled, .multiselect-container input").uniform({ radioClass: 'choice' });
        };

        DaterangepickerCustomElement.prototype.detached = function detached() {};

        return DaterangepickerCustomElement;
    }();
});