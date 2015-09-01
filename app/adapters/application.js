import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	
	headers: { 
           'Accept': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    }
});
