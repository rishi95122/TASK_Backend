import mongoose from "mongoose"

const task=mongoose.Schema({
    id:{
        type:String,
        reuired:true
    }
    ,
    date:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})


const tasks=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    tasks:[]
})

const taskSchema= mongoose.model("tasks",tasks)

export default taskSchema