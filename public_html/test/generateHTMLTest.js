var assert = require("assert");
var generateHTML = require("../model/formatter/generateHTML.js");
var addTd = require("../model/formatter/addTd.js");





//This test the output of the function, when the 3rd argument is null
describe('generateHTML#generateTable(result, className, additionalHeaders, targetKeys)', function () {
    it('should return <table> element with corresponding rows, when the 3-rd argument of the function is null ', function (done) {
    assert.equal(generateHTML.generateTable([{
            name : "Ara",
            lastname : "Gasparyan",
            age : 28
    }], "className", null,[]),"<table class='className'><tr><td>name</td><td>lastname</td><td>age</td></tr><tr><td>Ara</td><td>Gasparyan</td><td>28</td></tr></table>");
    assert.equal(generateHTML.generateTable([
    {
            name : "Ara",
            lastname : "Gasparyan",
            age : 28
    },
    {
            name : "Armen",
            lastname : "Sargsyan",
            age : 31
    }
    ], "className1", null, []),"<table class='className1'><tr><td>name</td><td>lastname</td><td>age</td></tr><tr><td>Ara</td><td>Gasparyan</td><td>28</td></tr><tr><td>Armen</td><td>Sargsyan</td><td>31</td></tr></table>");
    done();
   });
});

//This test checks the output of the function, when result of the query is empty and additionalHeaders is null
describe('generateHTML#generateTable(result, className, additionalHeaders, targetKeys)', function () {
    it('should return string "0 results" > ', function (done) {
    assert.equal(generateHTML.generateTable([], "className", null,[]),"0 results");
    done();
   });
});

//This test checks the output of the function, when result of the query is empty and additionalHeaders is not null
describe('generateHTML#generateTable(result, className, additionalHeaders, targetKeys)', function () {
    it('should return string "0 results" > ', function (done) {
    assert.equal(generateHTML.generateTable([], "className", {}, []),"0 results");
    done();
   });
});

//This test the output of the function, when the 3rd argument is not null
describe('generateHTML#generateTable(result, className, additionalHeaders, targetKeys)', function () {
    it('should return <table> element with corresponding rows, when the 3-rd argument of the function is null ', function (done) {
    assert.equal(generateHTML.generateTable([{
            name : "Ara",
            lastname : "Gasparyan",
            age : 28
    }], "className", {tdCount: 2, tdInnerHtml: ['Icon1','Icon2'],tdClasses:['class1', 'class2', 'class3'],condIntervals:[1000,5000]},['age']),"<table class='className'><tr><td>name</td>"+
        "<td>lastname</td><td>age</td><td>Icon1</td><td>Icon2</td></tr><tr><td>Ara</td>"+
        "<td>Gasparyan</td><td>28</td><td class='class1'></td></tr></table>");

assert.equal(generateHTML.generateTable([{
            name : "Ara",
            lastname : "Gasparyan",
            age : 28, 
            other: 2500
    }], "className", {tdCount: 2, tdInnerHtml: ['Icon1','Icon2'],tdClasses:['class1', 'class2', 'class3'],condIntervals:[1000,5000]},['age', 'other']),"<table class='className'><tr><td>name</td>"+
        "<td>lastname</td><td>age</td><td>other</td><td>Icon1</td><td>Icon2</td></tr><tr><td>Ara</td>"+
        "<td>Gasparyan</td><td>28</td><td>2500</td><td class='class1'></td><td class='class2'></td></tr></table>");


    var tmp = [
    {
            name : "Ara",
            lastname : "Gasparyan",
            age : 20
    },
    {
            name : "Armen",
            lastname : "Sargsyan",
            age : 31
    }
    ];
        assert.equal(generateHTML.generateTable(tmp, "className1", {tdCount: 2, tdInnerHtml: ['Icon1','Icon2'],tdClasses:['class1', 'class2', 'class3'],condIntervals:[25,30]},['age']),"<table class='className1'><tr><td>name</td><td>lastname</td><td>age</td><td>Icon1</td><td>Icon2</td></tr>"+
            "<tr><td>Ara</td><td>Gasparyan</td><td>20</td><td class='class1'></td></tr><tr><td>Armen</td><td>Sargsyan</td><td>31</td><td class='class3'></td></tr></table>");
    done();
   });
});

