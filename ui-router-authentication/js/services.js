angular.module('services',[])
.service('UserModel', [
    '$q',
    '$state',
    'Restangular',
    'ApiUrlConstant',
    function ($q,$state,Restangular,ApiUrlConstant) {
        var Login = Restangular.all(ApiUrlConstant.login);
        var Logout = Restangular.all(ApiUrlConstant.logout);

        var self = this;
        var _data = null;

        this.setUser = function(data){
           _data = data;
        };

        this.getUser = function(){
            return _data;
        };

        this.isLogged = function(){
            return !!_data;
        };

        this.login = function(data){
            var defer = $q.defer();
            Login.post(data).then(function (user) {
                self.setUser(user);
                defer.resolve(user);
            }, function (e) {
                defer.reject(e);
            });
            return defer.promise;
        };

        this.logout = function(){
            var defer = $q.defer();
            Logout.post().then(function (res) {
                $state.go('login');
                self.destroy();
                defer.resolve(res);
            }, function (e) {
                defer.reject(e);
            });
            return defer.promise;
        };

        this.destroy = function () {
            _data = null;
        };
    }
]);