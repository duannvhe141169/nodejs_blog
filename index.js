const express = require('express');
//const morgan = require('morgan');
//const exphbs = require('express-handlebars');
//const path = require('path')
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
   return res.send('helo world');
})
//127.0.0.1-localhost

app.listen(port, () => {
    console.log(`Example app listening on port 
    http://localhost:${port}`)
  })