
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
        'mage/storage',
        'jquery',
        'mage/translate',
        'NaseerAslam_KnockoutPractice/js/model/sku'
    ],
    function (
        Component,
        ko,
        storage,
        $,
        $t,
        skuModel
    ) {
        'use strict';
        return Component.extend({
            defaults:{
                // Best approach to write in xml file so easy override
                // template: 'NaseerAslam_KnockoutPractice/sku-lookup',
                sku: skuModel.sku,
                placeholder: $t('Example: %1').replace('%1','24-MB01'),
                messageResponse: ko.observable(''),
                isSuccess: skuModel.isSuccess
            },
            initialize(){
                this._super();
                console.log('Woww Naseer You did stunning job');
            },
            handleSubmit()
            {
                $('body').trigger('processStart');
                this.messageResponse('');
                this.isSuccess(false);
                storage.get(`rest/V1/products/${this.sku()}`)
                    .done(response =>{
                        this.messageResponse($t('Product found! %1 ').replace('%1', `<strong>${response.name}</strong>`));
                        this.isSuccess(true);
                    })
                    .fail(()=>{
                        this.messageResponse($t('Product not found!'));
                        this.isSuccess(false);
                    })
                    .always(()=>
                        {
                            $('body').trigger('processStop');
                        }
                    );
            }
        });
    }
)

