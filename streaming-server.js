var http = require("http")
var fs = require("fs")

http.createServer(function (req, res) {
  fs.createReadStream(__dirname + "/big.json").pipe(res)
}).listen(3000)
