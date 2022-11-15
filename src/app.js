const express = require('express')
const app = express;

app.use(express.json());
app.use(
    express.urlencoded({
    extended: true
    })
);

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.semd('Hello');
});

module.exports = app;