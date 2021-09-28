const needle = require('needle')

const url = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia'

const Corona = () => new Promise((resolve, reject) => {
    needle(url, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = Corona
