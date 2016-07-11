var result = 0;
//noinspection JSUnresolvedVariable
process.argv.forEach(function(val){
    //noinspection JSUnresolvedFunction
    Number.isInteger(parseInt(val)) ? result += parseInt(val) : ""/*console.log(val+' is not a number but a '+typeof val)*/;
});

console.log(result);