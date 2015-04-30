angular.module('controller',[])
.controller('member.IndexCtrl', [
    '$scope',
    'MemberModel',
    function($scope,MemberModel){
        $scope.accounts = MemberModel.query();
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
        $scope.account = MemberModel.get({id: $routeParams.id});
    }
]);