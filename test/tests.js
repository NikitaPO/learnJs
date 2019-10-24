const assert = require('chai').assert;
const sinon = require('sinon');
const app = require('../app/index');

describe('pow', function() {

  it("Erects 3 in 4 degree", function() {
    assert.equal( app.pow(3, 4), 81, 'Doesn\'t erects in n degree');
  });

  it('Erects 2 in 3 degree', function(done) {
    assert.equal( app.pow(2, 3), 8, 'Doesn\'t erects in n degree');
  });

  it('Erects 3 in 2 degree', function(done) {
        assert.equal( app.pow(3, 2), 9, 'Doesn\'t erects in n degree');
  });

  it('Erects 1 in 3 degree', function(done) {
    assert.equal( app.pow(1, 3), 1, 'Doesn\'t erects in n degree');
  });

});
