(function(){
    'use strict' ;

    var app=angular.module('app.home');
    app.factory('homeService',homeService);

    homeService.$inject=['$resource'];

    function homeService($resource){
        return{
            music:function(token){
                return $resource('/api/music/:id/',null,{
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


