let SiteController = function($scope) {
  $scope.home = "Home Page";
  $scope.about = "About Page";
  $scope.contact = "Contact Page";
};

SiteController.$inject = ["$scope"];

export default SiteController;