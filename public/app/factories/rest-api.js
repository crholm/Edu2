/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/21/13
 * Time: 4:58 PM
 * To change this template use File | Settings | File Templates.
 */


Edu2RestApi.factory('University', ['$resource', function($resource) {
    return  $resource(
        "/api/university/:id",
        {
            id: "@id"
        },
        {
            'update': {
                method:'PUT'
            }
        }
    );
}]);

Edu2RestApi.factory('Course', ['$resource', function($resource) {
    return  $resource(
        "/api/university/:universityId/course/:id",
        {
            id: "@id"
        },
        {
            'update': {
                method:'PUT'
            }
        }
    );
}]);

Edu2RestApi.factory('Section', ['$resource', function($resource) {
    return  $resource(
        "/api/university/:universityId/course/:courseId/section/:id",
        {
            id: "@id"
        },
        {
            'update': {
                method:'PUT'
            }
        }
    );
}]);

Edu2RestApi.factory('Module', ['$resource', function($resource) {
    return  $resource(
        "/api/module/:id",
        {
            id: "@id"
        },
        {
            'update': {
                method:'PUT'
            }
        }
    );
}]) ;