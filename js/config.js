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
    .state('root.signup', {
      url: '/signup',
      controller: 'SignUpController',
      templateUrl: 'templates/signup.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'AboutController',
      templateUrl: 'templates/about.tpl.html'

    })
    .state('root.contact', {
      url: '/contact',
      controller: 'ContactController',
      templateUrl: 'templates/contact.tpl.html'

    });

};
config.$inject = ["$stateProvider", "$urlRouterProvider"];

export default config;