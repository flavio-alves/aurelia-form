import { autosize } from "autosize";

export let TextareaAutosize = class TextareaAutosize {
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

};