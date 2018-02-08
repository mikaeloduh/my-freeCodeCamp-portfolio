var fs = require('fs');
var path = require('path');


function extFilter(dict, ext, callback) {
  fs.readdir(dict, function(err, list) {
    if (err) 
      return callback(err);
    
    var filelist = list.filter(d => path.extname(d) === "." + ext);
    
    callback(null, filelist);
  });
}


module.exports = extFilter;
