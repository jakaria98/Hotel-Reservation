const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const registerValidator = require('../validator/registerValidator')
const loginValidator = require("../validator/loginValidator");
const User = require("../model/User");

const { serverError, resourceError } = require("../util/error");
const { NativeDate } = require("mongoose");

// login controller
module.exports = {
  login(req, res) {
    let { email, password } = req.body;
    let validate = loginValidator({
      email,
      password,
    });

    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    }

    User.findOne({
      email,
    })
      // Use Populate for transaction
      .then((user) => {
        if (!user) {
          return resourceError(res, "User Not Found");
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            return serverError(res, err);
          }
          if (!result) {
            return resourceError(res, "Password Doesn't Match");
          }

          let token = jwt.sign(
            {
              _id: user._id,
              name: user.name,
              email: user.email,
            },
            "SECRET",
            {
              expiresIn: "2h",
            }
          );

          res.status(200).json({
            message: "Login Successful",
            token: `Bearer ${token}`,
          });
        });
      })
      .catch((error) => serverError(res, error));
  },
};
