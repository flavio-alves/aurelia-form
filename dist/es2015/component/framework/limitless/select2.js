var _dec, _dec2, _class;

import { bindable, inject, customElement } from "aurelia-framework";
import { DOM } from "aurelia-pal";

export let Select2CustomElement = (_dec = customElement('select2'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class Select2CustomElement {
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
    }

    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        let element = $('#' + this.element.key);
        let select2 = $(element).select2();

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

}) || _class) || _class);