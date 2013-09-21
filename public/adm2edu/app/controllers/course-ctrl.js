Edu2Ctrls.controller('CourseCtrl',  function ( $scope, $routeParams, University, Course, Section, Module) {

    $scope.tinymceOptions = {
        plugins: "image"
    }

    $scope.currentSection = {};
    $scope.currentChapter = {};
    $scope.currentModules = [];


    console.log($routeParams.universityId);

    $scope.university = University.get({id: $routeParams.universityId });

    $scope.course = Course.get({id: $routeParams.courseId, universityId: $routeParams.universityId });

    $scope.sections = Section.query({courseId: $routeParams.courseId, universityId: $routeParams.universityId });




    $scope.saveCurrent = function(){
        $scope.currentSection.$update({courseId: $routeParams.courseId, universityId: $routeParams.universityId });
        for(var key in $scope.currentModules){
            $scope.currentModules[key].$update();
        }
    }







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












    $scope.canNotInc = function(module){
        for(var i = 0; i <  $scope.currentModules.length; i++){
            if(module.$order < $scope.currentModules[i].$order){
                return false;
            }
        }
        return true;
    }

    $scope.canNotDec = function(module){
        for(var i = 0; i <  $scope.currentModules.length; i++){
            if(module.$order > $scope.currentModules[i].$order){
                return false;
            }
        }
        return true;
    }


    $scope.incOrder = function(module){

        var startOrder = module.$order;
        for(var i = 0; i <  $scope.currentModules.length; i++){
            if($scope.currentModules[i].$order == startOrder+1){
                $scope.currentModules[i].$order--;
            }
            if($scope.currentChapter.modules[i].moduleOrder == startOrder+1){
                $scope.currentChapter.modules[i].moduleOrder--;
            }

            if($scope.currentChapter.modules[i].moduleId == module.id){
                $scope.currentChapter.modules[i].moduleOrder++;
            }



        }
        module.$order++;

        console.log("---");
        console.log(module);
        console.log($scope.currentChapter);
        console.log($scope.currentModules);

    }

    $scope.decOrder = function(module){
        var startOrder = module.$order;
        for(var i = 0; i <  $scope.currentModules.length; i++){
            if($scope.currentModules[i].$order == startOrder-1){
                $scope.currentModules[i].$order++;
            }
            if($scope.currentChapter.modules[i].moduleOrder == startOrder-1){
                $scope.currentChapter.modules[i].moduleOrder++;
            }

            if($scope.currentChapter.modules[i].moduleId == module.id){
                $scope.currentChapter.modules[i].moduleOrder--;
            }

        }
        module.$order--;
    }




});




