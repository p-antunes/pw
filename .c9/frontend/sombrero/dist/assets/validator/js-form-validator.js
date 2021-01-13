(function (root) {

    "use strict";

    /**
     * Common object params
     * @type {Object}
     */
    var common = {
            publicMethods: ['validate', 'formatString', 'destroy', 'reload', 'getFormHandle', 'getFields', 'showErrors', 'hideErrors'],
            className: 'Validator'
        },

        // main constructor
        Protected = function (formHandle, submitCallback, settings) {

            formHandle.JsValidator = this;

            this.settings = {

                // Validation of a current field after the events of "change", "keyup", "blur"
                onAir: true,

                // Show validation errors
                showErrors: true,

                // Auto-hide the error messages
                autoHideErrors: false,

                // Timeout auto-hide error messages
                autoHideErrorsTimeout: 2000,

                // Language error messages
                locale: 'en',

                // Object for custom error messages
                messages: {},

                // Object for custom rules
                rules: {},

                // classname for error messages
                errorClassName: 'error',

                // remove spaces from validation field values
                removeSpaces: false,

                // tracking of new elements
                autoTracking: true,

                // events list for binding
                eventsList: ['keyup', 'change', 'blur']
            };