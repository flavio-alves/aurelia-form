var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
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

import { bindable, bindingMode, customElement, computedFrom } from "aurelia-framework";
import { resolvedView } from "aurelia-view-manager";

export let FormAlert = (_dec = customElement('form-alert'), _dec2 = resolvedView('spoonx/form', 'form-alert'), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = computedFrom('alert'), _dec5 = computedFrom('alert'), _dec6 = computedFrom('alert'), _dec7 = computedFrom('alert'), _dec(_class = _dec2(_class = (_class2 = class FormAlert {
    constructor() {
        _initDefineProp(this, "alert", _descriptor, this);
    }

    get attributes() {
        return this.alert.attributes;
    }

    get iconAttributes() {
        return this.alert.icon.attributes;
    }

    get message() {
        return this.alert.message;
    }

    get details() {
        return this.alert.details;
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "alert", [_dec3], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "attributes", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "attributes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "iconAttributes", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "iconAttributes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "message", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "message"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "details", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "details"), _class2.prototype)), _class2)) || _class) || _class);