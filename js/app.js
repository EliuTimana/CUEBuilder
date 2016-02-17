(function () {
    var CUEBuilder = angular.module('CUEBuilder', []);
    CUEBuilder.controller('EditorController', ['$scope', function ($scope) {
        $scope.cue = {
            performer: '',
            title: '',
            filename: '',
            tracklist: '',
            output: ''
        };

        $scope.$watchCollection('cue', function () {
            var performer = 'PERFORMER "' + $scope.cue.performer + '"'
            var title = '\nTITLE "' + $scope.cue.title + '"';
            var filename = '\nFILE "' + $scope.cue.filename + '" MP3';

            console.log("artista -     cancion nueva(un remix)".split("-")[1].trim());

            $scope.cue.output = performer + title + filename;

            //console.log($scope.cue.output);
        });
    }]);
})();
