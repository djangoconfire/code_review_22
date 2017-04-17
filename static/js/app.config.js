(function(){
    'use strict' ;


    angular
        .module('musicApp')
        .config(configFunction);


    configFunction.$inject=['$resourceProvider','$httpProvider'];

    function configFunction($resourceProvider,$httpProvider){
        $resourceProvider.defaults.stripTrailingSlashes= false;


    }


})();