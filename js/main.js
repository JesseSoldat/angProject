import angular from 'angular';
import 'angular-ui-router';
import SiteController from './controllers/site.controller';
import config from './config';





angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('SiteController', SiteController);
