var fs = require('fs'),
folder = process.argv[2]
extension = process.argv[3]

fs.readdir(folder, function callback(err, list){
  filter(list, extension)
})

function filter(list, extension){
  list.forEach(function(val){
    var split = val.toString().split('.');
    var ext = split[1];
    ext == extension ? console.log(val) : ""
  })
}
