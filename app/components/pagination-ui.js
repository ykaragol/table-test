import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    previous:function(){
      (this.get('previous')||Ember.K)();
    },
    next:function(){
      (this.get('next')||Ember.K)();
    }
  }
});
