/**
 * Module Dependencies
 */

var assert = require('assert');
var reverse = require('reverse');

/**
 * Tests
 */

describe('reverse(str)', function() {
  it('should reverse normal strings', function() {
    assert('mulp' == reverse('plum'))
  });

  it('should reverse unicode strings', function() {
    assert('anañam anañam' == reverse('mañana mañana'))
    assert('rab 𝌆 oof' == reverse('foo 𝌆 bar'));

    // native method doesn't work properly
    assert('rab 𝌆 oof' != 'foo 𝌆 bar'.split('').reverse().join(''));
  })
})
