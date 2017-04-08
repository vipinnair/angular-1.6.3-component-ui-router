/// <reference path="security.component.html" />
(function () {
    'use strict'

    var registration = angular.module("registration", []);

    function registrationController() {
        var model = this;
        model.login = function () {
        };
    }

    registration.component("registrationComponent", {
        templateUrl: "registration/registration.component.html",
        controllerAs: "model",
        controller: registrationController
    });

    return registration;
})();