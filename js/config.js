let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider 
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.naruto', {
      url: '/naruto',
      controller: 'NarutoController',
      templateUrl: 'templates/naruto.tpl.html'
    })
    .state('root.single', {
      url: '/single/:narutoId',
      controller: 'NarutoSingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    .state('root.bleach', {
      url: '/bleach',
      controller: 'BleachController',
      templateUrl: 'templates/bleach.tpl.html'
    })
    .state('root.single2', {
      url: '/single2/:bleachId',
      controller: 'BleachSingleController',
      templateUrl: 'templates/single2.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })
    .state('root.edit', {
      url: '/edit/:narutoId',
      controller: 'EditController',
      templateUrl: 'templates/edit.tpl.html'
    })
    .state('root.edit2', {
      url: '/edit2:/bleachId',
      controller: 'EditController2',
      templateUrl: 'templates/edit2.tpl.html'
    })
 ;

};
config.$inject = ["$stateProvider", "$urlRouterProvider"];

export default config;