let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/sendEmail',(req,res) => {
    res.send(req.body)
   
})

app.listen(3000,() => {
    console.log('Server Listen From Port No. 3000');
});

