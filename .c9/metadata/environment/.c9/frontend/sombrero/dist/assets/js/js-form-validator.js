{"filter":false,"title":"js-form-validator.js","tooltip":"/.c9/frontend/sombrero/dist/assets/js/js-form-validator.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":52,"column":14},"action":"insert","lines":["(function (root) {","","    \"use strict\";","","    /**","     * Common object params","     * @type {Object}","     */","    var common = {","            publicMethods: ['validate', 'formatString', 'destroy', 'reload', 'getFormHandle', 'getFields', 'showErrors', 'hideErrors'],","            className: 'Validator'","        },","","        // main constructor","        Protected = function (formHandle, submitCallback, settings) {","","            formHandle.JsValidator = this;","","            this.settings = {","","                // Validation of a current field after the events of \"change\", \"keyup\", \"blur\"","                onAir: true,","","                // Show validation errors","                showErrors: true,","","                // Auto-hide the error messages","                autoHideErrors: false,","","                // Timeout auto-hide error messages","                autoHideErrorsTimeout: 2000,","","                // Language error messages","                locale: 'en',","","                // Object for custom error messages","                messages: {},","","                // Object for custom rules","                rules: {},","","                // classname for error messages","                errorClassName: 'error',","","                // remove spaces from validation field values","                removeSpaces: false,","","                // tracking of new elements","                autoTracking: true,","","                // events list for binding","                eventsList: ['keyup', 'change', 'blur']","            };"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":52,"column":14},"end":{"row":52,"column":14},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1607966968669,"hash":"84cd28cd8669bd44d7ba56307bb657217fa050ac"}