let NarutoController = function($scope, NarutoService) {


    NarutoService.getNarutos().then ( (res) => {
      $scope.characters = res.data.results;
    });
    
    // let url = PARSE.URL + 'classes/naruto';

    // $http.get(url, PARSE.CONFIG).then( (res) => {
    //   $scope.characters = res.data.results;
    // });
  

};

NarutoController.$inject = ['$scope', 'NarutoService'];

export default NarutoController;