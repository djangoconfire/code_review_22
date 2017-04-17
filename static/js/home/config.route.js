(function(){


    'use strict'

    angular
        .module('app.home',['app.core'])
        .config(configFunction);


        configFunction.$inject=['$routeProvider','STATIC_URL'];


        function configFunction($routeProvider,STATIC_URL){

            $routeProvider
            .when('/',{
                templateUrl : STATIC_URL + '/home/home.html',
                controller : 'homeController',
                controllerAs : 'vm'
            });



           }

})();


