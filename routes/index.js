var express = require('express')
var router = express.Router()
require('dotenv').config()

  router.get('/doc/covid19', (req, res) => {
    res.render('cv19', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/iplookup', (req, res) => {
    res.render('iplookup', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/fakename', (req, res) => {
    res.render('fakename', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/hilih', (req, res) => {
    res.render('hilih', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

module.exports = router
