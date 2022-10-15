const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

// register view engine

// if you want to specify the name of the folder for express to look for the ejs files
// user-- app.set{'views', 'myviews'}

//listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

//redirects
// about-us to about
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

// 404 page
// use funciton fires for every request if it reached this code
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });

});