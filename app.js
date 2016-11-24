var express = require("express");
var os = require("os");

var app = express();

var infosystem = {
    ipadress: "",
    language: "",
    software: ""
    
};

app.get('/', function (req, res) {
    infosystem.ipadress = req.connection.remoteAddress;
    infosystem.language = req.headers["accept-language"];
    infosystem.software = os.arch();
    res.send(infosystem);
});

app.listen(process.env.PORT || 5000, function () {
    console.log("Server is running !");
});
