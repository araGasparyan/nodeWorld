var addTd = require("./addTd.js");

//function formats result as a table by taking field names of query-result as the first row and so on.
//The method returns a table if qyery is not empty, othervise it returns string '0 results' 
//The method obtains 4 arguments, the first is result (ex. mysql query-result), which should be formatted.
//The second one, is the class, which the table generated by the method should have.
//The third argument of the method is used when an additional coloumn is needed fot the output-table. If additionalTD is null nothing happens,
//othervise, by using functions addTdWithHtml(tdCount,tdInnerHtml) and addTdWithClass(tdClasses,condIntervals,targets) it is possible
//to generate additional coloumns for the table and fill this columns data, which depends on each row of result.
//The forth argument stands which targetKeys should be used in order to obtain targets for each result row
exports.generateTable = function(result, className, additionalTD, targetKeys) {
var output="";
if(result.length>0){
    var targets = [];
    output+="<table class='"+className+"'>";
    output+="<tr>";
    var fields = [];
    for(var field in result[0]){
        output+="<td>"+field+"</td>";
        fields.push(field);
    }
    
    if(additionalTD!=null){
    output+=addTd.addTdWithHtml(additionalTD.tdCount,additionalTD.tdInnerHtml);
    }
    output+="</tr>";
 
    for(var row in result){
        output+="<tr>";
        for(var field in fields){
            output+="<td>"+result[row][fields[field]]+"</td>";
        }
    if(additionalTD!=null){
    targets = [];
    for(var key in targetKeys){
        targets.push(result[row][targetKeys[key]]);
    }
        output+=addTd.addTdWithClass(additionalTD.tdClasses,additionalTD.condIntervals,targets);
    }
        output+="</tr>";
    }
    
    output+="</table>";
    return output;
} else{
   return '0 results'; 
}
};


