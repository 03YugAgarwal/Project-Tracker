const express = require("express")
const router = express.Router()

const { createTask, getTask, getTaskById, getTaskByUserId, updateTask, completeTask } = require("../controllers/Tasks")

router.get('/', getTask)
router.get('/:id', getTaskById)
router.post('/:id/complete', completeTask)
router.get('/user/:id', getTaskByUserId)
router.post('/create', createTask)
router.post('/update/:id', updateTask)

module.exports = router