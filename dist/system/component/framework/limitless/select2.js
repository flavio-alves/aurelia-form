'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var customElement, _dec, _class, Select2;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
        }],
        execute: function () {
            _export('Select2', Select2 = (_dec = customElement('select2'), _dec(_class = function () {
                function Select2() {
                    _classCallCheck(this, Select2);
                }

                Select2.prototype.activate = function activate(model) {
                    this.element = model.element;
                    this.model = model.value;
                };

                Select2.prototype.attached = function attached() {
                    var element = $('#' + this.element.key);
                    var select2 = $(element).select2({
                        allowClear: true,
                        width: '100%'
                    });

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

                Select2.prototype.detached = function detached() {
                    $('#' + this.element.key).select2('destroy');
                };

                return Select2;
            }()) || _class));

            _export('Select2', Select2);
        }
    };
});