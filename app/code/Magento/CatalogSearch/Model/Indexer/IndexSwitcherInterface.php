<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Magento\CatalogSearch\Model\Indexer;

/**
 * Provides a functionality to replace main index with its temporary representation
 * @api
 * @since 100.2.0
 * @deprecated
 * @see \Magento\ElasticSearch
 */
interface IndexSwitcherInterface
{
    /**
     * Switch current index with temporary index
     *
     * It will drop current index table and rename temporary index table to the current index table.
     *
     * @param array $dimensions
     * @return void
     * @since 100.2.0
     */
    public function switchIndex(array $dimensions);
}
