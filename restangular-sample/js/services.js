angular.module('services',[]);
angular.module('services').factory('MemberModel', [
    '$resource',
    'ApiUrlConstant',
    function ($resource,ApiUrlConstant) {
        var resource = $resource(ApiUrlConstant.member + '/:id',{
            id: '@id'
        }, {
            'save': {
                url: ApiUrlConstant.member,
                method: 'POST'
            },
            'get': {    // 単体を取得するとき
                method: 'GET',
                cache: true
            },
            'query': {  // 一覧を取得する時（取得するjsonの一番外側が配列の時）
                method: 'GET'
            },
            'update': {
                method: 'PUT',
                isArray: false
            },
            'delete': {
                method: 'DELETE'
            }
        });

        return resource;
    }
]);