const express = require('express');
const app = express();
const cookieParse = require('cookie-parse');
const bodyParse = require('body-parser');
const router = express.Router();

app.use(cookieParse);
app.use(bodyParse({extended: true}))

app.get('/login',function(req, res) {
    
});


app.listen(3000, function () {
    console.log('listening');
});

