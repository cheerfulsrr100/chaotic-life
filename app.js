'use strict';
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const unless = (middleware, ...paths) => {
  return function (req, res, next) {
    const pathCheck = paths.some((path) => path === req.path);
    if (!pathCheck) middleware(req, res, next);
    next();
  };
};

const tokenRegex = /Bearer\s([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$)/;

const verifyToken = function (req, res, next) {
  const authHeader = req.headers.authorization;
  const jwtToken = authHeader.match(tokenRegex).pop();
  if (jwtToken !== undefined) {
    try {
      jwt.verify(jwtToken, 'greekn');
      req.user = {
        id: 1,
        name: 'test',
      };
      return [req, res];
    } catch (err) {
      res.json({ msg: 'token invalid' });
    }
  }
};

app.use(unless(verifyToken, '/user/login', '/user/register'));
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use(
  '/test',
  express.Router().get('', function (req, res, next) {
    res.json({ msg: 'ok' });
  })
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ msg: 'error' });
});

module.exports = app;
