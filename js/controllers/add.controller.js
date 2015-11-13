let AddController = function($scope, NarutoService, BleachService) {

  
$scope.addCharacter = (obj) => {
    NarutoService.addCharacter(obj).then( (res) => {
      $scope.character = {};
      alert("You Added a Naruto Character!");

    });
  };

  $scope.addCharacter2 = (obj) => {
    BleachService.addCharacter2(obj).then( (res) => {
      $scope.character2 = {};
      alert("You Added a Bleach Character!");
    });
  };




 
 
  

};

AddController.$inject = ["$scope", "NarutoService", "BleachService"];

export default AddController;
