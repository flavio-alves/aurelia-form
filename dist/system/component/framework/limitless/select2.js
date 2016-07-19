"use strict";

System.register(["aurelia-framework", "jquery", "select2"], function (_export, _context) {
    "use strict";

    var bindable, inject, $, _dec, _class, Select2CustomElement;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
        }, function (_jquery) {
            $ = _jquery.default;
        }, function (_select) {}],
        execute: function () {
            _export("Select2CustomElement", Select2CustomElement = (_dec = inject(Element), _dec(_class = function () {
                function Select2CustomElement(element) {
                    _classCallCheck(this, Select2CustomElement);

                    this.element = element;
                }

                Select2CustomElement.prototype.activate = function activate(model) {
                    this.element = model.element;
                    this.model = model.value;
                };

                Select2CustomElement.prototype.attached = function attached() {
                    var _this = this;

                    $(this.element).find('.select2').select2().on('change', function (event) {
                        _this.value = event.target.value;

                        if (event.originalEvent) {
                            return;
                        }

                        _this.element.dispatchEvent(new Event('change'));
                    });
                };

                Select2CustomElement.prototype.detached = function detached() {
                    $(this.element).find('.select2').select2('destroy');
                };

                return Select2CustomElement;
            }()) || _class));

            _export("Select2CustomElement", Select2CustomElement);
        }
    };
});