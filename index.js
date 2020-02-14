const express = require('express');
const cors = require('cors');

const config = require('config');
const fileDb = require('/fieDb');

const app  = express();
app.use('cors');
app.use(express.static('public'));

const run =  async () =>{
  await fileDb.init();
  app.listen(config.port , () => {
    console.log('Listening on ' + config.port)
  })
};

run().catch(e => console.error(e));
