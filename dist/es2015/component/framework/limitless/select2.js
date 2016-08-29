var _dec, _class;

import { customElement } from "aurelia-framework";

export let Select2 = (_dec = customElement('select2'), _dec(_class = class Select2 {
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

    selectedAttribute(option) {
        return option == this.model ? 'selected' : '';
    }
}) || _class);