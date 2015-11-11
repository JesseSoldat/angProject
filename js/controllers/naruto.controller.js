let NarutoController = function($scope, $http, PARSE) {
  
    let url = PARSE.URL + 'classes/naruto';

    $http.get(url, PARSE.CONFIG).then( (res) => {
      $scope.characters = res.data.results;
    });
  

};

NarutoController.$inject = ['$scope', '$http', 'PARSE'];

export default NarutoController;