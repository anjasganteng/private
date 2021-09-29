const needle = require('needle')

const url = 'https://covid19-api-zhirrr.vercel.app/api/world'

const dunia = () => new Promise((resolve, reject) => {
    needle(url, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = dunia
