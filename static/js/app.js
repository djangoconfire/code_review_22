(function(){
    'use strict'


    angular
        .module('musicApp',[
      // Angular modules
        'ngRoute',
        'ngResource',
        'ngStorage',
        'ngMessages',

//      custom file
        'app.core',
        'app.home',
        'app.notify'
    ]);




})();
