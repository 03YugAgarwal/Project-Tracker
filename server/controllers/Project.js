const Project = require("../models/projectSchema");

const createProject = async (req,res) => {
    try{
        const {name, id, password} = req.body;
        const project = await Project.create({name, projectID: id, password})
        res.status(200).json({message: "Project Created Successfully"})
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: "Intenal Server Error"})
    }
}

const getProject = async (req,res) => {
    try{
        const {id, password} = req.body;
        const project = await Project.findOne({projectID: id, password})
        if(project){
            res.status(200).json({project})
        }
        else{
            res.status(400).json({message: "Project not found"})
        }
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: "Intenal Server Error"})
    }
}

const getProjectName = async (req,res) => {
    try{
        const {id} = req.body;
        const project = await Project.findOne({projectID: id})
        if(project){
            res.status(200).json({name: project.name})
        }
        else{
            res.status(400).json({message: "Project not found"})
        }
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: "Intenal Server Error"})
    }
}

module.exports = {createProject, getProject, getProjectName}