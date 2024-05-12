import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('account', { path: '/account/:login' }, function() {
    this.route('payouts');
    this.route('rewards');
    this.route('settings');
    this.route('mining');
  });
  this.route('not-found');

  this.route('blocks', function() {
    this.route('immature');
    this.route('pending');
  });

  this.route('help');
  this.route('payments');
  this.route('miners');
  this.route('finders');
  this.route('about');
  this.route('chart');
});

export default Router;
