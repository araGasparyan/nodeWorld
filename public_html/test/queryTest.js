var assert = require("assert");
var db = require("../model/db/ConecctDB.js");

 

describe('ConecctDB#getCountriesWithLetter(letter,limit,callback)', function () {
    it('should return json - which is an array of first (by alphavite) limit countries which begin with letter letter ', function (done) {
    db.getCountriesWithLetter("a", 2 , function(rows){
        assert.deepEqual(rows, [{Name : 'Afghanistan'}, {Name : 'Albania'}]);
            db.getCountriesWithLetter("U", 1 , function(rows){
            assert.deepEqual(rows, [{Name : 'Uganda'}]);
                db.getCountriesWithLetter("U", 6 , function(rows){
                assert.deepEqual(rows.length, 6);
                    db.getCountriesWithLetter("g", 3 , function(rows){
                    assert.deepEqual(rows, [{Name : 'Gabon'}, {Name : 'Gambia'}, {Name : 'Georgia'}]);
                    done();
                    });
                });
            });
    });
    });
});


describe('ConecctDB#checkLogin(login, password, callback)', function () {
    it('should check exictence of login and password of the searched user ', function (done) {
    db.checkLogin("test", "test", function(rows){
        assert.deepEqual(rows.length, 1);
            db.checkLogin("node", "fail" , function(rows){
                assert.deepEqual(rows.length, 0);
                done();
                    });
                });
            });
});



describe('ConecctDB#getCountryInfo(countryName,callback)', function () {
    it('should return the attributes of the country', function (done) {
        db.getCountryInfo("Eldorado", function(rows){
        assert.deepEqual(rows.length, 0);
            db.getCountryInfo("France", function(rows){
            assert.deepEqual(rows.length, 1);
                db.getCountryInfo("France" , function(rows){
                assert.deepEqual(rows, [{ GovernmentForm : 'Republic', Continent : 'Europe', HeadOfState : 'Jacques Chirac', IndepYear : 843, LifeExpectancy : 78.8, LocalName : "France",  Population : 59225700, Region : "Western Europe", capital : "Paris",SurfaceArea : 551500}]);
                done();                                                                                            
                });
            });
        });
    });
});

//This test fails time to time, since the last assertion about France is not matches all the time, this is not actually
//project fail, this is a mocha's problem
describe('ConecctDB#getLanguage(countryName,callback)', function () {
    it('should return the languages of the country', function (done) {
        db.getLanguage("Eldorado", function(rows){
        assert.deepEqual(rows.length, 0);
            db.getLanguage("France", function(rows){
            assert.deepEqual(rows.length, 6);
                db.getLanguage("France" , function(rows){
                assert.deepEqual(rows, [ { Language: 'French', IsOfficial: 'T', Percentage: 93.6 },
                                         { Language: 'Arabic', IsOfficial: 'F', Percentage: 2.5 },
                                         { Language: 'Portuguese', IsOfficial: 'F', Percentage: 1.2 },
                                         { Language: 'Italian', IsOfficial: 'F', Percentage: 0.4 },
                                         { Language: 'Spanish', IsOfficial: 'F', Percentage: 0.4 },
                                         { Language: 'Turkish', IsOfficial: 'F', Percentage: 0.4 } ]);
                                        
                done();                                                                                       
                });
            });
        });
    });
});


describe('ConecctDB#getCities(countryName,callback)', function () {
    it('should return the languages of the country', function (done) {
        db.getCities("Eldorado", function(rows){
        assert.deepEqual(rows.length, 0);
            db.getCities("Armenia", function(rows){
            assert.deepEqual(rows.length, 3);
                db.getCities("Armenia" , function(rows){
                assert.deepEqual(rows, [ { Name: 'Gjumri', District: 'Širak', Population: 211700 },
                                         { Name: 'Vanadzor', District: 'Lori', Population: 172700 },
                                         { Name: 'Yerevan', District: 'Yerevan', Population: 1248700 } ]);
                done();                                                                                            
                });
            });
        });
    });
});



describe('ConecctDB#getRegionsWithLetter(letter,limit,continent,callback)', function () {
    it('should return json - which is an array of first (by alphavite) limit regions (in the current continent) which begin with letter letter ', function (done) {
        db.getRegionsWithLetter("e", 3 , 3, function(rows){
        assert.deepEqual(rows, [{Region : 'Eastern Europe'}]);
            db.getRegionsWithLetter("m", 100 , 2, function(rows){
            assert.deepEqual(rows, [{Region : 'Middle East'}]);
                db.getRegionsWithLetter("M", 6 , 5, function(rows){
                assert.deepEqual(rows, [{Region : 'Melanesia'}, {Region : 'Micronesia'}, {Region : 'Micronesia/Caribbean'}]);
                    db.getRegionsWithLetter("g", 6 ,"5", function(rows){
                    assert.deepEqual(rows, []);
                    done();
                    });
                });
            });
        });
    });
});


describe('ConecctDB#getGovFormsWithLetter(letter,limit,callback)', function () {
    it('should return json - which is an array of first (by alphavite) limit goverment forms which begin with letter letter ', function (done) {
        db.getGovFormsWithLetter("a", 3, function(rows){
        assert.deepEqual(rows, [{GovernmentForm : 'Administrated by the UN'}, {GovernmentForm : 'Autonomous Area'}]);
            db.getGovFormsWithLetter("a", 1, function(rows){
            assert.deepEqual(rows, [{GovernmentForm : 'Administrated by the UN'}]);
                db.getGovFormsWithLetter("s", 3 , function(rows){
                assert.deepEqual(rows, [{GovernmentForm : 'Socialistic Republic'}, {GovernmentForm : 'Socialistic State'}, {GovernmentForm : 'Special Administrative Region of China'}]);
                    db.getGovFormsWithLetter("x", 6 , function(rows){
                    assert.deepEqual(rows, []);
                    done();
                    });
                });
            });
        });
    });
});


describe('ConecctDB#findOrderedCountries(continent, region, surface_min, surface_max, population_min, population_max, life_expectancy, government_form, city_count, languages, callback)', function () {
    it('should return json - which is an array of countries, which were searched by the user in advanced serch form', function (done) {
        db.findOrderedCountries("Europe", "Western Europe", 1000, 10000000, 9000000,50000000000,3,"Federal Republic",5,"aaaa", function(rows){
        assert.deepEqual(rows, [{Name : 'Germany'}]);
            db.findOrderedCountries("Europe", "Western Europe", 1000, 10000000, 9000000,50000000000,3,"Federal Republic",5,"aaaa", function(rows){
            //assert.deepEqual(rows, [{GovernmentForm : 'Administrated by the UN'}]);
                db.findOrderedCountries("Europe", "Western Europe", 1000, 10000000, 9000000,50000000000,3,"Federal Republic",5,"aaaa", function(rows){
                //assert.deepEqual(rows, [{GovernmentForm : 'Socialistic Republic'}, {GovernmentForm : 'Socialistic State'}, {GovernmentForm : 'Special Administrative Region of China'}]);
                    db.findOrderedCountries("Europe", "Western Europe", 1000, 10000000, 9000000,50000000000,3,"Federal Republic",5,"aaaa", function(rows){
                    //assert.deepEqual(rows, []);
                    done();
                    });
                });
            });
        });
    });
});




   
