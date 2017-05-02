angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, mainSrv, $stateParams) {
    console.log($stateParams);
    var bookedId = $stateParams.id;

    // $scope.booked = mainSrv.packageById(bookedId);
    $scope.booked = mainSrv.packageById(bookedId);



})