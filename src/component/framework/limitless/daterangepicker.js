export class DaterangepickerCustomElement {

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
        var datarangepicker = $(element).daterangepicker({
            locale: {
                format: 'YYYY-MM-DD'
            },
            autoUpdateInput: false,
            singleDatePicker: self.element.options.singleDatePicker,
            showDropdowns: self.element.options.showDropdowns,
            startDate: self.element.options.startDate,
            endDate: self.element.options.endDate,
            minDate: self.element.options.minDate,
            maxDate: self.element.options.maxDate,
        }, function(start, end, label) {
            let date = start.format('YYYY-MM-DD');
            if(self.element.options.singleDatePicker !== true) {
                date += ' - ' + end.format('YYYY-MM-DD');
            }
            $(element).val(date);
        });
    }

    /**
     * Handles detached event
     */
    detached() {
        // $('#' + this.element.key).select2('destroy');
    }

}
