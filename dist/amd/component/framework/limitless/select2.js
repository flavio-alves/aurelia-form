define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Select2 = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

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

    var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

    var Select2 = exports.Select2 = (_dec = (0, _aureliaFramework.customElement)('select2'), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = (_class2 = function () {
        function Select2() {
            _classCallCheck(this, Select2);

            _initDefineProp(this, 'element', _descriptor, this);

            _initDefineProp(this, 'model', _descriptor2, this);
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

        return Select2;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'element', [_dec2], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'model', [_dec3], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class);
});