(function(angular){
    angular.module('app',[
        'ngRoute',
        'restangular',
        'constants',
        'services',
        'controller',
        'config'
    ]).config([
        '$routeProvider',
        function($routeProvider){
            $routeProvider.
                otherwise('/member')
                .when('/member', {
                    templateUrl: 'views/index.html',
                    controller: 'member.IndexCtrl'
                })
                .when('/member/:id', {
                    templateUrl: 'views/detail.html',
                    controller: 'member.DetailCtrl'
                })
        }
    ]);

    angular.bootstrap(document, ["app"]);
})(angular);
