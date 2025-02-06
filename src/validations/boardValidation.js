
import Joi from 'joi'
import {StatusCodes} from 'http-status-code'
// import httpStatus from 'http-status'


const createNew = (req, res)=>{
  res.status(StatusCodes.CREATED).json({message: 'from validation: APIs board are created'})
}

export const boardValidation ={
  createNew
}