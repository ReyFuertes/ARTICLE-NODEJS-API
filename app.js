var express = require('express')
var cors = require('cors');
var app = express();

app.use(cors());

const articleRouter = require('./routes/articleRoutes');
app.use(express.json());
app.use('/api/v1/articles', articleRouter);

module.exports = app;