let AddController2 = function($scope, BleachService) {

  $scope.addCharacter = (obj) => {
    BleachService.addCharacter(obj).then( (res) => {
      $scope.character = {};
    });
  };


 

  

};

AddController2.$inject = ["$scope", "BleachService"];

export default AddController2;