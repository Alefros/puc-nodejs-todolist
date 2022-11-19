const express = require('express');
const app = express;

const indexRouter = require('./routers/index');
const todoRouter = require('./routers/todo');

app.use(express.json());
app.use(
    express.urlencoded({
    extended: true
    })
);

app.use('/', indexRouter);
app.use('/todos', todoRouter);

module.exports = app;