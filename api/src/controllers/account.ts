import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../models/User";
import { ACCESS_TOKEN_SECRET } from "../utils/secrets";

type QueryFindUser = {
    readonly pseudo?: string,
    readonly email: string,
    readonly password?: string
}

type AllInformationsUser = {
    readonly pseudo: string,
    readonly email: string,
    readonly password: string
}

const generataAccessToken = (payload: object) => {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
}

export const loginController = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const query: QueryFindUser = {
            email: body.email
        }
        const projection = {
            "_id": 1,
            "password": 1
        }

        if (!body.email || !body.password) return res.status(401).json({ error: "Empty fields !!" })
        
        const getUser = await User.findOne(query, projection);

        if (!getUser) return res.status(401).json({ error: "User not found !!" })


        const userId = getUser._id.toString();

        // Compare password
        const comparePswd = await bcrypt.compare(body.password, getUser.password);
        if (comparePswd) {
            return res.status(200).json({
                userId,
                token: generataAccessToken({ userId })
            });
        }

        return res.status(401).json({ error: "Incorrect password !!"});

    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const signupController = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const queryFindUser = {
            email: body.email
        }

        if (!body.pseudo || !body.email || !body.password) return res.status(401).json({ error: "Empty fields !!" })
        
        const findUser = await User.find(queryFindUser)

        if (findUser.length) return res.status(500).json({ error: "Information already used"})

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(body.password, salt);
        body.password = hash;

        // Create new user
        const newUser = await new User(body);
        await newUser.save();

        const userId = newUser._id.toString()
        
        return res.status(200).json({ 
            userId,
            token: generataAccessToken({ userId })
        })

        
        
    } catch (error) {
        return res.status(500).json({ error });
    }
}