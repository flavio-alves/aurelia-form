export let DaterangepickerCustomElement = class DaterangepickerCustomElement {
    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        let element = $('#' + this.element.key);
        var datarangepicker = $(element).daterangepicker({
            locale: {
                format: 'YYYY-MM-DD'
            },
            autoUpdateInput: false,
            singleDatePicker: this.element.options.singleDatePicker,
            showDropdowns: this.element.options.endDate,
            minDate: this.element.options.minDate,
            maxDate: this.element.options.maxDate
        }, function (start, end, label) {
            let date = start.format('YYYY-MM-DD');
            if (this.element.options.singleDatePicker !== true) {
                date += ' - ' + end.format('YYYY-MM-DD');
            }
            $(element).val(date);
        });
    }

    detached() {}

};