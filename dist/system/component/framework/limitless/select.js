'use strict';

System.register(['aurelia-framework', 'jquery', 'select2'], function (_export, _context) {
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
            _export('SelectCustomElement', SelectCustomElement = (_dec = inject(Element), _dec(_class = function () {
                function SelectCustomElement(element) {
                    _classCallCheck(this, SelectCustomElement);

                    this.element = element;
                }

                SelectCustomElement.prototype.attached = function attached() {
                    var _this = this;

                    $(this.element).find('select').select2().on('change', function (event) {
                        var changeEvent = void 0;

                        if (window.CustomEvent) {
                            changeEvent = new CustomEvent('change', {
                                detail: {
                                    value: event.target.value
                                },
                                bubbles: true
                            });
                        } else {
                            changeEvent = document.createEvent('CustomEvent');
                            changeEvent.initCustomEvent('change', true, true, {
                                detail: {
                                    value: event.target.value
                                }
                            });
                        }
                        _this.element.dispatchEvent(changeEvent);
                    });
                };

                return SelectCustomElement;
            }()) || _class));

            _export('SelectCustomElement', SelectCustomElement);
        }
    };
});