var assert = require("assert");
var matchers = require("../model/validation/Matchers.js");

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
 

describe('Matchers#matchContinentName()', function () {
    it('should return corresponding continent name of the passed argument', function (done) {
    var continent;
    continent = matchers.matchContinentName(0);
    assert.equal(continent, "Africa");
    continent = matchers.matchContinentName(1);
    assert.equal(continent, "Antarctica");
    continent = matchers.matchContinentName(2);
    assert.equal(continent, "Asia");
    continent = matchers.matchContinentName(3);
    assert.equal(continent, "Europe");
    continent = matchers.matchContinentName(4);
    assert.equal(continent, "North America");
    continent = matchers.matchContinentName(5);
    assert.equal(continent, "Oceania");
    continent = matchers.matchContinentName(6);
    assert.equal(continent, "South America");
    continent = matchers.matchContinentName("SomethingElse");
    assert.equal(continent, "%");
    continent = matchers.matchContinentName("7");
    assert.equal(continent, "%");
    done();
   });
});


describe('Matchers#matchLifeExpectancyStatement()', function () {
    it('should return corresponding continent name of the passed argument', function (done) {
    var statment;
    statment = matchers.matchLifeExpectancyStatement(0);
    assert.equal(statment, "");
    statment = matchers.matchLifeExpectancyStatement(1);
    assert.equal(statment, "AND country.`LifeExpectancy`<= 55");
    statment = matchers.matchLifeExpectancyStatement(2);
    assert.equal(statment, "AND `country`.`LifeExpectancy`>55 AND country.`LifeExpectancy`<=70");
    statment = matchers.matchLifeExpectancyStatement(3);
    assert.equal(statment, "AND `country`.`LifeExpectancy`>70");
    statment = matchers.matchLifeExpectancyStatement("somethingElse");
    assert.equal(statment, "");
    statment = matchers.matchLifeExpectancyStatement(9);
    assert.equal(statment, "");
    done();
   });
});


//For error testing
////This tests if the function throws error, when not array is passed through the function
//describe('Checkers#outputExists()', function () {
//    it('should throw', function (done) {
//    assert.throws(function() { checkers.outputExists({}); }, Error);
//    done();
//    });
//});