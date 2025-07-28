"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const firm= require('../controllers/firm')

//firm Routes
router.route("/")
.get(firm.list)
.post(firm.create)
router.route("/:id")
.get(firm.read)
.put(firm.update)
.patch(firm.update)
.delete(firm.delete) 


//!Exporting firm routes
module.exports = router