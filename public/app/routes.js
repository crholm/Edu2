Edu2.config(function($routeProvider) {
    $routeProvider
        .when(
        '/',
        {
            //controller: 'IndexCtrl',
            templateUrl:'app/partials/index-view.html'
        }
    )
        .when(
        '/uni/:university',
        {
            controller: 'UniversityCtrl',
            templateUrl:'app/partials/university-view.html'
        }


    )
        .when(
        '/uni/:university/course/:course',
        {
            controller: 'CourseCtrl',
            templateUrl:'app/partials/course-view.html'
        }


    )
        .when(
        '/about',
        {
            templateUrl:'app/partials/about-view.html'
        }


    )

        .otherwise(
        {
            redirectTo:'/'
        }
    );
});