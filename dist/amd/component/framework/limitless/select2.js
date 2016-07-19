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

    var _dec, _class;

    var Select2CustomElement = exports.Select2CustomElement = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
        function Select2CustomElement(element) {
            _classCallCheck(this, Select2CustomElement);

            console.log('constructor');
            this.element = element;
        }

        Select2CustomElement.prototype.activate = function activate(model) {
            console.log('activate');
            this.element = model.element;
            this.model = model.value;
        };

        Select2CustomElement.prototype.attached = function attached() {
            var _this = this;

            console.log('attached');
            console.log(this.element);

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
    }()) || _class);
});