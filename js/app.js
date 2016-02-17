(function () {
    var CUEBuilder = angular.module('CUEBuilder', []);
    CUEBuilder.controller('EditorController', ['$scope', function ($scope) {
        $scope.cue = {
            performer: '',
            output: ''
        };
        $scope.$watchCollection('cue.performer', function () {
            if ($scope.cue.performer) {
                $scope.cue.output = 'PERFORMER: "' + $scope.cue.performer + '"';
            } else {
                $scope.cue.output = '';
            }

            //console.log($scope.cue.output);
        });
    }]);
})();
