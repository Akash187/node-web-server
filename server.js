const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    //res.send('<h1>Hello Express!</h1>');
    res.send({
       name: 'Akash',
       likes: [
           'Biking',
           'Cricket'
       ]
    });
});

app.get('/about', (req,res) => {
   res.send('About page');
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'Unable to handle request.'
    })
});

app.listen(3000, () => {
    console.log('Server is up and running at port 3000');
});


