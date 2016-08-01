'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var TextareaAutosize;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('TextareaAutosize', TextareaAutosize = function () {
                function TextareaAutosize() {
                    _classCallCheck(this, TextareaAutosize);
                }

                TextareaAutosize.prototype.activate = function activate(model) {
                    this.element = model.element;
                    this.model = model.value;
                };

                TextareaAutosize.prototype.attached = function attached() {
                    var element = $('#' + this.element.key);

                    autosize(element);
                };

                TextareaAutosize.prototype.detached = function detached() {
                    var element = $('#' + this.element.key);

                    autosize.destroy(element);
                };

                return TextareaAutosize;
            }());

            _export('TextareaAutosize', TextareaAutosize);
        }
    };
});