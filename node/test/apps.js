var http = require('http')
var fs = require('fs')
var server = http.createServer(function (request, response){
	console.log('client request URL:', request.url);
})

console.log(server)