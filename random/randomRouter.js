const router = require('express').Router()

const Companies = require('../companies/companiesHelper')

router.get('/', async (req, res) => {

    randomNumber = (min, max) => {
        let newNum = Math.random()*(max-min) + min
        let hello = Math.floor(newNum).toString(10)
        console.log(hello)
        return hello
    }

    const example = randomNumber(0,100)

    
    try {
        const company = await Companies.findById(example)
        if (company) {
            return res.status(200).json(company)
        } else {
            return res.status(404).json({ message: "No such description exists with this ID" })
        }
    } catch(error) {
        return res.status(500).json(error)
    }
})

module.exports = router