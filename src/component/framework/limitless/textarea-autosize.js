import {customElement} from "aurelia-framework";

@customElement('textarea')
export class TextareaAutosize {

    /**
     * Handles activate event
     *
     * @param model
     */
    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    /**
     * Handles attached event
     */
    attached() {
        let element = $('#' + this.element.key);

        autosize(element);
    }

    /**
     * Handles detached event
     */
    detached() {
        let element = $('#' + this.element.key);

        autosize.destroy(element);
    }

}