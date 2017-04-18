(function(){
    'use strict' ;

    angular
        .module('app.home')
        .controller('homeController',homeController);

        homeController.$inject=['$location','$timeout','homeService','$localStorage','notifyService'];

        function homeController($location,$timeout,homeService,$localStorage,notifyService){
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

    //      making request to django rest api and saved record into database
            vm.add_music_data=function(musicData){
                console.log(vm.musicData)
    //            saving record into database
                var query=homeService.music($localStorage.token).save({
                    app_name : vm.musicData.app_name,
                    app_url : vm.musicData.app_url,
                    description : vm.musicData.description,
                    genre:vm.musicData.genre,
                    advisories:vm.musicData.advisories,
                    languages:vm.musicData.languages,
                    currency:vm.musicData.currency


                });

                query.$promise
                    .then(function(data){
                        $('#add_new_data').modal('hide');
                        notifyService.display('New Record added successfully');
                        $timeout(function() {
                            notifyService.showMessage = false;
                        }, 3000);

                        music();
                    }).catch(function(error){
                        console.log(error);

                    });


             }



            }


})();

