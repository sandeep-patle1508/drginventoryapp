import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('inventorytypes', function () {
  });
  this.resource('employees', function(){});
});

export default Router;
