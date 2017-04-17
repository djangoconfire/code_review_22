(function(){
    'use strict' ;

    angular
        .module('app.home','app.core')
        .controller('homeController',homeController);

        homeController.$inject=['$location,'homeService','$localStorage'];

        function homeController($location,homeService,$localStorage){
            var vm=this;

    //     making request to api
            music();

            function music(){
                var query=homeService.music($localStorage.token).query();
                query.$promise
                    .then(function(data){
                        vm.music_list=data;
                    }).catch(function(error){
                        console.log(error);
                    });

            }

    //        making request to django rest api and saved record into database
            vm.add_music_data=function(musicData){

    //            saving record into database
                var query=homeService.music($localStorage.token).save({
                    app_name : vm.musicData.app_name,
                    app_url : vm.musicData.app_url,
                    app_description : vm.musicData.description,
                    currency:vm.musicData.currency


                });

                query.$promise
                    .then(function(data){
                        console.log('Data saved successfully into database');
                    }).catch(function(error){
                        console.log(error);

                    });


             }



            }

    }


})();

