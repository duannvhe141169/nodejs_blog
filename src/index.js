const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path')
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// connecto db
db.connect();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(methodOverride('_method'));

//morgan http logger
app.use(morgan('combined'));

//express-handlebars- teamplate engine
app.engine('hbs', exphbs.engine({ extname: '.hbs',
helpers:{
  sum:(a,b)=> a+b
} }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route inint
route(app);
//
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err.status === 404) {
    res.status(404).render('error/error404', { error: err.message || 'Course not found' });
  } else {
    res.status(500).render('error/error500', { error: err.message || 'Something went wrong!' });
  }
});



//127.0.0.1-localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});