'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var DatepickerCustomElement;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('DatepickerCustomElement', DatepickerCustomElement = function () {
                function DatepickerCustomElement() {
                    _classCallCheck(this, DatepickerCustomElement);
                }

                DatepickerCustomElement.prototype.activate = function activate(model) {
                    this.element = model.element;
                    this.model = model.value;
                };

                DatepickerCustomElement.prototype.attached = function attached() {
                    var element = $('#' + this.element.key);
                    var multiSelect = $(element).pickadate({
                        format: 'yyyy-mm-dd',
                        editable: false
                    });

                    $(multiSelect).on('change', function (event) {
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

                DatepickerCustomElement.prototype.detached = function detached() {};

                return DatepickerCustomElement;
            }());

            _export('DatepickerCustomElement', DatepickerCustomElement);
        }
    };
});