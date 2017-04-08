/// <reference path="security.component.html" />
(function () {
    'use strict'

    var security = angular.module("security", []);

    // ----------------------  Private methods ................................. //
    // fetch security cms content.
    function fetchPageContent(contentService) {
        // TODO: tenant/En-CA should be dynamic. Move urls to config.
        var url = "tenant" + "/page/security/" + "en-CA";
        contentService.fetchPageContent(url).then(function () {
            model.securityPageContent = response;

        });
    }

    // Login call back.
    function loginCallback(response) {
        if (response.success) {
            authServices.SetCredentials($scope.emailAddress, $scope.password);
            $location.path("/Home");
        }
    }


    // ---------------------------- Public Methods ................................ //

    function securityController($rootScope, contentService, authServices) {
        var model = this;

        model.$onInit = function () {

            // Set CMS pages.
            fetchPageContent(contentService)
        }

        model.login = function () {
            authServices.ClearCredentials();
            debugger;
            // spinner.
            authServices.login($rootScope.tenant, userData.emailAddress, userData.password, loginCallback);
        };
    }

    security.component("securityComponent", {
        templateUrl: "security/security.component.html",
        controllerAs: "model",
        controller: ["$rootScope", "contentService", "authServices", securityController]
    });

    return security
})();