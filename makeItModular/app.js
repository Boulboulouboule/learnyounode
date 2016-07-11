var module = require('./module.js'),
path = process.argv[2],
filter = process.argv[3]

/*
 * Définition de la fonction de callback.
 * Peut etre fait directement lors de l'appel de la contion sous cette forme :
 * module(path, filter, function(err, list){...})
 * => Passée en argument, cette fonction sera disponible dans le fichier module.js sous
 * le nom du 3e argument (callback)
 */
var callback = function(err, list) {
  if (err) {
    console.log("An error occured : "+err);
    return
  }
  list.forEach(function(value){
    console.log(value);
  })
}

module(path, filter, callback)
