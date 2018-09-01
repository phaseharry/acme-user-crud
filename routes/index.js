const express = require('express');
const router = express.Router()
const {User} = require('../models/user')


router.get('/', (req, res, next) => {
    User.findAll()
    .then(users => res.send(users))
    .catch(error => next(error))
})

router.post('/users/create', (req, res, next) => {
    const newUser = req.body;
    User.create(newUser)
    .then(data => res.send(data))
    .catch(error => next(error))
})

router.delete('/users/destroy', (req, res, next) => {
    const user = req.body;
    User.destroy(user)
    .then(data => res.send(data))
    .catch(error => next(error))
})

module.exports = router;