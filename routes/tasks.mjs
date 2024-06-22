import express from "express"

import { getAllTasks, addTask, deleteTask, updateTask} from "../controllers/tasks.mjs";

const router =express()
  
router.post("/gettasks", getAllTasks);
router.post("/addtask", addTask);
router.post("/deletetask", deleteTask);
router.post("/updatetask", updateTask);
export default router;