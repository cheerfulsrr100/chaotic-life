const express = require('express');
const { User } = require('../models');
const { log } = require('debug');
const router = express.Router();
const validator = require('validator');
const moment = require('moment');
const jwt = require('./jwt');

router.post('/register', function (req, res, next) {
  if (
    !validator.isBase64(req.body.name) ||
    !validator.isBase64(req.body.password)
  )
    res.json({ msg: 'parameter error' });

  User.create(req.body)
    .then((value) => res.json({ msg: `create succes ${value.id}` }))
    .catch(() => res.json({ msg: 'create failed' }));
});

router.post('/login', function (req, res, next) {
  if (
    !validator.isBase64(req.body.name) ||
    !validator.isBase64(req.body.password)
  )
    res.json({ msg: 'parameter error' });

  User.findOne({
    where: { name: req.body.name, password: req.body.password },
  }).then((user) => {
    user
      .set({
        userLastLoginTime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      })
      .save()
      .then(() =>
        res.json({ msg: `login success ${user.id}`, token: `${jwt(user)}` })
      );
  });
});

module.exports = router;
