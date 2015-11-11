import angular from 'angular';
import 'angular-ui-router';
import HomeController from './controllers/home.controller';
import SignUpController from './controllers/signup.controller';
import AboutController from './controllers/about.controller';
import ContactController from './controllers/contact.controller';
import NarutoController from './controllers/naruto.controller';



import config from './config';





angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'ApD2tNdTPDdv0HW8XEQjZpWgwaJYwcGZzN30doW1',
        'X-Parse-REST-API-Key': 'p0BfgYREvmjZ1uJ4SBNtA8OdtS1vVSDygCnnPYKM'
      }
    }
  })
  .config(config)
  .controller('HomeController', HomeController)
  .controller('NarutoController', NarutoController)
  .controller('SignUpController', SignUpController)
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController);


