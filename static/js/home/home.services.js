(function(){
    'use strict' ;

    var app=angular.module('app.home',['app.core'])
    app.factory('homeService',homeService);

    homeService.$inject=['$resource','STATIC_URL'];

    function homeService($resource,STATIC_URL){
        return{
            music:function(token){
                return $resource(/api/music/:id/,null,{
                    query: {
                        method : 'GET',
                        isArray : true,

                        headers : {
                          'Authorization' : 'Token' + token

                        }


                    },
                    save : {
                        method: 'POST',
                        isArray : false,
                        headers : {
                            'Authorization' : 'Token' + token

                        }
                    }


                 });

            }


        };



    }


})();


