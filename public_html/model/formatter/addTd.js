//The function generates <td></td> elements of count tdCount and with the inner Html from array tdInnerHtml
exports.addTdWithHtml = function(tdCount,tdInnerHtml) {
if(isNaN(tdCount)){
    throw new Error("tdCount is not a Number");
}
if(!Array.isArray(tdInnerHtml)){
    throw new Error("tdInnerHtml is not an Array");
}

if(tdCount>tdInnerHtml.length){
    throw new Error("tdCount should be less or equal then length of tdInnerHtml. You have: tdCount="+tdCount+" and tdInnerHtml's length is "+tdInnerHtml.length);
}
var output="";

for(i=0;i<tdCount;i++){
    output+="<td>"+tdInnerHtml[i]+"</td>";
};
return output;
};


//The function generates <td></td> elements, each of them has corresponding class from
//tdClasses, which depends on conditions on targets. Conditions are checked from the array condIntervals
exports.addTdWithClass = function(tdClasses,condIntervals,targets) {
if(!Array.isArray(tdClasses)){
    throw new Error("tdClasses is not an Array");
}
if(!Array.isArray(condIntervals)){
    throw new Error("condIntervals is not an Array");
}
if(tdClasses.length != (condIntervals.length+1)){
    throw new Error("Length of tdClasses is not equal to the length of the array condIntervals+1. You have: Length of tdClasses="+tdClasses.length+" and condIntervals's length is "+condIntervals.length);
}

var output="";

for(var key in targets){
    if(targets[key]<=condIntervals[0]){
               output+="<td class='"+tdClasses[0]+"'></td>";
            }
            else if(targets[key]>condIntervals[0]&&targets[key]<=condIntervals[1]){
               output+="<td class='"+tdClasses[1]+"'></td>";
            }
            else{
               output+="<td class='"+tdClasses[2]+"'></td>";
            }
};
return output;
};
















