"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

//Token Controller

const Token = require("../models/token");

module.exports = {
  list: async (req, res) => {
    /*  swagger.ignore= true   */

    const data = await res.getModelList(Token, {}, "userId");
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Token),
      message: "success",
      data,
    });
  },
  create: async (req, res) => {
    /*  swagger.ignore= true   */

    const data = await Token.create(req.body);
    res.status(201).send({
      error: false,
      message: "success",
      data,
    });
  },
  read: async (req, res) => {
    /*  swagger.ignore= true   */
    const data = await Token.findOne({ _id: req.params.id }).populate("userId");
    res.status(200).send({
      error: false,
      message: "success",
      data,
    });
  },
  update: async (req, res) => {
    /*  swagger.ignore= true   */

    const data = await Token.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      message: "success",
      data,
      new: await Token.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*  swagger.ignore= true   */
    const data = await Token.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
