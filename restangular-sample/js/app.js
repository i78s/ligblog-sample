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
                otherwise('/notFound')
                .when('/member', {
                    templateUrl: 'views/index.html',
                    controller: 'member.IndexCtrl'
                })
                .when('/member/:id', {
                    templateUrl: 'views/detail.html',
                    controller: 'member.DetailCtrl'
                })
                .when('/notFound', {
                    templateUrl: 'views/notFound.html',
                    controller: 'NotFoundCtrl'
                })
        }
    ]);

    angular.bootstrap(document, ["app"]);
})(angular);
