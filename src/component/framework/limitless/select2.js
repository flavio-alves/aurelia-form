export class Select2CustomElement {

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
        let self = this;
        let element = $('#' + this.element.key);
        let select2 = $(element).select2({
            placeholder: 'Please select an option',
            allowClear: true,
            width: '100%'
        });

        // on any change, propagate it to underlying select to trigger two-way bind
        $(select2).on('change', (event) => {
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
    }

    /**
     * Handles detached event
     */
    detached() {
        $('#' + this.element.key).select2('destroy');
    }

}
