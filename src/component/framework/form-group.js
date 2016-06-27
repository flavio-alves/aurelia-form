import {bindable, computedFrom} from "aurelia-framework";

export class FormGroup {

    @bindable element;

    /**
     * users can set label to false if they do not want to show the label
     *
     * @returns {boolean} true label is not false
     */
    @computedFrom('element')
    get showsLabel() {
        return (this.element.label !== false);
    }

    /**
     * first check if a label was defined and if not fallback to the key property
     *
     * @returns {string}
     */
    @computedFrom('element')
    get labelText() {
        return this.element.label || this.element.key;
    }

}
