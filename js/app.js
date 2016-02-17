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
            var filename = '\nFILE "' + $scope.cue.filename + '" MP3\n';
            var split_track = '';
            if ($scope.cue.tracklist) {
                var tracklist = $scope.cue.tracklist.split('\n');

                for (var i = 0; i < tracklist.length; i++) {
                    split_track += '  TRACK ' + (i < 9 ? '0' + (i + 1) : (i + 1))
                    split_track += ' AUDIO\n    '
                    split_track += performer + '\n    TITLE "'
                    split_track += tracklist[i] + '"\n';
                }
            }



            $scope.cue.output = performer + title + filename + split_track;

            //console.log($scope.cue.output);
        });
    }]);
})();
