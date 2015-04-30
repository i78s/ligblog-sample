angular.module('controller',[])
.controller('member.IndexCtrl', [
    '$scope',
    'MemberModel',
    function($scope,MemberModel){
        // Promiseオブジェクトが返ってくる
        $scope.accounts = MemberModel.getList().then(function(res){
            $scope.accounts = res;
        });
    }
])
.controller('member.DetailCtrl', [
    '$scope',
    '$routeParams',
    '$location',
    'MemberModel',
    function($scope,$routeParams,$location,MemberModel){
        if(!$routeParams){
            $location.path('/member');
        }
        $scope.account = MemberModel.get($routeParams.id).$object;
    }
]);