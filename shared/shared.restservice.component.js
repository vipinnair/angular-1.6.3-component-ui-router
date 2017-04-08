(function () {
    var app = angular.module("shared", []);

    restService.$inject = ['$http', '$q'];

    function restService($http, $q) {
        var defer = $q.defer();
        return {
            get: get,
            post: post,
            put: put
        };

        function get(url) {
            return $http.get(url).then(handleSuccess, handleError);
        }

        function post(url, data) {
            return $http.post(url, data).then(handleSuccess, handleError);
        }

        function put(url, data) {
            return $http.put(url, data).then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(data, status, headers, config) {
            var response = { success: true, message: data };
            defer.resolve(response);
            return defer.promise;
        }

        function handleError(data, status, headers, config) {
            throw data.statusText;
            //var error = { success: false };
            //return defer.reject(error);
            // return defer.promise;
        }
    }

    app.service('restService', restService);

    return app;
})();