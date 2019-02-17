const express = require('express');
const router = express.Router();
const b = require('./b');

router.get('/a',function(req,res) {
    res.send('aaaaa');
});

router.use('/:name/b', b);

module.exports = router