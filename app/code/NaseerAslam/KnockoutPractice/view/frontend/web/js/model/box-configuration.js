/*
 *
 *  *
 *  *  * Copyright (c) 2022.
 *  *  * Code by MUHAMMAD NASEER ASLAM.
 *  *
 *
 */

define(
    [
        'uiComponent',
        'ko',
        'jquery',
        'NaseerAslam_KnockoutPractice/js/ko/extenders/numeric'
    ],
    function (
        Component,
        ko
    ) {
        'use strict';

        const boxMultiDimensional = ()=> {
            const divisor = 139;
            const data = {
                length: ko.observable().extend({numeric:true}),
                width: ko.observable().extend({numeric:true}),
                height: ko.observable().extend({numeric:true}),
                weight: ko.observable().extend({numeric:true}),
                unitsPerBox: ko.observable().extend({numeric:true}),
                numberOfBoxes: ko.observable().extend({numeric:true}),
            };
            data.dimensionalWeight = ko.computed( () => {
              const result = data.length() * data.height() * data.width()/divisor;
              return Math.round(result * data.numberOfBoxes());
            });
            return data;
        };

        return {
                boxMultiDimensional: ko.observableArray([boxMultiDimensional()]),
                isSuccess: ko.observable(false),
                add: function (){
                    this.boxMultiDimensional.push(boxMultiDimensional())
                },
                delete: function (index) {
                    this.boxMultiDimensional.splice(index,1);
                }

            }
    }
)
