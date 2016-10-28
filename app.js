var PORT = 3000;
var express = require('express');
var app = express;
var port = process.env.PORT || PORT;
app.listen(port, function() {
	console.log("Node.js server running on port %s", port)
});