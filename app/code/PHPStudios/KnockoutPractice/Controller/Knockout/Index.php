<?php
/*
 *
 *  * Copyright (c) 2022.
 *  * Code by MUHAMMAD NASEER ASLAM.
 *  * You are not allowed to replicate my code as extension without permission.
 *  * If you need further help contact me on naseeraslamkhan016@gmail.com
 *
 */

namespace PHPStudios\KnockoutPractice\Controller\Knockout;

use Magento\Framework\App\Action\Context;
use Magento\Framework\View\Result\PageFactory;
use Magento\Framework\App\Action\Action;

/**
 * Class Index
 * @package PHPStudios\KnockoutPractice\Controller\Knockout\Index
 */
class Index extends Action
{


    /**
     * Index resultPageFactory
     * @var PageFactory
     */
    protected $resultPageFactory;

    /**
     * Index constructor.
     * @param Context $context
     * @param PageFactory $resultPageFactory
     */
    public function __construct(Context $context, PageFactory $resultPageFactory)
    {
        $this->resultPageFactory = $resultPageFactory;
        return parent::__construct($context);
    }

    /**
     * Function execute
     * @return \Magento\Framework\View\Result\Page
     */
    public function execute()
    {
        return $this->resultPageFactory->create();
    }
}
