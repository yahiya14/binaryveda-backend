const loginValidationSchema = require("../helper/validations/login_validation")
const user_model = require("../models/user_model")


module.exports = function (app) {
    app.get(
        '/test',
        (req, res) => {
            return res.status(200).json({ message: "Success" })
        }
    )

    app.post(
        '/signup',
        async (req, res) => {

            try {
                let is_exists = false;
                is_exists = await user_model.findOne({ email: req.body.email })
                if (is_exists) {
                    return res.status(409).json({
                        data: null,
                        message: "Email already exists"
                    })
                }
            } catch(e) {
                return res.status(500).json({
                    message: "Internal Server Error"
                })
            }


            try {
                const data = await user_model.create(req.body)
                if (data) {
                    return res.status(201).json({
                        message: "User Created Successfully",
                        data: data
                    })
                }
            } catch (e) {
                return res.status(400).json({
                    data: null,
                    message: e.message
                })
            }
        }
    )

    app.post(
        '/login',
        async (req, res) => {

            try {
                await loginValidationSchema.validateAsync(req.body)
            } catch(err) {
                return res.status(400).json({
                    message: err.details[0].message,
                    data: null
                })
            }

            try {
                const user = await user_model.findOne({ email: req.body.email, password: req.body.password })
                if (user === null) {
                    return res.status(404).json({
                        message: "Invalid Email or Password",
                        data: null
                    })
                } else {
                    return res.status(200).json({
                        message: "Uesr Found",
                        data: user
                    })
                }
            } catch(e) {
                return res.status(400).json({
                    data: null,
                    message: e.message
                })
            }
        }
    )

}