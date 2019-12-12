const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express();

const db = 'mongodb+srv://Ciaran:1234@cluster0-psotl.mongodb.net/test?retryWrites=true&w=majority';

app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true,  useUnifiedTopology: true})
    .then((() => console.log('Connected to mongoDB')))
    .catch(err => console.log(err));

app.use('/api/items', require('./routes/api/items'));
const port = process.env.port || 5000;

app.listen(port, () => `Server is running. Port: ${port}`);