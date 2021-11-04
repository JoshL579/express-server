var express = require('express');
var router = express.Router();
var { isEmail } = require('../utils/validator/inputValidator');

/* Login user. */
router.post('/login', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    if (!isEmail(email)) return res.json({
        success: false,
        msg: 'Invalid Email'
    })
    res.send('Auth Page');
});

module.exports = router;