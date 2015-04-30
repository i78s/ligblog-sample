angular.module('constants',[]);
angular.module('constants').constant('ApiUrlConstant',(function(){
    var API_PATH = 'http://private-3124d-test3708.apiary-mock.com/';

    return {
        host: API_PATH,
        member: 'members'
    }
})());
