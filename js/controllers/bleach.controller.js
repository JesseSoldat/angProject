let BleachController = function($scope, BleachService) {
  
   BleachService.getBleachChars().then ( (res) => {
    // console.log(res);
      $scope.characters = res.data.results;
    });

};

BleachController.$inject = ['$scope', 'BleachService'];

export default BleachController;