const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

router.get('/', verifyToken, (req, res) => {
  res.json({
    message: 'Protected route accessed',
    user: req.user,
  });
});

module.exports = router;