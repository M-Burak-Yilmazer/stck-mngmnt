"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const User = require("../models/user");
const Token = require("../models/token");
const jwt = require("jsonwebtoken");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  login: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get Token and JWT.'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                }
            }
        */
    const { username, password, email } = req.body;
    if ((username || email) && password) {
      const user = await User.findOne({
        $or: [{ username }, { email }],
      });
      if (user && user.password == passwordEncrypt(password))
        if (user.isActive) {
          //simple token
          let tokenData = await Token.findOne({ userId: user._id });
          if (!tokenData) {
            tokenData = await Token.create({
              userId: user._id,
              token: passwordEncrypt(Date.now() + user._id),
            });
          }
          res.status(200).send({
            error: false,
            message: "success",
            token: tokenData.token,
            user,
          });

          //JWT
        } else {
          res.errorStatusCode = 401;
          throw new Error("this account is not active");
        }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Username (or email) and password are required.");
    }
  },
  refresh: async (req, res) => {},
  logout: async (req, res) => {},
};
