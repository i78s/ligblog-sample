(function(angular){
    angular.module('app',[
        'angular-loading-bar',
        'ui.router',
        'restangular',
        'constants',
        'services',
        'controller',
        'config'
    ]).config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('/', {
                    url: '',
                    abstract: true,
                    templateUrl: 'views/index.html',
                    controller: 'index.IndexCtrl'
                })
                .state('index', {
                    url: '/index',
                    controller: 'index.DashboardCtrl',
                    parent: '/',
                    templateUrl: 'views/dashboard.html',
                    auth: true
                })
                .state('login', {
                    url: '/',
                    templateUrl: 'views/login.html',
                    controller: 'login.LoginCtrl'
                });
        }
    ]);

    angular.bootstrap(document, ["app"]);
})(angular);