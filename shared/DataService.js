define([], function (app) {
    'use strict';

    function dataService(orderModel) {
        // push the specific transaction to the cart object.
        function saveTransaction(item) {
            orderModel.cart.itemList.push(item);
            return orderModel;
        }

        // returns the entire order data.
        function getAllOrders() {
            return orderModel;
        }

        // returns the order filtered by currency code.
        function getOrderByCurrencyCode(code) {
            angular.forEach(orderModel.cart.itemList, function (value, key) {
                if (key === code) {
                    return value;
                }
            });
        }

        return {
            saveTransaction: saveTransaction,
            getAllOrders: getAllOrders,
            save: save,
            getOrderByCurrencyCode: getOrderByCurrencyCode
        }
    }

    dataService.$inject = ['orderModel'];

    return dataService;
});

//var get = {
//          fetchPageContent: fetchPageContent
//      };

//      return get;

//      function fetchPageContent(preferredLanguage) {
//          var defer = $q.defer();
//          $http.get('page/home')
//             .then(function successCallback(response) {
//                 defer.resolve(response);
//             }, function errorCallback(response) {
//                 defer.resolve(error);
//             });

//          return defer.promise;
//      }