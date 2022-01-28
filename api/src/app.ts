import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { MONGODB_URI } from "./utils/secrets";
import routerUser from "./routes/users";
import routerTask from "./routes/tasks";

// Create Express server
const app = express();

// Connect to MongoDB
mongoose
    .connect(MONGODB_URI, { autoIndex: false })
    .then(() => console.log("Connected successfully to MongoDB"))
    .catch((err) => {
        console.log(
            `MongoDB connection error. Please make sure MongoDB is running. ${err}`
        );
        mongoose.connection.close();
    });

// Express configuration
app.set("port", 4000);
app.use(cors());
app.use(bodyParser.json());
app.use("/users", routerUser);
app.use("/tasks", routerTask);

export default app;
