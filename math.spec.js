var chai = require('chai');
var assert = chai.assert;

describe('My Math:', function() {
  var x = 2;
  var y = 2;
  it('sum equal to 4', function() {
    var sum = x + y;
    assert.equal('4', sum, 'sum equals 4');
  });
  it('product equal to 4', function() {
    var product = 2 * 2;
    assert.equal('4', product, 'product equals 4');
  });
});
