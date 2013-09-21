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






    $scope.showChapter = function(chapter, section){
        $scope.currentChapter = chapter;
        $scope.currentSection = section;

        $scope.currentModules = []
        for(var i = 0; i < chapter.modules.length; i++){
            var module = Module.get({ id: chapter.modules[i].moduleId }, function(data){
                $scope.setModuleOrder(data);
            });

            $scope.currentModules.push(module);
        }

        // console.log($scope.currentModules);
    }


    $scope.setModuleOrder = function(module){
        for(var i = 0; i < $scope.currentChapter.modules.length; i++){
            if(module.id == $scope.currentChapter.modules[i].moduleId){
                module.$order = $scope.currentChapter.modules[i].moduleOrder;
                break;
            }

        }
    }


});




