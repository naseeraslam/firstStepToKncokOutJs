define(
    [
        'ko',
        'jquery'
    ],
    function (
        ko
    ) {
        'use strict';
        return {
            sku: ko.observable('24-MB01'),
            messageResponse: ko.observable(''),
            isSuccess: ko.observable(false)
        };
    });

