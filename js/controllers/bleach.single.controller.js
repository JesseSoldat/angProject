let BleachSingleController = function($scope, $stateParams, BleachService) {
  

   BleachService.getBleach($stateParams.bleachId).then( (res) => {
    // console.log(res);
    $scope.singleBleach = res.data;


    //like button
    //----------------------------------------
    $scope.message = 'likes';

    $scope.like = function(obj) {
      
      obj.likes++;
      // console.log(obj);

      $scope.message = (obj.likes === 1) ? 'like' : 'likes';
      $scope.updateBleach(obj);
      
    }; //$scope.like
    $scope.updateBleach = function(obj){
        // console.log(obj);
        BleachService.updateBleach(obj).then( (res) => {
          // alert('liked');
        })
      }; //$scope.updateBleach
    

  }); //BleachService




   



};

BleachSingleController.$inject = ["$scope", "$stateParams", "BleachService"];

export default BleachSingleController;