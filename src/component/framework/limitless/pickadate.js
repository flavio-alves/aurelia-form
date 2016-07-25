export class PickadateCustomElement {

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
        let pickadate = $(element).pickadate({
            format: 'yyyy-mm-dd',
            editable: false
        });

        $(pickadate).on('change', function (event) {
            if (event.originalEvent) {
                return;
            }

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
