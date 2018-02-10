var net = require("net");

var server = net.createServer(function(socket) {
  
  function fixDigi(n) {
    return ("0" + n).slice(-2); 
  }
  
  var date = new Date();
  var str = "";
  str += date.getFullYear() + "-";
  str += fixDigi(date.getMonth() + 1) + "-";
  str += fixDigi(date.getDate()) + " ";
  str += fixDigi(date.getHours()) + ":";
  str += fixDigi(date.getMinutes());
  socket.write(str);
  
  socket.end("\n");
});

server.listen(+process.argv[2]);
