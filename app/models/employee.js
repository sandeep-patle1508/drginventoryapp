import DS from 'ember-data';

export default DS.Model.extend({
  emp_no: DS.attr('number'),
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  domain: DS.attr('string'),
  mobile_number: DS.attr('string')
});
