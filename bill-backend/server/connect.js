const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bill', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', function () {
    console.log('连接Mongo数据库成功')
});


module.exports = mongoose;