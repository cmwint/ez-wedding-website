const express = require('express');
var Mailgun = require('mailgun-js');

const app = express();
const port = process.env.PORT || 5000;

//Your api key, from Mailgun’s Control Panel
var api_key = 'MAILGUN-API-KEY';

//Your domain, from the Mailgun Control Panel
var domain = 'lovingyouisez.com';

//Your sending email address
var from_who = 'guest@lovingyouisez.com';



app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));