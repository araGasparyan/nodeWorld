var assert = require("assert");
var checkers = require("../model/validation/Checkers.js");

describe('hooks', function() {

  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});
 

describe('Checkers#outputExists()', function () {
    it('should return true when the argument of the method is not empty', function (done) {
    var outputExists = checkers.outputExists([{output:"full"}]);
    assert(outputExists, 'Output is not empty, but the method returns false');
    done();
   });
});


describe('Checkers#outputExists()', function () {
    it('should return false when the argument of the method is empty', function (done) {
    var outputEmpty = checkers.outputExists([]);
    assert(!outputEmpty, 'Output is empty, but the method returns true');
    done();
   });
});

//This tests if the function throws error, when not array is passed through the function
describe('Checkers#outputExists()', function () {
    it('should throw error when not array passes as an argument', function (done) {
    assert.throws(function() { checkers.outputExists({}); }, Error);
    done();
    });
});

  