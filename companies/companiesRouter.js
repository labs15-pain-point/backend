const router = require('express').Router()

const Companies = require('./companiesHelper')

router.get('/', async (req, res) => {
    try {
        const companies = await Companies.findAll()

        return res.status(200).json(companies)

    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

module.exports = router