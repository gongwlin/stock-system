const express = require('express');

const router = express.Router({ mergeParams: true });

//      /login/b/
router.get('/', function (req, res) {
    console.log('params',req.params)
    res.send('asdfb');
});

//      /login/b/b
router.get('/:id', function (req, res) {
    console.log('params', req.params)
    res.send('/b/b');
});

module.exports = router