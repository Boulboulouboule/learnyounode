var fs = require('fs');

function countNewLines(file) {
    var buffer = fs.readFileSync(file).toString();
    var lines = buffer.split('\n');
    console.log(lines.length-1);
}
countNewLines(process.argv[2]);