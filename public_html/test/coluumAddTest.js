var assert = require("assert");
var addTd = require("../model/formatter/addTd.js");

 
//This tests if the function throws error, if tdCount is not a number
describe('addTd#addTdWithHtml(tdCount,tdInnerHtml)', function () {
    it('should throw error if tdCount is not a number', function (done) {
    assert.throws(function() { addTd.addTdWithHtml("not a number",[]); }, Error);
    assert.throws(function() { addTd.addTdWithHtml({},[]); }, Error);
    assert.throws(function() { addTd.addTdWithHtml("7a",[]); }, Error);
    done();
   });
});


//This tests if the function throws error, if tdInnerHtml is not an array
describe('addTd#addTdWithHtml(tdCount,tdInnerHtml)', function () {
    it('should throw error if tdInnerHtml is not an array', function (done) {
    assert.throws(function() { addTd.addTdWithHtml(1,{}); }, Error);
    assert.throws(function() { addTd.addTdWithHtml(1,"aaa"); }, Error);
    assert.throws(function() { addTd.addTdWithHtml(1,8); }, Error);
    done();
   });
});
 
 
//This tests if the function throws error, when tdCount is greather then length of array tdInnerHtml
describe('addTd#addTdWithHtml(tdCount,tdInnerHtml)', function () {
    it('should throw error when tdCount is greather then length of tdInnerHtml', function (done) {
    assert.throws(function() { addTd.addTdWithHtml(4,[8]); }, Error);
    assert.throws(function() { addTd.addTdWithHtml(3,[1,2]); }, Error);
    assert.throws(function() { addTd.addTdWithHtml(2,[0]); }, Error);
    done();
   });
});
 
 
//This test checks the output of the function
describe('addTd#addTdWithHtml(tdCount,tdInnerHtml)', function () {
    it('should return tdCount <td></td> elements with the inner Html from array tdInnerHtml ', function (done) {
    assert.equal(addTd.addTdWithHtml(1,["Icon"]),"<td>Icon</td>");
    assert.equal(addTd.addTdWithHtml(0,["Icon"]),"");
    assert.equal(addTd.addTdWithHtml(3,["Icon1","Icon2","Icon3"]),"<td>Icon1</td><td>Icon2</td><td>Icon3</td>");
    done();
   });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//This tests if the function throws error, if tdInnerHtml is not an array
describe('addTd#addTdWithClass(tdClasses,condIntervals,targets)', function () {
    it('should throw error if tdClasses is not an array', function (done) {
    assert.throws(function() { addTd.addTdWithClass({},[],[]); }, Error);
    assert.throws(function() { addTd.addTdWithClass("aaa",[],[]); }, Error);
    assert.throws(function() { addTd.addTdWithClass(8,[],[]); }, Error);
    done();
   });
});

//This tests if the function throws error, if condIntervals is not an array
describe('addTd#addTdWithClass(tdClasses,condIntervals,targets)', function () {
    it('should throw error if condIntervals is not an array', function (done) {
    assert.throws(function() { addTd.addTdWithClass([],{},[]); }, Error);
    assert.throws(function() { addTd.addTdWithClass([],"aaa",[]); }, Error);
    assert.throws(function() { addTd.addTdWithClass([],8,[]); }, Error);
    done();
   });
});

//This tests if the function throws error, if the length of tdInnerHtml is not equal to the length of the array condIntervals+1
describe('addTd#addTdWithClass(tdClasses,condIntervals,targets)', function () {
    it('should throw error when the length of tdInnerHtml is not equal to the length of the array condIntervals+1', function (done) {
    assert.throws(function() { addTd.addTdWithClass([],[],[]); }, Error);
    assert.throws(function() { addTd.addTdWithClass([1],[0,"aaa",{}],[]); }, Error);
    assert.throws(function() { addTd.addTdWithClass([1,2,3],[1],[]); }, Error);
    done();
   });
});

//This test checks the output of the function
describe('addTd#addTdWithClass(tdClasses,condIntervals,targets)', function () {
    it('should generate <td></td> elements, each of them has corresponding class from tdClasses, which depends on conditions on targets. Conditions are checked from the array condIntervals', function (done) {
    assert.equal(addTd.addTdWithClass(["town","city","bigCity"],[100000, 1000000],[9000]),"<td class='town'></td>");
    assert.equal(addTd.addTdWithClass(["town","city","bigCity"],[100000, 1000000],[100001]),"<td class='city'></td>");
    assert.equal(addTd.addTdWithClass(["town","city","bigCity"],[100000, 1000000],[1000001]),"<td class='bigCity'></td>");
    assert.equal(addTd.addTdWithClass(["town","city","bigCity"],[100000, 1000000],{prop1:101}),"<td class='town'></td>");        
    assert.equal(addTd.addTdWithClass(["town","city","bigCity"],[100000, 1000000],[9000,100001,11111111]),"<td class='town'></td><td class='city'></td><td class='bigCity'></td>");        
    done();
   });
});