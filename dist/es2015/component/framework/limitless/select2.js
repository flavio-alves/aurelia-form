export let Select2CustomElement = class Select2CustomElement {
    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        let select = $('#' + this.element.key);
        let select2 = $(element).select2({
            allowClear: true,
            width: '100%'
        });

        $(select2).on('change', event => {
            if (event.originalEvent) {
                return;
            }

            var notice = new Event('change', {
                bubble: false
            });

            $(select)[0].dispatchEvent(notice);
        });
    }

    detached() {
        $('#' + this.element.key).select2('destroy');
    }

};