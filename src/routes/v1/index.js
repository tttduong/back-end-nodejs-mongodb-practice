/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import {boardRoutes} from '~/routes/v1/boardRoutes'
const Router = express.Router()

//check API v1
Router.get('/status', (req, res) => {
  res.status(200).json('API v1 works')
})
// api boards
Router.use('/boards', boardRoutes)
export const APIs_v1 = Router