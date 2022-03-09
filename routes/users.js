var express = require('express');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db')
const { log } = require("debug");
var router = express.Router();
const validator = require('validator')
const moment = require('moment')

class User extends Model {
}

User.init({
  userId: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.BIGINT,
    field: 'user_id'
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_name'
  },
  userPassword: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'user_password'
  },
  userPhoneNumber: {
    type: DataTypes.STRING,
    field: 'user_phone_number'
  },
  userEmail: {
    type: DataTypes.STRING,
    field: 'user_email'
  },
  userCreateTime: {
    type: DataTypes.DATE,
    field: 'user_create_time'
  },
  userUpdateTime: {
    type: DataTypes.DATE,
    field: 'user_update_time'
  },
  userLastLoginTime: {
    type: DataTypes.DATE,
    field: 'user_last_login_time'
  }
}, {
  sequelize,
  tableName: 'chaotic_life_user',
  timestamps: true,
  createdAt: 'userCreateTime',
  updatedAt: 'userUpdateTime'
})

router.post('/new', function (req, res, next) {
  if (!validator.isBase64(req.body.userName) ||
    !validator.isBase64(req.body.userPassword))
    res.json({ "msg": 'parameter error' });

  User.create(req.body)
    .then((value => res.json({ 'msg': `create succes ${value.userId}` })))
    .catch(() => res.json({ 'msg': 'create failed' }));
});

router.post('/login', function (req, res, next) {
  if (!validator.isBase64(req.body.userName) ||
    !validator.isBase64(req.body.userPassword))
    res.json({ "msg": 'parameter error' });

  User.findOne({ where: { userName: req.body.userName, userPassword: req.body.userPassword } })
    .then(user => {
      user.set({ userLastLoginTime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') })
        .save()
        .then(() => res.json({ 'msg': `login success ${user.userId}` }));
    })

})

module.exports = router;
