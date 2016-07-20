export class BootstrapMultiselectCustomElement {

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
        let element     = $('#' + this.element.key);
        let multiSelect = $(element).multiselect({
            selectedClass: null
        });

        // on any change, propagate it to underlying select to trigger two-way bind
        $(multiSelect).on('change', (event) => {
            // don't propagate endlessly
            if (event.originalEvent) {
                return;
            }
            // dispatch to raw select within the custom element
            var notice = new Event('change', {
                bubble: false
            });

            $(element)[0].dispatchEvent(notice);
        });
    }

    /**
     * Handles detached event
     */
    detached() {
        // $('#' + this.element.key).select2('destroy');
    }

}
