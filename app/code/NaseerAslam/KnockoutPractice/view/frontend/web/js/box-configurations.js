
/*
 *
 *  * Copyright (c) 2022.
 *  * Code by MUHAMMAD NASEER ASLAM.
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

        return Component.extend({
            defaults:{
                // Best approach to write in xml file so easy override
                // template: 'NaseerAslam_KnockoutPractice/sku-lookup'
                boxConfigurations: ko.observableArray(['abc','def ']),
                //Lets play with multi dimensional array
                boxMultiDimensional: ko.observableArray([
                    boxMultiDimensional()
                ])
            },
            initialize(){
                this._super();
                console.log('Woww its great to practice');
            },
            addnewRow(){
                this.boxMultiDimensional.push(boxMultiDimensional());
            },
            deleteRow(index){
                this.boxMultiDimensional.splice(index,1);
            },
            handleSubmit(){
                console.log('Submitted sucessfully');
            }
        });
    }
)

