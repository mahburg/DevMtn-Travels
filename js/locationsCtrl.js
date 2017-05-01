angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, mainSrv) {
    $scope.getTravelInfo = function () {
        $scope.travelInfo = mainSrv.getTravelInfo();
    }
    $scope.getTravelInfo();
})