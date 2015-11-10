import angular from 'angular';
import 'angular-ui-router';
import HomeController from './controllers/home.controller';
import SignUpController from './controllers/signup.controller';
import AboutController from './controllers/about.controller';
import ContactController from './controllers/contact.controller';



import config from './config';





angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('SignUpController', SignUpController)
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController);


