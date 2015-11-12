let BleachSingleController = function($scope, $stateParams, BleachService) {
  

   BleachService.getBleach($stateParams.bleachId).then( (res) => {
    console.log(res);
    $scope.singleBleach = res.data;
  });



//like button
  $scope.count = 0;
  $scope.message = 'likes';

  $scope.like = function() {
    $scope.count++;
    $scope.message = ($scope.count === 1) ? 'like' : 'likes';
  };


};

BleachSingleController.$inject = ["$scope", "$stateParams", "BleachService"];

export default BleachSingleController;