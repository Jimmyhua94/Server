var express = require('express');
var parser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(parser.json());

app.post('/', function(req,res){
    console.log(req.body);
    fs.writeFile('form/'+req.body.email+'-'+req.body.month+'-'+req.body.day+'-'+req.body.year+'-'+req.body.time+'.json',JSON.stringify(req.body),function(err){
        if(err){
 res.end('{"success":false,"message":"Failed woth error:"'+err+'}');
console.log('error');
}
        else{
 res.end('{"success":true,"message":"Form was sent successfully!"}');
console.log('success');
}
    });
});

app.use(express.static('public'));

app.use(function(req,res,next){
    res.status(404).sendFile('public/nojs/404.html',{root: __dirname});
});

app.listen(80,function(){
    console.log('Server started on port 80');
});
