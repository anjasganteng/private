const express = require('express')
const router  = express.Router()

const {
    Hilih,
    Faker,
    Nulis,
    Corona,
    IpLookup
} = require('./../lib')

router.get('/corona', (req, res) => {
    Corona()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/iplookup', (req, res) => {
    const q = req.query.q
    if (!q) {
      res.status(200).send({
        code: 200,
        message: 'Pliese input parameter url.'
      })
    } else {
        IpLookup(q)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/fakename', (req, res) => {
    const country = req.query.country
    if (!country) {
      res.status(500).send({code: 500, message: "Pliese input code country."})
    } else {
        Faker(country)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/hilih', (req, res) => {
    const kata = req.query.kata
    if (!kata) {
      res.send({
        code: 400,
        message: 'pliese input parameter kata.'
      })
    } else {
        Hilih(kata)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/nulis', (req, res) => {
    const kata = req.query.kata
    if (!kata) {
      res.send({
        code: 400,
        message: 'pliese input parameter kata.'
      })
    } else {
        Nulis(kata)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

module.exports = router
