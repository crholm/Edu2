Edu2Ctrls.controller('CourseCtrl',  function ( $scope, $routeParams) {

    $scope.currentModule = {
        title:"",
        content:""
    }

    $scope.university = $routeParams.university;
    $scope.course = Course[$routeParams.course];
    $scope.modules = [];
    for(var i = 0; i < $scope.course.modules.length; i++){
        $scope.modules.push(Modules[$scope.course.modules[i]]);
    }

    console.log($scope.course);
    console.log($scope.modules);


    $scope.setModule = function(module){

        $scope.currentModule = module;
//        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
//        setTimeout(function(){
//            console.log("NU!!");
//            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
//        }, 1000);

    }

});




