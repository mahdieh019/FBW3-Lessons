const express = require('express');
const session = require('express-session');
const router = express.Router();
const {check, validationResult} = require('express-validator');

router.post('/create-user', [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({min: 1}).custom((val, {req, loc, path}) => {
        if (val !== req.body.confirm_password) {
            throw new Error('Password don`t match!');
        } else {
            return val;
        }
    }),
], (req, res) => {

    var errors = validationResult(req);
    
    if (errors) {
        //if (!errors.isEmpty())
        //res.status(422).json({errors: errors.array()});
         var errors = validationResult(req).array();
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/user');
    } else {
        req.session.success = true;
        res.redirect('/user');
    }
});

router.get('/', function(req, res) {
    res.render('user', {
        success: req.session.success,
        errors: req.session.errors
    });
    req.session.errors = null;
})

module.exports = router;