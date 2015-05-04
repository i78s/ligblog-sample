angular.module('config',[]);
angular.module('config').config([
    'RestangularProvider',
    'ApiUrlConstant',
    function(RestangularProvider,ApiUrlConstant){

        // APIのベースURL
        RestangularProvider.setBaseUrl(ApiUrlConstant.host);
    }
]);
angular.module('config').run([
    '$rootScope',
    '$state',
    'UserModel',
    function($rootScope,$state,UserModel){
        $rootScope.$on('$stateChangeStart', function(e,toState,toParams,fromState,fromParams) {
            if (!toState.auth) {    // authプロパティが存在しなければチェックせずに終了
                return;
            }

            if(!UserModel.isLogged()){  // ログインしていなければ
                e.preventDefault(); //遷移を止める
                $state.go('login');
            }
        });
    }
]);