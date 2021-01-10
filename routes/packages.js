const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('packages', {
        isPackages: true
    })
})

router.get('/:id', (req, res) => {
    res.render('package', {
        title: req.body.package.title,
        package: req.body.package
    })
})

module.exports = router