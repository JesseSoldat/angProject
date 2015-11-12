let AddController = function($scope, $http, PARSE) {
  $scope.add = "Add Character";

  let url = PARSE.URL + 'classes/naruto';

  let Character = function(obj) {
    this.Nihongo = obj.Nihongo;
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
    this.url = obj.url;
    this.url2 = obj.url2;
    this.url3 = obj.url3;
  };

  $scope.addCharacter = (obj) => {
    let ch = new Character(obj);

    $http.post(url, ch, PARSE.CONFIG).then( (res) => {
      $scope.character = {};
    });

  };

};

AddController.$inject = ["$scope", "$http", "PARSE"];

export default AddController;
