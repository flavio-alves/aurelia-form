var _dec, _dec2, _class, _desc, _value, _class2;

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

import { computedFrom, customElement } from "aurelia-framework";

export let Select2 = (_dec = customElement('select2'), _dec2 = computedFrom('value'), _dec(_class = (_class2 = class Select2 {
    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        let element = $('#' + this.element.key);
        let select2 = $(element).select2({
            allowClear: true,
            width: '100%'
        });

        $(select2).on('change', event => {
            if (event.originalEvent) {
                return;
            }

            var notice = new Event('change', {
                bubble: false
            });

            $(element)[0].dispatchEvent(notice);
        });
    }

    detached() {
        $('#' + this.element.key).select2('destroy');
    }

    checkSelected(option) {
        return option == this.value;
    }

}, (_applyDecoratedDescriptor(_class2.prototype, 'checkSelected', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'checkSelected'), _class2.prototype)), _class2)) || _class);