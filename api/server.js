// Bring in required dependencies to create a routed API and to protect it

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

// Import routes

// Connect the server with express

const server = express()

// Have the server use the dependencies

server.use(helmet())
server.use(cors())
server.use(express.json())

// Connect server with routes

// Test to see if server is running

server.get('/', async (req, res) => {
    res.status(200).json({ message: "Server is running" })
})

// Export the server to index.js
module.exports = server