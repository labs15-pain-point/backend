const router = require('express').Router()

const Companies = require('../companies/companiesHelper')



router.get('/', async (req, res) => {
    const topN = 20
    try {
        const companyList = await Companies.findAll()
        companyList.sort((a, b) => { 
            return b.bayesrating - a.bayesrating
        })
        const response = companyList.slice(0, topN) 
        return res.status(200).json(response)
    } catch(error) {
        return res.status(500).json(error)
    }
})

router.get('/all', async (req, res) => {
    const topN = 1500
    try {
        const companyList = await Companies.findAll()
        companyList.sort((a, b) => { 
            return b.bayesrating - a.bayesrating
        })
        const response = companyList.slice(0, topN)
        return res.status(200).json(response)
    } catch(error) {
        return res.status(500).json(error)
    }
})



module.exports = router