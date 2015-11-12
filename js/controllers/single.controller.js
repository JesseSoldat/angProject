let SingleController = function($scope, $stateParams, $http, PARSE) {
  

  let url = PARSE.URL + 'classes/naruto/' + $stateParams.narutoId;

  $http.get(url, PARSE.CONFIG).then( (res) => {

    $scope.singleNaruto = res.data;

  });

};

SingleController.$inject = ["$scope", "$stateParams", "$http", "PARSE"];

export default SingleController;