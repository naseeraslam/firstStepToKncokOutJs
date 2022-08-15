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
        'jquery'
    ],
    function (
        Component,
        ko
    ) {
        'use strict';

        const boxMultiDimensional = ()=> {
            return {
                length: ko.observable(),
                width: ko.observable(),
                height: ko.observable(),
                weight: ko.observable(),
                unitsPerBox: ko.observable(),
                numberOfBoxes: ko.observable(),
            };
        };

        return {
                boxMultiDimensional: ko.observableArray([boxMultiDimensional()]),
                add: function (){
                    this.boxMultiDimensional.push(boxMultiDimensional())
                },
                delete: function (index) {
                    this.boxMultiDimensional.splice(index,1);
                }

            }
    }
)
