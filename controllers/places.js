const router = require('express').router()

router.get('/', (req, res) => {
    res.send('GET /Places')
})

module.exports = router