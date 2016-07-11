import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'th',

  actions:{
    change:function(checked){
      let actionName=checked ? 'selected' : 'deselected';
      let action = this.get(actionName) || Ember.K;
      action();
    }
  }
});
