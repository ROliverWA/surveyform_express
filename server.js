const express = require('express');
var app = express();
const bodyParser = require('body-parser');
var session = require('express-session');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/static")));
app.use(session({secret: "theansweris42", resave: false, saveUninitialized: true, cookie: {maxAge: 60000}}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.post('/result', (req, res) => {
    console.log(req.body);
    
    data = {
        name: req.body.name_box,
        loc: req.body.dojo_loc,
        lang: req.body.fav_lang,
        comment: req.body.comment
    };

    res.render('result', data);
});


app.get('/', (req, res) => res.render('index'));
   
    







app.listen(1337, () => console.log("Listening on port 1337"));
