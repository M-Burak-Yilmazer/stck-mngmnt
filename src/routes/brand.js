"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const brand= require('../controllers/brand')

//brand Routes
router.route("/")
.get(brand.list)
.post(brand.create)
router.route("/:id")
.get(brand.read)
.put(brand.update)
.patch(brand.update)
.delete(brand.delete) 


//!Exporting brand routes
module.exports = router