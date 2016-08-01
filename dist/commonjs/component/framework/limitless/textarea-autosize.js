'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextareaAutosize = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextareaAutosize = exports.TextareaAutosize = (_dec = (0, _aureliaFramework.customElement)('textarea'), _dec(_class = function () {
    function TextareaAutosize() {
        _classCallCheck(this, TextareaAutosize);
    }

    TextareaAutosize.prototype.activate = function activate(model) {
        this.element = model.element;
        this.model = model.value;
    };

    TextareaAutosize.prototype.attached = function attached() {
        var element = $('#' + this.element.key);

        autosize(element);
    };

    TextareaAutosize.prototype.detached = function detached() {
        var element = $('#' + this.element.key);

        autosize.destroy(element);
    };

    return TextareaAutosize;
}()) || _class);