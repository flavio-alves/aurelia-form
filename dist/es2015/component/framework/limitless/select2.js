var _dec, _class;

import { bindable, inject } from "aurelia-framework";
import $ from "jquery";
import "select2";

export let SelectCustomElement = (_dec = inject(Element), _dec(_class = class SelectCustomElement {

    constructor(element) {
        this.element = element;
    }

    attached() {
        $(this.element).find('.select2').select2().on('change', event => {
            this.value = event.target.value;

            if (event.originalEvent) {
                return;
            }

            this.element.dispatchEvent(new Event('change'));
        });
    }

    detached() {
        $(this.element).find('.select2').select2('destroy');
    }

}) || _class);