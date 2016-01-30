import { test } from 'qunit';
import moduleForAcceptance from 'solidon/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search');

test('visiting /search', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });
});

test('searching for solidus package', function(assert) {
  visit('/search');

  fillIn('input.search', 'Solidus Devise');
  click('.do-search');

  andThen(function() {
    assert.equal(find('.package:first').text(), 'Solidus Devise');
  });
});