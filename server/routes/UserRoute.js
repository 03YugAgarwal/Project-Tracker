const express = require("express")
const router = express.Router()


const { test, createUser,getUser,getUserById,getUserId } = require("../controllers/User")

router.get('/', getUser)
router.get('/:id', getUserById)
// router.get('/test', test)
router.post('/login', getUserId)
router.post('/create', createUser)

module.exports = router