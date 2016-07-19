var express = require('express');
var app = express();
var fs = require("fs");

app.get('/downloadfile', function (req, res) {
	var filename = req.query.name;
   fs.readFile( __dirname + "/public/"+filename, 'utf8', function (err, data) {
       console.log( data );
       res.setHeader('Content-Disposition', 'attachment; filename="'+filename+'"');
       res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})