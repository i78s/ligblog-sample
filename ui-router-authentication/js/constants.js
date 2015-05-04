angular.module('constants',[]);
angular.module('constants').constant('ApiUrlConstant',(function(){
    var API_PATH = 'http://private-94f2f-authentication14.apiary-mock.com/';

    return {
        host: API_PATH,
        login: 'user/login',
        logout: 'user/logout'
    }
})());
