const express = require('express');
const cors = require('cors');

const config = require('./config');
const fileDb = require('./fieDb');
const messages = require('./app/messages');

const app  = express();
app.use(cors());
app.use(express.static('public'));

app.use('/messages', messages);

const run =  async () =>{
  await fileDb.init();
  app.listen(config.port , () => {
    console.log('Listening on ' + config.port)
  })
};

run().catch(e => console.error(e));
