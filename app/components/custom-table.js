import Ember from 'ember';

export default Ember.Component.extend({

  ages:Ember.computed.mapBy('selectedRows','age'),
  totalAges:Ember.computed.sum('ages'),

  actions:{
    selectionChanged:function(selectedRows){
      this.set('selectedRows', selectedRows);
    }
  }
});
