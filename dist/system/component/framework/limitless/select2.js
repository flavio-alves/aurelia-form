"use strict";

System.register(["aurelia-framework", "jquery", "select2"], function (_export, _context) {
    "use strict";

    var bindable, inject, $, _dec, _class, SelectCustomElement;

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
            _export("SelectCustomElement", SelectCustomElement = (_dec = inject(Element), _dec(_class = function () {
                function SelectCustomElement(element) {
                    _classCallCheck(this, SelectCustomElement);

                    this.element = element;
                }

                SelectCustomElement.prototype.attached = function attached() {
                    var _this = this;

                    $(this.element).find('.select2').select2().on('change', function (event) {
                        _this.value = event.target.value;

                        if (event.originalEvent) {
                            return;
                        }

                        _this.element.dispatchEvent(new Event('change'));
                    });
                };

                SelectCustomElement.prototype.detached = function detached() {
                    $(this.element).find('.select2').select2('destroy');
                };

                return SelectCustomElement;
            }()) || _class));

            _export("SelectCustomElement", SelectCustomElement);
        }
    };
});