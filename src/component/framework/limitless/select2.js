import {bindable, inject, customElement} from "aurelia-framework";
import {DOM} from 'aurelia-pal';

@customElement('select')
@inject(Element)
export class Select2CustomElement {

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
        let element = $('#' + this.element.key);
        let select2 = $(element).select2();

        // on any change, propagate it to underlying select to trigger two-way bind
        select2.on('change', (event) => {
            // don't propagate endlessly
            // see: http://stackoverflow.com/a/34121891/4354884
            if (event.originalEvent) {
                return;
            }
            // dispatch to raw select within the custom element
            var notice = new Event('change', {
                bubble: false
            });

            $(element)[0].dispatchEvent(notice);
        });

        console.log("select2 attached");
    }

    detached() {
        $('#' + this.element.key).select2('destroy');
        console.log("select2 detached");
    }

}
