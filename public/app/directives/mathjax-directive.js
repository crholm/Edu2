
Edu2Directives.directive("mathjaxBind", function(){
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
            $scope.$watch($attrs.mathjaxBind, function(value) {


                console.log("Event!");
//                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
//                setTimeout(function(){
//                    console.log("NU!!");
//                    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
//                }, 1000);

                var $script = angular.element("<span>")
                    .html(value == undefined ? "" : value);
                $element.html("");
                $element.append($script);
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, $element[0]]);
                //MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
            });
        }]
    }
});