
(function() {
    'use strict';

    angular
        .module('musicApp')
        .config(configFunction);

    configFunction.$inject = ['$resourceProvider','$httpProvider'];

    function configFunction($resourceProvider, $httpProvider) {
        // Stop the removal of trailing slash -- Django needs ending slash
        $resourceProvider.defaults.stripTrailingSlashes = false;
        // Setup header stuff for CSRF token
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }
})();
