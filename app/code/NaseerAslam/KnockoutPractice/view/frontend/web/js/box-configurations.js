
/*
 *
 *  * Copyright (c) 2022.
 *  * Code by MUHAMMAD NASEER ASLAM.
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
                boxConfigurations: ko.observableArray(['abc','def ']),
                //Lets play with multi dimensional array
                boxMultiDimensional: ko.observableArray([{
                    length: 10,
                    width: 20,
                    height: 23
                },{
                    length: 11,
                    width: 21,
                    height: 24
                }])
            },
            initialize(){
                this._super();
                console.log('Woww its great to practice');
            }
        });
    }
)

