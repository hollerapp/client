import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    createAccount: function() {
      var self = this;

      var credentials = Ember.Object.create({
        identification: this.get('model.email'),
        password: this.get('model.password')
      });

      // Dumping input to the console for now...
      console.log(credentials);

      this.transitionToRoute('channels');
    }
  }
});
