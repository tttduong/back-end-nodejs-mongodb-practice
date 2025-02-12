

import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
    try {
        console.log('request.body: ', req.body)

        res.status(StatusCodes.CREATED).json({ message: 'POST from cONTROLLER: API Create new board' })
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: error.message
        })
    }
}

export const boardController = {createNew}