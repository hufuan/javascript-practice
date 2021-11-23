var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

mongoose.connect('mongodb://sh-fuhu-vm1/blogroll');
var Schema = mongoose.Schema;
var BlogSchema = new Schema({
    author: String,
    title: String,
    url: String
});
mongoose.model('Blog', BlogSchema);
var Blog = mongoose.model('Blog');
/*
var blog = new Blog({

    author: 'Michael',
    title: 'Michael\' Blog',
    url: 'http://miahaelsblog.com'
});
blog.save();
 */

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

//Routes
app.get('/api/blogs', function (req,res){

    Blog.find(function (err, docs){
        docs.forEach(function (item){
            console.log('Received a Get request for _id' + item._id);
        })
        res.send(docs);
    })
})
app.post('/api/blogs', function (req, res){
    var blog = new Blog(req.body);
    console.log("Receiced a POST request");
    for(var key in req.body){
        console.log(key + ': ' + req.body[key]);
    }
    blog.save(function (err, doc){
        res.send(doc);
    })
})
app.delete('/api/blogs/:id', function (req, res){
    console.log('Received a DELETE request for _id: ' + req.params.id);
    Blog.remove({_id: req.params.id}, function (err){
        res.send({_id: req.params.id});
    })
})

app.put('/api/blogs/:id', function (req, res){
    console.log('Received an UPDATE request _id:' + req.params.id)
    Blog.update({_id: req.params.id}, req.body, function (err){
        res.send({_id: req.params.ed})
    })
})
var port = 3000;

app.listen(port);

console.log('server on ' + port);