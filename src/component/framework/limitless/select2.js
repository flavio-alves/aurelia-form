import {bindable, inject} from "aurelia-framework";
import $ from "jquery";
import "select2";

@inject(Element)
export class SelectCustomElement {

    constructor(element) {
        this.element = element;
    }

    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        $(this.element).find('.select2')
            .select2()
            .on('change', (event) => {
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

}
