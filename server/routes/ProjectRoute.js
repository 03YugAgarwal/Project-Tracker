const express = require("express")
const router = express.Router()

const {createProject, getProject, getProjectName} = require("../controllers/Project")

router.post('/create', createProject) // creates a project
router.post('/get',getProject) // gets a project (requires projectID and password)

router.post('/getName',getProjectName) 

module.exports = router