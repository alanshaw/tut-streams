var http = require("http")

function sendRequest (i) {
  console.log("Sending request", i)

  http.get("http://localhost:3000", function (res) {
    console.log("Got response", i, ":", res.statusCode)
    res.on("data", function () { console.log("Got a chunk", i) })
  }).on("error", function (er) {
    console.log("Got error: " + er.message)
  })
}

http.globalAgent.maxSockets = 100

for (var i = 0; i < 100; i++) {
  sendRequest(i)
}
