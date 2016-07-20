'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var Select2CustomElement;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('Select2CustomElement', Select2CustomElement = function () {
                function Select2CustomElement() {
                    _classCallCheck(this, Select2CustomElement);
                }

                Select2CustomElement.prototype.activate = function activate(model) {
                    this.element = model.element;
                    this.model = model.value;
                };

                Select2CustomElement.prototype.attached = function attached() {
                    var element = $('#' + this.element.key);
                    var select2 = $(element).select2();

                    $(select2).on('change', function (event) {
                        if (event.originalEvent) {
                            return;
                        }

                        var notice = new Event('change', {
                            bubble: false
                        });

                        $(element)[0].dispatchEvent(notice);
                    });
                };

                Select2CustomElement.prototype.detached = function detached() {
                    $('#' + this.element.key).select2('destroy');
                };

                return Select2CustomElement;
            }());

            _export('Select2CustomElement', Select2CustomElement);
        }
    };
});