let SingleController = function($scope, $stateParams, $http, PARSE) {
  

  let url = PARSE.URL + 'classes/naruto/' + $stateParams.narutoId;

  $http.get(url, PARSE.CONFIG).then( (res) => {

    $scope.singleNaruto = res.data;

  });

  $scope.count = 0;
  $scope.message = 'likes';

  $scope.like = function() {
    $scope.count++;
    $scope.message = ($scope.count === 1) ? 'like' : 'likes';
  };


};

SingleController.$inject = ["$scope", "$stateParams", "$http", "PARSE"];

export default SingleController;