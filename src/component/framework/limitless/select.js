import {bindable, inject} from "aurelia-framework";
import $ from "jquery";
import "select2";

@inject(Element)
export class SelectCustomElement {

    constructor(element) {
        this.element = element;
    }

    attached() {
        $(this.element).find('select')
            .select2()
            .on('change', (event) => {
                this.value = event.target.value;
                // let changeEvent;

                if (event.originalEvent) {
                    return;
                }

                this.element.dispatchEvent(new Event('change'));

                // if (window.CustomEvent) {
                //     changeEvent = new CustomEvent('change', {
                //         detail: {
                //             value: event.target.value
                //         },
                //         bubbles: true
                //     });
                // } else {
                //     changeEvent = document.createEvent('CustomEvent');
                //     changeEvent.initCustomEvent('change', true, true, {
                //         detail: {
                //             value: event.target.value
                //         }
                //     });
                // }
                // this.element.dispatchEvent(changeEvent);
            });
    }

    detached() {
        $(this.element).find('select').select2('destroy');
    }

}
