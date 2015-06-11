/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*global define,alert*/
define(
    [
        '../model/quote',
        '../model/resource-url-manager',
        'mage/storage',
        'Magento_Checkout/js/model/payment-service',
        'Magento_Ui/js/model/errorlist'
    ],
    function (quote, resourceUrlManager, storage, paymentService, errorList) {
        "use strict";
        return function () {
            var payload = {
                addressInformation: {
                    shipping_address: quote.shippingAddress(),
                    shipping_method_code: quote.shippingMethod().method_code,
                    shipping_carrier_code: quote.shippingMethod().carrier_code
                }
            };

            storage.post(
                resourceUrlManager.getUrlForSetShippingInformation(quote),
                JSON.stringify(payload)
            ).done(
                function (response) {
                    paymentService.setPaymentMethods(response.payment_methods);
                    quote.setTotals(response.totals)
                }
            ).fail(
                function (response) {
                    var error = JSON.parse(response.responseText);
                    errorList.add(error);
                }
            );
        }
    }
);
