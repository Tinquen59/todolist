import { Request, Response } from "express";
import mongoose from "mongoose";

import { Task } from "../models/Task";

export const addNewTask = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        if (!body.description || !body.userId)
            return res.status(401).json({ error: "Empty fields !!" });

        body.userId = new mongoose.Types.ObjectId();

        const newTask = await new Task(body);
        await newTask.save();

        return res.status(200).json({ message: "Task created" });
    } catch (error) {
        return res.status(401).json({ error });
    }
};

export const allTasksController = async (req: Request, res: Response) => {
    try {
        const projection = {
            __v: 0,
        };

        const findAllTasks = await Task.find({}, projection);

        if (!findAllTasks) return res.status(500).json({ error: "Error data" });

        return res.status(200).json(findAllTasks);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const detailTaskController = async (req: Request, res: Response) => {
    try {
        const projection = {
            __v: 0,
        };

        const findDetailTask = await Task.findById(
            new mongoose.Types.ObjectId(req.params.id),
            projection
        );

        if (!findDetailTask)
            return res.status(500).json({ error: "No task found" });

        return res.status(200).json(findDetailTask);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const updateTaskController = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        if (body.description === "" || !req.params.id)
            return res.status(401).json({ error: "Empty fields !!" });

        const filter = {
            _id: new mongoose.Types.ObjectId(req.params.id),
        };
        const update = {
            description: body.description,
        };

        const doc = await Task.findOneAndUpdate(filter, update);

        if (!doc) return res.status(500).json({ error: "Have error !" });

        return res.status(200).json({ message: "Modification applied" });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const removeTaskController = async (req: Request, res: Response) => {
    try {
        const filter = {
            _id: new mongoose.Types.ObjectId(req.params.id),
        };

        const deleteTask = await Task.deleteOne(filter);

        // `1` if MongoDB deleted a doc, `0` if no docs matched the filter `{ _id: ... }`
        if (deleteTask.deletedCount === 0)
            return res
                .status(500)
                .json({ error: "Error ! Filter does not match" });

        return res.status(200).json({ message: "Deleted task" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
