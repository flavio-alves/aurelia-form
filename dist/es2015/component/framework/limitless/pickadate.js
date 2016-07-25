export let PickadateCustomElement = class PickadateCustomElement {
    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

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

    detached() {}

};