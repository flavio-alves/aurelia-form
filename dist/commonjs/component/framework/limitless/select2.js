"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Select2CustomElement = undefined;

var _dec, _class;

var _aureliaFramework = require("aurelia-framework");

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

require("select2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Select2CustomElement = exports.Select2CustomElement = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
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

        (0, _jquery2.default)(this.element).find('.select2').select2().on('change', function (event) {
            _this.value = event.target.value;

            if (event.originalEvent) {
                return;
            }

            _this.element.dispatchEvent(new Event('change'));
        });
    };

    Select2CustomElement.prototype.detached = function detached() {
        (0, _jquery2.default)(this.element).find('.select2').select2('destroy');
    };

    return Select2CustomElement;
}()) || _class);