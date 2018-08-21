var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

// Create a service (the app object is just a callback).
var app = express();
app.use(express.static(__dirname + '/'));

// Create an HTTP service.
http.createServer(app)
  .listen(process.env.PORT || 8080, function() {
    console.log('Servidor iniciado');
    });
