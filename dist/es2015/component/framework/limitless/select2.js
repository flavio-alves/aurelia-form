var _dec, _class;

import { bindable, inject } from "aurelia-framework";

export let Select2CustomElement = (_dec = inject(Element), _dec(_class = class Select2CustomElement {

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
        console.log('attached');
        console.log(this.htmlElement);

        $(this.htmlElement).find('select').select2().on('change', event => {
            this.value = event.target.value;

            if (event.originalEvent) {
                return;
            }

            this.htmlElement.dispatchEvent(new Event('change'));
        });
    }

    detached() {
        $(this.element).find('.select2').select2('destroy');
    }

}) || _class);