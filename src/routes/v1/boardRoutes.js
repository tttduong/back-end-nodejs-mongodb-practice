import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardValidation } from '~/validations/boardValidation'

const Router = express.Router()
//check API v1
Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json('API get list boards')
  })
  .post(boardValidation.createNew)

export const boardRoutes = Router