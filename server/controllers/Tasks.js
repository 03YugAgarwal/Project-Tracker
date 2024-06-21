const Task = require("../models/taskSchema");

const createTask = async (req,res) => {
    try{
        const {title, description, by} = req.body;
        const task = await Task.create({title,description,by})
        res.status(200).json({message: "Task Created Successfully"})
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: "Intenal Server Error"})
    }
}

const getTask = async (req,res) => {
    try{
        const task = await Task.find();
        res.status(200).json(task);

    }catch(error){
        console.log(error.message)
        res.status(500).json({message: "Intenal Server Error"})
    }
}

const getTaskById = async (req,res) => {
    try{
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);

    }catch(error){
        console.log(error.message)
        res.status(500).json({message: "Intenal Server Error"})
    }
}

module.exports = {createTask, getTask, getTaskById}