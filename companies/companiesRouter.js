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
            const bay = ((companyUpvotes + 5) / (companyUpvotes + 5 + ogCompany.downvotes + 5))
            const updatedCompany = await db('companies').update({rating: companyRating, upvotes: companyUpvotes, bayesrating: bay}).where({ id })
            const response = await db('companies').where({ id }).first()
            return res.status(200).json(response)
        } else {
            return res.status(404).json({ message: "Description with this ID does not exist" })
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
            const bay = ((ogCompany.upvotes + 5) / (ogCompany.upvotes + 5 + companyDownvotes + 5))
            const updatedCompany = await db('companies').update({rating: companyRating, downvotes: companyDownvotes, bayesrating: bay}).where({ id })
            const response = await db('companies').where({ id }).first()
            return res.status(200).json(response)
        } else {
            return res.status(404).json({ message: "Description with this ID does not exist" })
        }
    } catch(error) {
        return res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    const { description, word_frequency, entity_frequency } = req.body
    if (!description || !word_frequency || !entity_frequency) {
        return res.status(400).json({ message: "Please add all required fields" })
    }
    try {
        const rating = 0
        const upvotes = 0
        const downvotes = 0
        const bayesrating = 0
        req.body.rating = rating
        req.body.upvotes = upvotes
        req.body.downvotes = downvotes
        req.body.bayesrating = bayesrating

        const company = await Companies.add(req.body)

        return res.status(201).json(company)
    } catch(error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const deleted = await Companies.remove(id)

        if (deleted > 0) {
            return res.status(204).json(deleted)
        } else {
            return res.status(404).json({ message: "ID does not exist" })
        }
    } catch(error) {
        return res.status(500).json(error)
    }
})






module.exports = router