angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, mainSrv, $stateParams) {
    $scope.getPackages = function () {
        $scope.packages = mainSrv.getPackages();
    }

    let country = $stateParams.country;
    if (country){
        $scope.packages = mainSrv.getLocByCountry(country);

    } else {
        $scope.getPackages();
    }
    




})