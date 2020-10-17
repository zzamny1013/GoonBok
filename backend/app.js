const express = require('express');
const app = express();
//var router = require('./router/main')(app);
const mainRouter = require('./routes/main.js');
const loginRouter = require('./routes/login.js');
const session = require('express-session');
const logger = require('morgan');

const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(session({
  key: 'sid',
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간
  }
}));

app.use(express.static('public'));
app.use(logger('dev'));

app.use('/', mainRouter);
app.use('/login', loginRouter);

const server = app.listen(port, function(){
    console.log("Express server has started on port 3000")
});