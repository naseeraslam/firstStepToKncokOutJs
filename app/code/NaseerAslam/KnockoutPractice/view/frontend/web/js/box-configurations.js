
/*
 *
 *  * Copyright (c) 2022.
 *  * Code by MUHAMMAD NASEER ASLAM.
 *
 */

define(
    [
        'uiComponent',
        'ko',
        'NaseerAslam_KnockoutPractice/js/model/box-configuration'
    ],
    function (
        Component,
        ko,
        boxConfigurationModel
    ) {
        'use strict';


        return Component.extend({
            defaults:{
                // Best approach to write in xml file so easy override
                // template: 'NaseerAslam_KnockoutPractice/sku-lookup'
                boxConfigurations: ko.observableArray(['abc','def ']),
                boxConfigurationModel: boxConfigurationModel
            },
            initialize(){
                this._super();
                console.log('Woww its great to practice');
            },
            addnewRow(){
                boxConfigurationModel.add();
            },
            deleteRow(index){
                boxConfigurationModel.delete(index);
            },
            handleSubmit(){
                console.log('Submitted sucessfully');
            }
        });
    }
)

