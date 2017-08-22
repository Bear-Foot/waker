const http = require("http");
const net = require('net')

net.createServer().listen(process.env.PORT || 3000)

setInterval(function() {
    http.get('http://fortnite-ray.herokuapp.com/');
}, 300000); // every 5 minutes (300000)
