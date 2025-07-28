"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const category= require('../controllers/category')

//category Routes
router.route("/")
.get(category.list)
.post(category.create)
router.route("/:id")
.get(category.read)
.put(category.update)
.patch(category.update)
.delete(category.delete) 


//!Exporting category routes
module.exports = router