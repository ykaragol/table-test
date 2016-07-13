import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('remotepaginated-table', 'Integration | Component | remotepaginated table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{remotepaginated-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#remotepaginated-table}}
      template block text
    {{/remotepaginated-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
