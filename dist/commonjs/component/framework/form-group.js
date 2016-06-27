'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class, _descriptor;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

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

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var FormGroup = exports.FormGroup = (_dec = (0, _aureliaFramework.computedFrom)('element'), _dec2 = (0, _aureliaFramework.computedFrom)('element'), (_class = function () {
    function FormGroup() {
        _classCallCheck(this, FormGroup);

        _initDefineProp(this, 'element', _descriptor, this);
    }

    _createClass(FormGroup, [{
        key: 'showsLabel',
        get: function get() {
            return this.element.label !== false;
        }
    }, {
        key: 'labelText',
        get: function get() {
            return this.element.label || this.element.key;
        }
    }]);

    return FormGroup;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'element', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'showsLabel', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'showsLabel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'labelText', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'labelText'), _class.prototype)), _class));