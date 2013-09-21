Edu2Ctrls.controller('CourseCtrl',  function ( $scope, $routeParams, University, Course, Section, Module) {


//    console.log(University);



    $scope.currentChapter = {};
    $scope.currentModules = [];


    console.log($routeParams.universityId);

    $scope.university = University.get({id: $routeParams.universityId });

    $scope.course = Course.get({id: $routeParams.courseId, universityId: $routeParams.universityId });

    $scope.sections = Section.query({courseId: $routeParams.courseId, universityId: $routeParams.universityId }, function(data){
        console.log(data);
    });

    console.log($scope.course);
    console.log($scope.university);






    $scope.showChapter = function(chapter){
        $scope.currentChapter = chapter;

        $scope.currentModules = []
        for(var i = 0; i < chapter.modules.length; i++){
            var module = Module.get({ id: chapter.modules[i].moduleId });
            module.$order = chapter.modules[i].moduleOrder;

            $scope.currentModules.push(module);
        }

    }


});




