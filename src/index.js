const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3000;

const route = require('./routes');




app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
//morgan http logger
app.use(morgan('combined'));

//express-handlebars- teamplate engine
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

//route inint
route(app);
//


//127.0.0.1-localhost

app.listen(port, () => {
  console.log(`Example app listening on port 
  http://localhost:${port}`)
})