// server.js

require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Wit } = require('node-wit');

const client = new Wit({
  accessToken: process.env.WIT_ACCESS_TOKEN,
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/chat', (req, res) => {
  const { message } = req.body;

  client
    .message(message)
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
});

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});