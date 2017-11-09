var express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('./config/config');
const path = require('path');

mongoose.Promise = global.Promise;

mongoose.connect(config.uri, (err) => {
    if(err)
    {
        console.log('ket noi loi',err);
    }
    else{
        console.log(config.secret);
        console.log('đã connec được tới db: ',config.db);
    }
});
//goi ket noi de angular
app.use(express.static(__dirname + '/client/dist/'));
//* đồng nghĩa với chập nhận tất cả các đường link khi không tìm thấy thì trỏ đến
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080,()=>{
    console.log('ket noi toi cong 8080');
})