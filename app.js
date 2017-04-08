(function () {
    'use strict'

    var app = angular.module('fxApp', ['main']);

    app.config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);

    return app;
})();