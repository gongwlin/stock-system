const express = require('express');
const app = express();
// const user = require('./db/user');

// app.use(function(req, res,next) {
//     console.log('app.use!');
//     req.requestTime = new Date();
//     res.time = new Date().getHours() + 1;
//     next();  
// });

app.get('/a',function (req,res) {
    console.log('/a')
})




app.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next();
});


app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
}, function (req, res, next) {
    // send a regular response
    res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
    res.send('special')
})

// app.get('/user/:id', function (req, res) {
//     console.log('req.param', req.params.id);
//     console.log(req.hostname);
//     res.send('<h1>hello,world' + '</h1>');
// });







app.listen(3000,function() {
    console.log('express listening')
})




// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));