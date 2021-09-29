const express = require('express')
const router  = express.Router()

const {
    indo,
    world,
    country
} = require('./../lib')

router.get('/indo', (req, res) => {
    Corona()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/world', (req, res) => {
    Corona()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/country', (req, res) => {
    Corona()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router
