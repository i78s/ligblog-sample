angular.module('controller',[])
.controller('index.IndexCtrl', [
    '$scope',
    'UserModel',
    function($scope,UserModel){
        $scope.user = UserModel.getUser();
        $scope.logout = function(){
            UserModel.logout();
        }
    }
])
.controller('index.DashboardCtrl', [
    '$scope',
    function($scope){

    }
])
.controller('login.LoginCtrl', [
    '$scope',
    '$state',
    'UserModel',
    function($scope,$state,UserModel){
        $scope.login = function(){
            UserModel.login($scope.user).then(function(res){
                $state.go('index');
            });
        }
    }
]);