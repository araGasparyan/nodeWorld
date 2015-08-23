//The function checks whether the output is an empty
exports.outputExists = function(output) {
    if(!Array.isArray(output)){
        throw new Error("function outputExists should have array as an argument.");
    }
    if(output.length>0){
        return true;
    }else {
        return false;
    }
};



