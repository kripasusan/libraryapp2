const express  = require('express');
const cors = require('cors');
const InitiateMongoServer = require('./db/mongoose');
InitiateMongoServer();
const jwt = require('jsonwebtoken');

const UserData = require('./src/models/userData');
const BookData = require('./src/models/bookData');
const AuthorData = require('./src/models/authorData');
var app = new express();

app.use(cors());
app.use(express.json());
console.log("hi");
email = "admin@gmail.com";
password = "1234";

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
      }
      let token = req.headers.authorization.split(' ')[1]
      if(token == 'null'){
        return res.status(401).send('Unauthorized request');
      }
      let payload = jwt.verify(token, 'secretKey')
      if(!payload){
        return res.status(401).send('Unauthorized request');
      }
      req.userId = payload.subject;
      next();
}

app.post('/newuser', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var user = {
        fname : req.body.user.fname,
        lname : req.body.user.lname,
        email : req.body.user.email,
        password : req.body.user.password
    }
    var user = new UserData(user);
    user.save();
})

app.post('/login', (req, res) => {
    let userData = req.body;
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS');
    UserData.findOne({email: userData.email})
    .then(function(user){
        if(user.password == userData.password){
            let payload = {subject:email+password};
            let token = jwt.sign(payload,'secretKey');
            res.status(200).send({token});
        }
        else{
            res.status(401).send('Invalid Password');
        }
    })
    .catch(function(){
        res.status(401).send('Invalid Email');
    }) 
});

app.get("/books", verifyToken, function (req, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS');
    BookData.find()
            .then(function(bookdata)
            {
                res.send(bookdata);
            });
    })
    app.post("/addbooks", verifyToken, function (req,res) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        var book = {
            title: req.body.book.title,
            genre: req.body.book.genre,
            author: req.body.book.author,
            image: req.body.book.image,
            description: req.body.book.description

        };

        var book = BookData(book);
        book.save();
        console.log(book);
    });

    app.post("/addauthors", verifyToken, function(req,res) {
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Methods: GET, POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        var author = {
            name: req.body.author.name,
            born: req.body.author.born,
            nationality: req.body.author.nationality,
            description: req.body.author.description,
            image: req.body.author.image
        };

        var author = AuthorData(author);
        author.save();
        console.log(author);
    });
    app.put('/edit-books', (req, res)=>{
        console.log(req.body)
        id = req.body._id,
        title = req.body.title,
        author = req.body.author,
        genre = req.body.genre,
        image = req.body.image,
        description = req.body.description
        BookData.findByIdAndUpdate({"_id":id}, {$set:{ "title" : title, "author" : author, "image" : image, "genre" : genre, "description" : description}})
        .then(function (){
            res.send();
        })
    });

    app.put('/edit-authors',(req, res)=>{
        console.log(req.body)
        id = req.body._id,
        name = req.body.name,
        nationality = req.body.nationality,
        description = req.body.description,
        born = req.body.born,
        image = req.body.image
        AuthorData.findByIdAndUpdate({"_id":id}, {$set:{ "name" : name, "nationality" : nationality,"born" : born, "image" : image, "description" : description}})
        .then(function (){
            res.send();
        })
    });

    app.get("/authors", verifyToken, function(req, res){
        res.header("Access-Control-Allow-Origin",'*');
        res.header("Access-Control-Allow-Methods: GET,POST, PATCH,PUT,DELETE,OPTIONS");
        AuthorData.find()
                .then(function(authors){
                    res.send(authors);
                });
    });

    app.get('/book/:id', function(req, res){
        const id = req.params.id;
        BookData.findOne({"_id":id})
        .then((book)=>{
              res.send(book);
          });
      });
    
    app.get('/author/:id', function(req, res){
        const id = req.params.id;
        AuthorData.findOne({"_id":id})
        .then((author)=>{
              res.send(author);
          });
      });
    
    app.delete('/delete-authors/:id', function(req,res){
        const id = req.params.id;
        AuthorData.remove({_id: id})
        .then(function(){
            res.status(200).json({id});
        })
    });

    app.delete('/delete-books/:id', function(req,res) {
        const id = req.params.id;
        BookData.remove({_id:id})
        .then(function(){
            res.status(200).json({id});
        })
    });

    app.get('/getuser/:email', function(req, res){
        const email = req.params.email;
        UserData.findOne({"email":email})
        .then((user)=>{
              res.send(user);
          });
      });

    app.listen(3000, function(){
        console.log("Listening on port 3000");
    });