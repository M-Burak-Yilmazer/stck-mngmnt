"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const user= require('../controllers/user')

//user Routes
router.route("/")
.get(user.list)
.post(user.create)
router.route("/:id")
.get(user.read)
.put(user.update)
.patch(user.update)
.delete(user.delete) 


//!Exporting user routes
module.exports = router