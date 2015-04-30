angular.module('services',[]);
angular.module('services').factory('MemberModel', [
    'Restangular',
    'ApiUrlConstant',
    function (Restangular,ApiUrlConstant) {
        var account = Restangular.all(ApiUrlConstant.member);
        return account;
    }
]);