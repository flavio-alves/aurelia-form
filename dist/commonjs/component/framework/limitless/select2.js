"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectCustomElement = undefined;

var _dec, _class;

var _aureliaFramework = require("aurelia-framework");

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

require("select2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectCustomElement = exports.SelectCustomElement = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
    function SelectCustomElement(element) {
        _classCallCheck(this, SelectCustomElement);

        this.element = element;
    }

    SelectCustomElement.prototype.activate = function activate(model) {
        this.element = model.element;
        this.model = model.value;
    };

    SelectCustomElement.prototype.attached = function attached() {
        var _this = this;

        (0, _jquery2.default)(this.element).find('.select2').select2().on('change', function (event) {
            _this.value = event.target.value;

            if (event.originalEvent) {
                return;
            }

            _this.element.dispatchEvent(new Event('change'));
        });
    };

    SelectCustomElement.prototype.detached = function detached() {
        (0, _jquery2.default)(this.element).find('.select2').select2('destroy');
    };

    return SelectCustomElement;
}()) || _class);