import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'table',
  classNames:'table table-striped table-bordered table-hover table-responsive table-condensed',

  showHeader:true,
  showFooter:false,

  singleSelection:Ember.computed.equal('selectionMode','single'),

  notSelectedRows:Ember.computed.setDiff('data','selectedRows'),
  isAllSelected:Ember.computed.empty('notSelectedRows'),

  selectionChanged:Ember.K,

  init(){
    this._super(...arguments);
    this.set('selectedRows',Ember.makeArray());
  },

  actions:{
    selected:function(row){
      if(this.get('selectionMode')==='single'){
        this.get('selectedRows').clear();
      }
      this.get('selectedRows').pushObject(row);
      this.get('selectionChanged')(this.get('selectedRows'));
    },
    deselected:function(row){
      this.get('selectedRows').removeObject(row);
      this.get('selectionChanged')(this.get('selectedRows'));
    },
    selectAll:function(){
      if(this.get('selectionMode')==='single'){
        return false;
      }
      this.get('selectedRows').pushObjects(this.get('data'));
      this.get('selectionChanged')(this.get('selectedRows'));
    },
    deselectAll:function(){
      this.get('selectedRows').clear();
      this.get('selectionChanged')(this.get('selectedRows'));
    }
  }
});
