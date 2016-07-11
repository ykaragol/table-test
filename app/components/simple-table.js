import Ember from 'ember';

export default Ember.Component.extend({


  actions:{
    selectionChanged:function(selectedRows){
      this.set('selectedRows', selectedRows);
    }
  }
});
