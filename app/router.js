import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // Authentication
  this.route("login");
  this.route("signup");

  // Resources
  this.resource("users", function() {});
  this.resource("messages", function() {});
  this.resource("channels", function() {});
  this.resource("attachments", function() {});
});

export default Router;
