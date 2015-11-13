let NarutoSingleController = function($scope, $stateParams, $http, PARSE, NarutoService) {
  

  let url = PARSE.URL + 'classes/naruto/' + $stateParams.narutoId;

  $http.get(url, PARSE.CONFIG).then( (res) => {

    $scope.singleNaruto = res.data;

  });


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

NarutoSingleController.$inject = ["$scope", "$stateParams", "$http", "PARSE", "NarutoService"];

export default NarutoSingleController;