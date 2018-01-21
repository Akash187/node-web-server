const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    //res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs',{
        pageTitle : 'Home Page',
        greeting : 'Welcome to my website',
        currentYear : new Date().getFullYear()
    });
});

app.get('/about', (req,res) => {
   res.render('about.hbs',{
       pageTitle : 'About Page',
       currentYear : new Date().getFullYear()
   });
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'Unable to handle request.'
    })
});

app.listen(3000, () => {
    console.log('Server is up and running at port 3000');
});


