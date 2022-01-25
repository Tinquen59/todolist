import mongoose from "mongoose";

const { Schema } = mongoose;

type UserDocument = mongoose.Document & {
    readonly pseudo: string,
    readonly email: string
    readonly password: string
}

const UserSchema = new Schema<UserDocument>({
    pseudo: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

export const User = mongoose.model<UserDocument>("User", UserSchema);