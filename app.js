const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/BlogRoutes');   




const password = encodeURIComponent("izmejoker@485");

const dbUrl = `mongodb+srv://heinhtetjkrz:${password}@nodetut.pwzbokl.mongodb.net/?retryWrites=true&w=majority&appName=nodetut`

mongoose.connect(dbUrl).then((result)=> app.listen(3000)).catch((err)=> console.log(err));

app.set('view engine','ejs');




app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.redirect('/blogs');
})

app.get('/about',(req,res)=>{
    // res.sendFile('./views/about.html',{root:__dirname});
    res.render('about',{title:"About"});
    // res.send('<p>About page</p>')
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

app.use('/blogs',blogRoutes)

app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
})