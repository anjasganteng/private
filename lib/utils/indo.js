const needle = require('needle')

const url = 'https://api.kawalcorona.com/indonesia'

const indo = () => new Promise((resolve, reject) => {
    needle(url, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = indo
