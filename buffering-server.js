var http = require("http")
var fs = require("fs")

http.createServer(function (req, res) {
  fs.readFile(__dirname + "/big.json", function (er, json) {
    if (er) throw er
    res.end(json)
  })
}).listen(3000)
