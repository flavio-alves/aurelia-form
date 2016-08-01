'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var customElement, _dec, _class, TextareaAutosize;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
        }],
        execute: function () {
            _export('TextareaAutosize', TextareaAutosize = (_dec = customElement('textarea'), _dec(_class = function () {
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
            }()) || _class));

            _export('TextareaAutosize', TextareaAutosize);
        }
    };
});