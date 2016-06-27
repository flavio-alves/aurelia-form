"use strict";

System.register(["aurelia-framework", "aurelia-view-manager"], function (_export, _context) {
    "use strict";

    var bindable, bindingMode, customElement, computedFrom, resolvedView, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, FormAlert;

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

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            bindingMode = _aureliaFramework.bindingMode;
            customElement = _aureliaFramework.customElement;
            computedFrom = _aureliaFramework.computedFrom;
        }, function (_aureliaViewManager) {
            resolvedView = _aureliaViewManager.resolvedView;
        }],
        execute: function () {
            _export("FormAlert", FormAlert = (_dec = customElement('form-alert'), _dec2 = resolvedView('spoonx/form', 'form-alert'), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function FormAlert() {
                _classCallCheck(this, FormAlert);

                _initDefineProp(this, "alert", _descriptor, this);
            }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "alert", [_dec3], {
                enumerable: true,
                initializer: null
            })), _class2)) || _class) || _class));

            _export("FormAlert", FormAlert);
        }
    };
});