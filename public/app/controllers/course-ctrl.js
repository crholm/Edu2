Edu2Ctrls.controller('CourseCtrl',  function ( $scope, $routeParams) {

    $scope.currentChapter = {

    }

    $scope.currentModule = {
        title:"",
        content:""
    }

    $scope.university = $routeParams.university;
    $scope.course = Course[$routeParams.course]

    $scope.sections = $scope.course.sections;

    console.log($scope.course);
    console.log($scope.modules);


    $scope.showChapter = function(chapter){
        $scope.currentChapter = chapter;
    }

    $scope.getModuleName = function(moduleNr){
        return Modules[moduleNr].title;
    }

    $scope.getModuleContent = function(moduleNr){
        return Modules[moduleNr].content;
    }

    $scope.setModule = function(module){

        $scope.currentModule = module;
//        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
//        setTimeout(function(){
//            console.log("NU!!");
//            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
//        }, 1000);

    }

});




