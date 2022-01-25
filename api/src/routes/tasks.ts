import express from "express";
const router = express.Router();

import auth from "../middleware/auth";
import {
    addNewTask,
    allTasksController,
    detailTaskController,
    updateTaskController,
    removeTaskController,
} from "../controllers/task";

router.post("/add-new-task", auth, addNewTask);
router.get("/all-tasks", auth, allTasksController);
router.get("/task/:id", auth, detailTaskController);
router.put("/task/:id", auth, updateTaskController);
router.delete("/task/:id", auth, removeTaskController);

export default router;
