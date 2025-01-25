import express from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()
//check API v1
Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json('API get list boards')
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json('API create new board')
  })

export const boardRoutes = Router