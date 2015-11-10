let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider 
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'SiteController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'SiteController',
      templateUrl: 'templates/about.tpl.html'

    })
    .state('root.contact', {
      url: '/contact',
      controller: 'SiteController',
      templateUrl: 'templates/contact.tpl.html'

    });

};
config.$inject = ["$stateProvider", "$urlRouterProvider"];

export default config;