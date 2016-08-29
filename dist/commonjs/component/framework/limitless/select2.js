'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Select2 = undefined;

var _dec, _dec2, _class, _desc, _value, _class2;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Select2 = exports.Select2 = (_dec = (0, _aureliaFramework.customElement)('select2'), _dec2 = (0, _aureliaFramework.computedFrom)('value'), _dec(_class = (_class2 = function () {
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

    Select2.prototype.checkSelected = function checkSelected(option) {
        return option == this.value;
    };

    return Select2;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'checkSelected', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'checkSelected'), _class2.prototype)), _class2)) || _class);