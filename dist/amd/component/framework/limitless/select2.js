define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Select2CustomElement = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var Select2CustomElement = exports.Select2CustomElement = (_dec = (0, _aureliaFramework.customElement)('select2'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
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
    }()) || _class) || _class);
});