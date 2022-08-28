
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/blogDB');  // how we connect to the localhost

const port = 3000;

app.listen(port, () => { console.log("server started")});


app.use( express.urlencoded({extended: true,}));  //intiating all of the api we would be using
app.set('view engine', 'ejs');


const blogschema =  new mongoose.Schema({

blogtitle :  String,
blogbody: String

});

const blog =  new mongoose.model("blog",blogschema);



// blogHold.save();

let blogpost = [{head:"tester rrun",Snippet: "seenipe"}];

 // section to get blog data and save it in the db
app.post('/create', (req,res) => {
 
var _blogtitle = String(req.body.blogtitle);
var _blogbody = String(req.body.blogbody);




  const blogHold =  blog({
    blogtitle :_blogtitle,
    blogbody : _blogbody
   } );
    
    blogHold.save();

    blog.find();
blogpost.push({head:blogHold.blogtitle,Snippet: blogHold.blogbody});


  res.redirect('/');


  document.getElementById('deleteblog').onclick(()=>{
    
  })

});


// done



app.get('/',(req,res)=> {

res.render('index', {blogpost:blogpost});

})
  









app.get("/COP3-BLOG",(req,res) =>  {res.render('COP3-BLOG',{blogs:blogpost}); });



app.get("/create",(req,res)=> { res.render('create');} );
    






app.use((req,res)=>{res.status(404).render('404');  // Using status method to get error code and sending out a proper respkon
console.log(Error); }); 










