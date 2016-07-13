import Ember from 'ember';

/* Important!
 * Although we said that 'remote-paginated', our component is doing everything in local.
 * The main concern of this demo is to show how we can code a remote-paginated table. So template of this component
 *  should be emphasized, the following code is just a mock!
 */
export default Ember.Component.extend({
  currentPage:0,
  pageSize:3,

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
    },
    selectionChanged:function(selectedRows){
      this.set('selectedRows', selectedRows);
    }
  }
});
