import taskSchema from "../schema/taskSchema.mjs"

export const getAllTasks=async (req,res)=>{

    const result = await taskSchema.find({ username: req.body.username });
    console.log(result[0].tasks)
    if (result[0]) return res.status(200).json(result[0].tasks);
    else {
      res.json([]);
    }
}
export const addTask=async(req,res)=>{
const result=await taskSchema.updateOne({username:req.body.username},{
    $push:{
        tasks:{
            id:req.body.id,
            name:req.body.name,
            description:req.body.description,
            date:req.body.date
        }
    }
},{upsert:true})
if(result) {console.log("added")

    return res.status(201).send("success")
}
    else console.log("errrrr")
}

export const deleteTask=async (req,res)=>{

const result=await taskSchema.updateOne({username:req.body.username},{
    $pull:{
        tasks:{
            id:req.body.id
        }
    }
})

if(result) return res.status(201).send("Task deleted")
    else return res.status(401).send("error")
}


export const updateTask=async(req,res)=>{

const updated=await taskSchema.updateOne({$and:[{username:req.body.username},{"tasks.id":req.body.id}]},{
    $set:{
      "tasks.$.name":req.body.name,
      "tasks.$.description":req.body.description,
      "tasks.$.date":req.body.date 
    }
})
if(updated) res.status(201).send("updated")
    else return res.status(401).send("error")
}