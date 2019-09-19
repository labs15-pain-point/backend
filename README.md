# 99Problems Backend Repository for the 99Problems React App

## Base URL

`https://ninenineproblems.herokuapp.com`

## Project Initialization

Fork and clone the repo, and he run `yarn install` to install the required dependencies. After that run `yarn server`
to get the server running on localhost:5000

## Tech Stack

- NodeJs
- PostgreSQL
- Knex
- CORS
- ExpressJs


## Company Routes

GET to `/api/companies`

- outputs an array of all companies

GET to `/api/companies/:id`

- outputs a company object with the specified ID
- object includes keys (description, rating, upvotes, downvotes, bayesrating, word_frequency, and entitiy_frequency)

PUT to `/api/companies/:id/upvote`

- outputs company with incremeneted upvotes and recalculated bayesrating and rating

PUT to `/api/companies/:id/downvote`

- outputs company with incremented downvotes and recalculated bayesrating and rating

POST to `/api/companies`

- req.body requires a description, word_frequency, and enitity_frequency

DELETE to `/api/books/:id`

- deletes the company at the specified ID 


## Random Description Routes

GET to `/api/random`

- outputs an company object randomly from the database.

## Leaderboard Routes

GET to `/api/leaderboard`

- outputs an array of the top 20 company objects sorted by bayesrating

Get to `/api/leaderboard/all`

- outputs an array of all the company objects sorted by bayesrating
