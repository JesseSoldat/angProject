let EditController = function($scope, $stateParams, NarutoService) {

  //get NARUTO
  NarutoService.getNaruto($stateParams.narutoId).then( (res) => {
    // console.log('#1 GET:', res); 
    $scope.character = res.data;
  });
  
  //put NARUTO
  $scope.updateNaruto = function (obj) {
    // console.log('#2', obj);
    NarutoService.updateNaruto(obj).then( (res) => {
      // console.log(res);
      alert("You Edited a Naruto Character!");

    });
  }; 

};

EditController.$inject = ['$scope', '$stateParams', 'NarutoService'];

export default EditController;