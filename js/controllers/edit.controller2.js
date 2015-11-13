let EditController2 = function($scope, $stateParams, BleachService) {

  //get Bleach
  BleachService.getBleach($stateParams.bleachId).then( (res) => {
    // console.log('#1 GET:', res); 
    $scope.character = res.data;
  });
  
  //put BLEACH
  $scope.updateBleach = function (obj) {
    // console.log('#2', obj);
    BleachService.updateBleach(obj).then( (res) => {
      // console.log(res);
      alert("You Edited a Bleach Character!");

    });
  }; 

};

EditController2.$inject = ['$scope', '$stateParams', 'BleachService'];

export default EditController2;