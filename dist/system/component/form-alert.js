"use strict";

System.register(["aurelia-framework", "aurelia-view-manager"], function (_export, _context) {
    "use strict";

    var bindable, bindingMode, customElement, computedFrom, resolvedView, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, FormAlert;

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
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("FormAlert", FormAlert = (_dec = customElement('form-alert'), _dec2 = resolvedView('spoonx/form', 'form-alert'), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = computedFrom('alert'), _dec5 = computedFrom('alert'), _dec6 = computedFrom('alert'), _dec7 = computedFrom('alert'), _dec(_class = _dec2(_class = (_class2 = function () {
                function FormAlert() {
                    _classCallCheck(this, FormAlert);

                    _initDefineProp(this, "alert", _descriptor, this);
                }

                _createClass(FormAlert, [{
                    key: "attributes",
                    get: function get() {
                        return this.alert.attributes || '';
                    }
                }, {
                    key: "iconAttributes",
                    get: function get() {
                        console.log(this.alert.icon.attributes);
                        return this.alert.icon.attributes || '';
                    }
                }, {
                    key: "message",
                    get: function get() {
                        return this.alert.message || '';
                    }
                }, {
                    key: "details",
                    get: function get() {
                        return this.alert.details || '';
                    }
                }]);

                return FormAlert;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "alert", [_dec3], {
                enumerable: true,
                initializer: null
            }), _applyDecoratedDescriptor(_class2.prototype, "attributes", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "attributes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "iconAttributes", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "iconAttributes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "message", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "message"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "details", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "details"), _class2.prototype)), _class2)) || _class) || _class));

            _export("FormAlert", FormAlert);
        }
    };
});