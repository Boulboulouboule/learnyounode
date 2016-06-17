var result = 0;
process.argv.forEach(function(val){
    Number.isInteger(parseInt(val)) ? result += parseInt(val) : ""/*console.log(val+' is not a number but a '+typeof val)*/;
});

console.log(result);