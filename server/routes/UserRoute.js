const express = require("express")
const router = express.Router()


const { test } = require("../controllers/User")
router.get('/', test)

module.exports = router