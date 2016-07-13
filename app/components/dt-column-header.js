import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'th',

  sortKey:Ember.computed.alias('propertyName'),

  sortDirection:Ember.computed('sortedColumns.[]', 'sortKey', function(){
    let sortDefinition = this.get('sortedColumns').findBy('sortKey', this.get('sortKey'));
    if(sortDefinition){
      return sortDefinition.sortDirection;
    }else{
      return undefined;
    }
  }),

  iconClass:Ember.computed('sortDirection', function(){
    let sortDirection = this.get('sortDirection');
    if(sortDirection){
      if(sortDirection==='asc'){
        return 'glyphicon glyphicon-arrow-up';
      }else if(sortDirection==='desc'){
        return 'glyphicon glyphicon-arrow-down';
      }
    }
    return '';
  }),

  click(){
    if(!this.get('sortable')){
      return;
    }
    let sortKey = this.get('sortKey');
    if(sortKey){
      (this.get('sortRequested')||Ember.K)(sortKey);
    }
  }

});
