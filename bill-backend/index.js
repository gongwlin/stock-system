const express = require('express');
const app = express();
const user = require('./db/user');


app.get('',function (req,res) {
    console.log('aa');
    res.send('<h1>hello,world</h1>');
});

app.listen(3000,function() {
    console.log('express listening')
})




// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));