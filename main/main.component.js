(function () {
    'use strict'

    var main = angular.module("main", ["security", "registration", "shared", "ui.router"]).config(function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            template: '<h1>test</h1>'
        })
    })

    function mainController($location, restService, $rootScope) {
        var self = this;
        self.$onInit = function () {
            var dns = $location.host();
            if ($location.host().indexOf('tenant')) {
                $rootScope.tenant = "tenant";
            }
            else {
                $rootScope.tenant = "tenant2";
            }

            // TODO: Remove this hardcoding.
            $rootScope.tenant = "tenant";
            $rootScope.language = "en-CA";
            var url = "/" + $rootScope.tenant + "/base/set/" + $rootScope.language
            restService.get(url, "").then(function (response) {
                if (response.success === false) {
                    console.debug("Unable to set the tenant and language -", message.message)
                }
            });
        }
    }

    main.component("mainComponent", {
        templateUrl: "main/main.component.html",
        controllerAs: "model",
        controller: ["$location", "restService", "$rootScope", mainController]
    });

    return main;
})();