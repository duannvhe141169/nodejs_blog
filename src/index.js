const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));
//morgan http logger
app.use(morgan('combined'));

//express-handlebars- teamplate engine
app.engine('hbs',exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.set('views',path.join(__dirname, 'resources', 'views'));

//
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
//127.0.0.1-localhost

app.listen(port, () => {
  console.log(`Example app listening on port 
  http://localhost:${port}`)
})