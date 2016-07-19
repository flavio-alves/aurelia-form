'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var bindable, inject, _dec, _class, Select2CustomElement;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            _export('Select2CustomElement', Select2CustomElement = (_dec = inject(Element), _dec(_class = function () {
                function Select2CustomElement(htmlElement) {
                    _classCallCheck(this, Select2CustomElement);

                    console.log('constructor');
                    this.htmlElement = htmlElement;
                }

                Select2CustomElement.prototype.activate = function activate(model) {
                    console.log('activate');
                    this.element = model.element;
                    this.model = model.value;
                };

                Select2CustomElement.prototype.attached = function attached() {
                    var _this = this;

                    console.log('attached');
                    console.log(this.htmlElement);

                    $(this.htmlElement).find('select').select2().on('change', function (event) {
                        _this.value = event.target.value;

                        if (event.originalEvent) {
                            return;
                        }

                        _this.htmlElement.dispatchEvent(new Event('change'));
                    });
                };

                Select2CustomElement.prototype.detached = function detached() {
                    $(this.element).find('.select2').select2('destroy');
                };

                return Select2CustomElement;
            }()) || _class));

            _export('Select2CustomElement', Select2CustomElement);
        }
    };
});