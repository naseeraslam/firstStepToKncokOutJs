
/*
 *
 *  * Copyright (c) 2022.
 *  * Code by MUHAMMAD NASEER ASLAM.
 *  * You are not allowed to replicate my code as extension without permission.
 *  * If you need further help contact me on naseeraslamkhan016@gmail.com
 *
 */

define(
    [
        'uiComponent',
        'ko'
    ],
    function (
        Component,
        ko
    ) {
        'use strict';
        return Component.extend({
            defaults:{
                // Best approach to write in xml file so easy override
                // template: 'NaseerAslam_KnockoutPractice/sku-lookup'
                boxConfigurations: ko.observableArray(['abc','def '])
            },
            initialize(){
                this._super();
                console.log('Woww its great to practice');
            }
        });
    }
)

