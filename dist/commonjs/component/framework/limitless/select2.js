'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Select2CustomElement = exports.Select2CustomElement = function () {
    function Select2CustomElement() {
        _classCallCheck(this, Select2CustomElement);
    }

    Select2CustomElement.prototype.activate = function activate(model) {
        this.element = model.element;
        this.model = model.value;
    };

    Select2CustomElement.prototype.attached = function attached() {
        var select = $('#' + this.element.key);
        var select2 = $(element).select2({
            allowClear: true,
            width: '100%'
        });

        $(select2).on('change', function (event) {
            if (event.originalEvent) {
                return;
            }

            var notice = new Event('change', {
                bubble: false
            });

            $(select)[0].dispatchEvent(notice);
        });
    };

    Select2CustomElement.prototype.detached = function detached() {
        $('#' + this.element.key).select2('destroy');
    };

    return Select2CustomElement;
}();