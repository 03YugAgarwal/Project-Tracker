const express = require("express")
const router = express.Router()

const { createTask, getTask, getTaskById } = require("../controllers/Tasks")

router.get('/', getTask)
router.get('/:id', getTaskById)
router.post('/create', createTask)

module.exports = router