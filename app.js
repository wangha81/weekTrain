//app.js
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.set('view engine', 'pug');

const cardRoutes = require('./routes/getdata');
app.use('/getdata',cardRoutes);

app.get('/',(req,res)=>{
    res.render('index');
});

app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000,()=>{
    console.log('The application is running on localhost:3000!')
});
