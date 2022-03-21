const router = require('express').Router();
const { ExpenseRecord, User } = require('../../db');
const validator = require('validator');

router.post('/record/add', function (req, res, next) {
  const userId = req.body.userId;
  if (!(req.jwt_payload.id === userId)) {
    res.json({ msg: 'user id invalid' });
    return;
  }

  User.findByPk(userId).then((user) => {
    if (!user) res.json({ msg: 'not found user' });
  });

  ExpenseRecord.create(req.body).then(
    (record) => {
      record.save().then(() => {
        res.json({ msg: 'ok' });
      });
    },
    (e) => {
      res.json({ msg: e });
    }
  );
});

module.exports = router;
