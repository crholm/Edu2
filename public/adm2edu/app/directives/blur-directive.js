angular.module("ui.blur", [])
    .directive('uiBlur', function() {
        return function( scope, elem, attrs ) {
            elem.bind('blur', function() {
                scope.$apply(attrs.uiBlur);
            });
        };
});