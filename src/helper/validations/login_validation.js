const Joi = require('joi')

const loginValidationSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
})

module.exports = loginValidationSchema