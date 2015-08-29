//The function returns the name of the continent of the provided id
exports.matchContinentName = function(continenetNum) {
var continenetName;
continenetNum = continenetNum.toString();
  switch (continenetNum) {
    case '0':
         continenetName='Africa';
        break;
    case '1':
         continenetName='Antarctica';
        break;
    case '2':
         continenetName='Asia';
        break;
    case '3':
         continenetName='Europe';
        break;
    case '4':
         continenetName='North America';
        break;
    case '5':
         continenetName='Oceania';
        break;
    case '6':
         continenetName='South America';
        break;
    default:
        continenetName='%';
}
return continenetName;
};


//The function returns the statment of the provided id
exports.matchLifeExpectancyStatement = function(lifeExpectancy) {
var statement;
lifeExpectancy = lifeExpectancy.toString();
switch (lifeExpectancy) {
    case '0':
        statement='';
        break;
    case '1':
        statement='AND country.`LifeExpectancy`<= 55';
        break;
    case '2':
        statement='AND `country`.`LifeExpectancy`>55 AND country.`LifeExpectancy`<=70';
        break;
    case '3':
        statement='AND `country`.`LifeExpectancy`>70';
        break;
    default:
        statement='';
}
return statement;
};

//The function returns picture's name of the continent of the provided continent
exports.matchContinentPicture = function(continet) {
var continenetPictureName;
  switch (continet) {
    case 'Africa':
         continenetPictureName='Africa.png';
        break;
    case 'Antarctica':
         continenetPictureName='Antarctica.png';
        break;
    case 'Asia':
         continenetPictureName='Asia.png';
        break;
    case 'Europe':
         continenetPictureName='Europe.jpg';
        break;
    case 'North America':
         continenetPictureName='North_America.png';
        break;
    case 'Oceania':
         continenetPictureName='Oceania.png';
        break;
    case 'South America':
         continenetPictureName='South_America.png';
        break;
    default:
        continenetPictureName='';
}
return continenetPictureName;
};