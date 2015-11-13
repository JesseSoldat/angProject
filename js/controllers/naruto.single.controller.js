let NarutoSingleController = function($scope, $stateParams, NarutoService) {
  


  NarutoService.getNaruto($stateParams.narutoId).then( (res) => {
    $scope.singleNaruto = res.data;
  }); //NarutoService


//like button
//----------------------------------------
  $scope.message = 'likes';

  $scope.like = function(obj) {
    // console.log(obj);
    obj.likes++;
    $scope.message = (obj.likes === 1) ? 'like' : 'likes';
    $scope.updateNaruto(obj);
  }; //$scope.like
  $scope.updateNaruto = function(obj){
    // console.log(obj);
    NarutoService.updateNaruto(obj).then( (res) => {
      // alert('liked');
    })

  }; //updateNarto


};

NarutoSingleController.$inject = ["$scope", "$stateParams", "NarutoService"];

export default NarutoSingleController;