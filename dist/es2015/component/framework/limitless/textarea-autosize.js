var _dec, _class;

import { customElement } from "aurelia-framework";

export let TextareaAutosize = (_dec = customElement('textarea'), _dec(_class = class TextareaAutosize {
    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        let element = $('#' + this.element.key);

        autosize(element);
    }

    detached() {
        let element = $('#' + this.element.key);

        autosize.destroy(element);
    }

}) || _class);