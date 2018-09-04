const express = require('express');
const router = express.Router()
const {User} = require('../models/user')


router.get('/users', (req, res, next) => {
    User.findAll()
    .then(users => res.send(users))
    .catch(error => next(error))
})

router.get('/users/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then(users => res.send(users))
    .catch(error => next(error))
})

router.post('/users', (req, res, next) => {
    const newUser = req.body;
    User.create(newUser)
    .then(data => res.send(data))
    .catch(error => next(error))
})

router.put('/users/:id', (req, res, next) => {
    const id = req.params.id;
    const change = req.body;
    User.findById(id)
    .then(user => user.update(change))
    .then(data => res.send(data))
    .catch(error => next(error))
})

router.delete('/users/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then(user =>  User.destroy(user))
    .then(data => res.send(data))
    .catch(error => next(error))
})

module.exports = router;