import Ember from 'ember';

export default Ember.Component.extend({

  currentPage:0,

  paginatedData:Ember.computed('data', 'pageSize', 'currentPage', function(){
    let data = this.get('data');
    let pageSize = this.get('pageSize');
    let currentPage = this.get('currentPage');

    let start= currentPage * pageSize;
    let end = (currentPage +1) * pageSize;
    return data.slice(start, end);
  }),

  actions:{
    previous:function(){
      this.decrementProperty('currentPage');
      (this.get('previous')||Ember.K)();
    },
    next:function(){
      this.incrementProperty('currentPage');
      (this.get('next')||Ember.K)();
    }
  }
});
