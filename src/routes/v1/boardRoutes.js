import express from 'express'

const Router = express.Router()
//check API v1
Router.route('/')
  .get((req, res) => {
    res.status(200).json('API get list boards')
  })
  .post((req, res) => {
    res.status(200).json('API create new board')
  })

export const boardRoutes = Router