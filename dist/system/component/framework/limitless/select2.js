'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var bindable, inject, customElement, _dec, _dec2, _class, Select2CustomElement;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
        }],
        execute: function () {
            _export('Select2CustomElement', Select2CustomElement = (_dec = customElement('select2'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
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
                    var element = $(this.element).find('select');
                    var select2 = element.select2();

                    select2.on('change', function (event) {
                        if (event.originalEvent) {
                            return;
                        }

                        var notice = new Event('change', { bubble: false });
                        $(element)[0].dispatchEvent(notice);
                    });

                    console.log("select2 attached");
                };

                Select2CustomElement.prototype.detached = function detached() {
                    $(this.element).find('select').select2('destroy');
                    console.log("select2 detached");
                };

                return Select2CustomElement;
            }()) || _class) || _class));

            _export('Select2CustomElement', Select2CustomElement);
        }
    };
});