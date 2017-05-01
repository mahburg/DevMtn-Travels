angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, mainSrv) {
    $scope.getPackages = function () {
        $scope.packages = mainSrv.getPackages();
    }
    $scope.getPackages();
})