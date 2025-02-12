
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
    const correctCondition = Joi.object({
        title: Joi.string()
            .min(3)
            .max(5)
            .required()
            .trim()         //trim() PHẢI đi kèm với strict(): báo lỗi khi có space ở đầu/cuối chuỗi
            .strict()
            .messages({  //nhớ là messages có "s"
                'string.min': 'Title length must be at least 3 characters long (custom message)',
                'string.max': 'Title length must be less than or equal to 5 characters long (custom message)',
                'any.required': 'Title is required (custom message)',
                'string.empty': 'Title is not allowed to be empty (custom message)',
                'string.trim': 'Title must not have leading or trailing whitespace (custom message)'
            }),
        description: Joi.string()
            .min(3)
            .max(5)
            .required()
            .trim()
            .strict()
    })

    try {
        console.log('request.body: ', req.body)
        //{abortEarly: false}: trường hợp có nhiều lỗi thì trả về tất cả lỗi
        await correctCondition.validateAsync(req.body, { abortEarly: false })
        //Validate dữ liệu, hợp lệ thì cho request đi tiếp qua controller
        next()

        // res.status(StatusCodes.CREATED).json({ message: 'POST from Validation: API Create new board' })
    } catch (error) {
        //Không cần console.log vì error đã in ra trong postman
        // console.log(error)
        //In ra lỗi trong 1 dòng đầu tiên (để dễ đọc lỗi hơn)
        // console.log(new Error(error))

        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: new Error(error).message
        })
    }
}

export const boardValidation = {
    createNew
}