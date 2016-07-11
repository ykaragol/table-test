import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {name:'Tim', surname:'Duncan', age:34, city:'London'},
      {name:'Lucas',surname: 'Don', age:24, city: 'Paris'},
      {name:'Michael',surname:'Jordan', age:25, city:'Munich'}
    ];
  }
});
