const express = require('express');
const bodyParser = require('body-parser');
const verifyWebhook = require('./verify-webhook');
const messageWebhook = require('./message-webhook');
require('dotenv').config({ path: 'variables.env' });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', messageWebhook);
app.get('/', verifyWebhook);

app.listen(5000, () => console.log('Express server is listening on port 5000'));
// EAADOJlTl5fcBAIbghClZBzKCv74Na00CJu7Ww855waGgLpGGUXA47ZB5ssCCMgZCr4SYN2ov1QxfZBUs7HErZCwvA0ZA71j7REaf7SdRjBMfUZAkrIZBGKR3844i6IqXN8bT0M1DJdeWJmkFz6B6Ew7SGWnwC1s8vvw3XC2eg0IGEAZDZD