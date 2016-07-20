var _dec, _dec2, _class;

import { bindable, inject, customElement } from "aurelia-framework";

export let Select2CustomElement = (_dec = customElement('select2'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class Select2CustomElement {

    constructor(htmlElement) {
        console.log('constructor');
        this.htmlElement = htmlElement;
    }

    activate(model) {
        console.log('activate');
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        let element = $(this.element).find('select');
        let select2 = element.select2();

        select2.on('change', event => {
            if (event.originalEvent) {
                return;
            }

            var notice = new Event('change', { bubble: false });
            $(element)[0].dispatchEvent(notice);
        });

        console.log("select2 attached");
    }

    detached() {
        $(this.element).find('select').select2('destroy');
        console.log("select2 detached");
    }

}) || _class) || _class);