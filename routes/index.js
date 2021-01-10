const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Main Page',
        isIndex: true
    })
})

module.exports = router