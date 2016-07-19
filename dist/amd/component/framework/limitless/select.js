define(['exports', 'aurelia-framework', 'jquery', 'select2'], function (exports, _aureliaFramework, _jquery) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SelectCustomElement = undefined;

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var SelectCustomElement = exports.SelectCustomElement = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
        function SelectCustomElement(element) {
            _classCallCheck(this, SelectCustomElement);

            this.element = element;
        }

        SelectCustomElement.prototype.attached = function attached() {
            var _this = this;

            (0, _jquery2.default)(this.element).find('select').select2().on('change', function (event) {
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
    }()) || _class);
});