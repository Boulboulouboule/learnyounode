var fs = require('fs')

function countNewLines(file) {
    fs.readFile(file, function done(err, fileContents) {
        lines = fileContents.toString().split('\n').length - 1;
        console.log(lines);
    })
}
countNewLines(process.argv[2])
