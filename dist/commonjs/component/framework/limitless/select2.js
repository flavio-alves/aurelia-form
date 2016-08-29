'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Select2 = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Select2 = exports.Select2 = (_dec = (0, _aureliaFramework.customElement)('select2'), _dec(_class = function () {
    function Select2() {
        _classCallCheck(this, Select2);
    }

    Select2.prototype.activate = function activate(model) {
        this.element = model.element;
        this.model = model.value;
    };

    Select2.prototype.attached = function attached() {
        var element = $('#' + this.element.key);
        var select2 = $(element).select2({
            allowClear: true,
            width: '100%'
        });

        $(select2).on('change', function (event) {
            if (event.originalEvent) {
                return;
            }

            var notice = new Event('change', {
                bubble: false
            });

            $(element)[0].dispatchEvent(notice);
        });
    };

    Select2.prototype.detached = function detached() {
        $('#' + this.element.key).select2('destroy');
    };

    Select2.prototype.isSelected = function isSelected(option) {
        return option == this.value;
    };

    return Select2;
}()) || _class);