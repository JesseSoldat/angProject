import angular from 'angular';
import 'angular-ui-router';
//Controller
import HomeController from './controllers/home.controller';

import NarutoController from './controllers/naruto.controller';
import NarutoSingleController from './controllers/naruto.single.controller';

import BleachController from './controllers/bleach.controller';
import BleachSingleController from './controllers/bleach.single.controller';


import AddController from './controllers/add.controller';
import AddController2 from './controllers/add.controller2';

//Config
import config from './config';
//Service
import NarutoService from './services/naruto.service';
import BleachService from './services/bleach.service';



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
  .controller('AddController', AddController)
  .controller('AddController2', AddController2)

  .controller('NarutoSingleController', NarutoSingleController)
  .controller('BleachController', BleachController)
  .controller('BleachSingleController', BleachSingleController)
  

  .service('NarutoService', NarutoService)
  .service('BleachService', BleachService)

;


