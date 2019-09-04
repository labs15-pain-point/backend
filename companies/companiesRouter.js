const router = require('express').Router()

const Companies = require('./companiesHelper')

const db = require('../data/dbConfig')

router.get('/', async (req, res) => {
    try {
        const companies = await Companies.findAll()

        return res.status(200).json(companies)

    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        
        const company = await Companies.findById(id)
        if (company) {
            return res.status(200).json(company)
        } else {
            return res.status(404).json({ message: "No such description exists with this ID" })
        }

    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.put('/:id/upvote', async (req, res) => {
    const id = req.params.id
    try {
        const ogCompany = await Companies.findById(id)
        if (ogCompany) {
            let companyRating = ogCompany.rating
            let companyUpvotes = ogCompany.upvotes
            companyRating = companyRating + 1
            companyUpvotes = companyUpvotes + 1
            const updatedCompany = await db('companies').update({rating: companyRating, upvotes: companyUpvotes}).where({ id })
            const response = await db('companies').where({ id }).first()
            return res.status(200).json(response)
        } else {
            return res.status(404).json({ message: "SOL" })
        }
    } catch(error) {
        return res.status(500).json(error)
    }
})

router.put('/:id/downvote', async (req, res) => {
    const id = req.params.id
    try {
        const ogCompany = await Companies.findById(id)
        if (ogCompany) {
            let companyRating = ogCompany.rating
            let companyDownvotes = ogCompany.downvotes
            companyRating = companyRating - 1
            companyDownvotes = companyDownvotes + 1
            const updatedCompany = await db('companies').update({rating: companyRating, downvotes: companyDownvotes}).where({ id })
            const response = await db('companies').where({ id }).first()
            return res.status(200).json(response)
        } else {
            return res.status(404).json({ message: "SOL" })
        }
    } catch(error) {
        return res.status(500).json(error)
    }
})






module.exports = router