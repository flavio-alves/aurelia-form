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

export let BootstrapMultiselect = (_dec = customElement('bootstrap-multiselect'), _dec2 = computedFrom('value'), _dec(_class = (_class2 = class BootstrapMultiselect {
    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        let element = $('#' + this.element.key);
        let multiSelect = $(element).multiselect({
            selectedClass: null,
            includeSelectAllOption: true,

            nonSelectedText: "Nenhuma opção selecionada",
            nSelectedText: "opções selecionadas",
            allSelectedText: "Todas as opções selecionadas",
            onChange: function (option, checked) {
                $.uniform.update();
            }
        });

        $(multiSelect).on('change', function (event) {
            if (event.originalEvent) {
                return;
            }

            var notice = new Event('change', {
                bubble: false
            });

            $(element)[0].dispatchEvent(notice);
        });

        $(".styled, .multiselect-container input").uniform({ radioClass: 'choice' });
    }

    detached() {}

    checkSelected(option) {
        return this.value.indexOf(option) > -1;
    }

}, (_applyDecoratedDescriptor(_class2.prototype, 'checkSelected', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'checkSelected'), _class2.prototype)), _class2)) || _class);