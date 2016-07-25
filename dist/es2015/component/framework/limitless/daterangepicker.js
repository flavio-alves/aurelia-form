export let DaterangepickerCustomElement = class DaterangepickerCustomElement {
    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        let element = $('#' + this.element.key);
        let datarangepicker = $(element).daterangepicker({
            locale: {
                format: 'YYYY-MM-DD'
            },
            singleDatePicker: element.options.singleDatePicker,
            showDropdowns: element.options.endDate,
            startDate: element.options.startDate,
            endDate: element.options.endDate
        });

        $(datarangepicker).on('change', function (event) {
            if (event.originalEvent) {
                return;
            }

            var notice = new Event('change', {
                bubble: false
            });

            $(element)[0].dispatchEvent(notice);
        });

        $(".styled, .multiselect-container input").uniform({ radioClass: 'choice' });
    }

    detached() {}

};