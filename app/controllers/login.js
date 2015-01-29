import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    authenticate: function() {
      var user = Ember.Object.create({
        email: this.get('model.email'),
        password: this.get('model.password')
      });

      // Dumping input to the console for now...
      console.log(user);

      this.transitionToRoute('channels');
    }
  }
});
