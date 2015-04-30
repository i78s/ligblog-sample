angular.module('config',[]);
angular.module('config').config([
    'RestangularProvider',
    'ApiUrlConstant',
    function(RestangularProvider,ApiUrlConstant){

        // APIのベースURL
        RestangularProvider.setBaseUrl(ApiUrlConstant.host);

        RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {

            var extractedData;
            if (operation === "getList") {
                if (data.list) {
                    extractedData = data.list || [];
                    extractedData.total = data.total;
                } else {
                    extractedData = data;
                }
            } else {
                extractedData = data;
            }
            return extractedData;
        });
    }
]);