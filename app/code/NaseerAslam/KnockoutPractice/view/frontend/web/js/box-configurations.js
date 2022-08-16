
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
        'NaseerAslam_KnockoutPractice/js/model/box-configuration',
        'NaseerAslam_KnockoutPractice/js/model/sku',
        'jquery'
    ],
    function (
        Component,
        ko,
        boxConfigurationModel,
        skuModel,
        $
    ) {
        'use strict';


        return Component.extend({
            defaults:{
                // Best approach to write in xml file so easy override
                // template: 'NaseerAslam_KnockoutPractice/sku-lookup'
                boxConfigurations: ko.observableArray(['abc','def ']),
                boxConfigurationModel: boxConfigurationModel,
                boxMultiDimensional: boxConfigurationModel.boxMultiDimensional
            },
            initialize(){
                this._super();
                console.log('Woww its great to practice');
                skuModel.isSuccess.subscribe( (value) => {
                 console.log('Sku isSuccess new value ',value);
                }),
                skuModel.isSuccess.subscribe( (value) => {
                    console.log('Sku isSuccess old value ',value);
                },null,'beforeChange')
            },
            addnewRow(){
                boxConfigurationModel.add();
            },
            deleteRow(index){
                boxConfigurationModel.delete(index);
            },
            handleSubmit(){
                if($('.box-configurations form').valid()){
                    boxConfigurationModel.isSuccess(true);
                }
                else {
                    boxConfigurationModel.isSuccess(true);
                }
            }
        });
    }
)

