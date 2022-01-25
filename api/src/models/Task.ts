import mongoose from "mongoose";

const { Schema } = mongoose;

type TaskDocument = {
    readonly description: string,
    readonly userId: string
}

const TaskSchema = new Schema<TaskDocument>({
    description: {type: String, required: true},
    userId: {type: String, required: true}
})

export const Task = mongoose.model("Task", TaskSchema);