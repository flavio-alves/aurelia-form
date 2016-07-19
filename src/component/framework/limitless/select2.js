import {bindable, inject} from "aurelia-framework";

@inject(Element)
export class Select2CustomElement {

    constructor(element) {
        console.log('constructor');
        this.element = element;
    }

    activate(model) {
        console.log('activate');
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        console.log('attached');
        console.log(this.element);

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
