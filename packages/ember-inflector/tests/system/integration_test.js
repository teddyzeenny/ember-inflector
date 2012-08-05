module("ember-inflector.integration",{
  setup: function(){
    Ember.Inflector.reset();
    Ember.Inflector.loadAll();
  },
  tearDown: function(){
    Ember.Inflector.reset();
    Ember.Inflector.clearRules();
  }
});

test("pluralize", function(){
  expect(1);

  equal( Ember.String.pluralize('word'), 'words');
});

test("singularize", function(){
  expect(1);

  equal( Ember.String.singularize('words'), 'word');
});

test("ordinalize", function(){
  expect(2);

  equal( Ember.String.ordinalize(1),   '1st');
  equal( Ember.String.ordinalize('1'), '1st');
});

test("humanize", function(){
  expect(2);

  equal( Ember.String.humanize(''), '');
  equal( Ember.String.humanize('word_table'), 'Word table');
});

test("titleize", function(){
  equal( Ember.String.titleize('word_table'), 'Word Table');
});

test("capitalize", function(){
  expect(3);

  equal(Ember.String.capitalize(''),'');
  equal(Ember.String.capitalize('word'),'Word');
  equal(Ember.String.capitalize('word table'),'Word table');
});

test("tableize", function(){
  expect(4);

  equal(Ember.String.tableize(''),'');
  equal(Ember.String.tableize('word'),'words');
  equal(Ember.String.tableize('word table'),'word_tables');
  equal(Ember.String.tableize('Word Table'),'word_tables');
});

test("classify", function(){
  expect(4);

  equal(Ember.String.classify(''),'');
  equal(Ember.String.classify('word'),'Word');
  equal(Ember.String.classify('words'),'Word');
  equal(Ember.String.classify('word table'),'WordTable');
});