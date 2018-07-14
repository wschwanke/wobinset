const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./router/router.js');
const morgan = require('morgan');

// Use express
const app = express();

app.disable('x-powered-by');

app.use(morgan('tiny'));

// Use body-parser for parsing JSON and URLencoded body data
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// Serve the static client files
app.use('/dist', express.static(path.join(__dirname, '../public/dist'), { fallthrough: false }));

app.use('/', router);

module.exports = app;
