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
angular.module('config').run([
    '$location',
    'Restangular',
    function($location,Restangular){
        Restangular.setErrorInterceptor(
            function (response, deferred, responseHandler) {
                if (response.status == 404) {
                    console.log("Resource not available...");
                    $location.path('/notFound');
                } else {
                    console.log("Response received with HTTP error code: " + response.status );
                }
                console.log(response, deferred, responseHandler);

                //return false; // stop the promise chain
            }
        );
    }
]);