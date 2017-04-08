(function () {
    'use strict';
    var app = angular.module("shared");

    contentService.$inject = ['restService'];

    function contentService(restService) {
        return {
            fetchPageContent: fetchPageContent
        };

        function fetchPageContent(preferredLanguage, url) {
            return restService.get(preferredLanguage, url);
        }
    }

    app.service('contentService', contentService);

    return app;
})();