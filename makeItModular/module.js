var fs = require('fs')

/*
 * callback = fonction appelée lors de l'appel de la fonction -> définie lors de cet appel
 */
module.exports = function (path, filter, callback) {
    console.log(callback.toString());
    fs.readdir(path, function (err, data) {
        if (err){
          callback(err)
          return
        }
        var list = filterIt(data, filter)
        var result = callback(null, list);
        return result
    })
}

var filterIt = function (list, filter) {
    var filtered = []
    list.forEach(function (val) {
        var split = val.toString().split('.');
        var ext = split[1];
        if (ext == filter)
            filtered.push(val);
    })
    return filtered
}
