var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
var answer = 43;

describe('Expects', function() {
  it("should evaluate type, equality and lengths", function() {
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.lengthOf(3);
    expect(beverages).to.have.property('tea').with.lengthOf(3);
  });
  it("should fail", function() {
    // AssertionError: expected 43 to equal 42.
    expect(answer).to.equal(42);
  });
  it("should fail with optional message", function() {
    // AssertionError: topic [answer]: expected 43 to equal 42.
    expect(answer, 'topic [answer]').to.equal(42);
  });
});
