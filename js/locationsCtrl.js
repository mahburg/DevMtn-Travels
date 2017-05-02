angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, mainSrv, $stateParams) {
    $scope.getTravelInfo = function () {
        $scope.travelInfo = mainSrv.getTravelInfo();
    }
    $scope.getTravelInfo();

    // let country = $stateParams.country;

    // $scope.packages = mainSrv.getLocByCountry(country);
    // $scope.travelInfo = mainSrv.getLocByCountry(country);


})