import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var jj = this.store.findAll('employee');
		console.log(jj);
		return jj; 
	},
});
