var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2;

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

import { Config } from "../config";
import { bindingMode, bindable, computedFrom, inject, customElement } from "aurelia-framework";
import { resolvedView, ViewManager } from "aurelia-view-manager";

export let FormField = (_dec = customElement('form-field'), _dec2 = resolvedView('spoonx/form', 'form-field'), _dec3 = inject(Config, ViewManager), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec5 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec6 = computedFrom('element'), _dec7 = computedFrom('element'), _dec8 = computedFrom('view'), _dec9 = computedFrom('element'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class FormField {

    constructor(config, viewManager) {
        _initDefineProp(this, "element", _descriptor, this);

        _initDefineProp(this, "value", _descriptor2, this);

        this.config = config;
        this.viewManager = viewManager;
    }

    get label() {
        return this.element.label || this.element.key;
    }

    get view() {
        let type = this.type;
        this.element.type = type;

        return this.viewManager.resolve('spoonx/form', type);
    }

    get hasViewModel() {
        return !this.view.endsWith('.html');
    }

    get type() {
        let type = this.element.type;
        let alias = this.config.fetch('aliases', type);

        let previous = [];

        while (alias && !(alias in previous)) {
            type = alias;
            alias = this.config.fetch('aliases', type);

            previous.push(type);
        }

        return type;
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "element", [_dec4], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec5], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "label", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "label"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "view", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "view"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "hasViewModel", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "hasViewModel"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "type", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "type"), _class2.prototype)), _class2)) || _class) || _class) || _class);