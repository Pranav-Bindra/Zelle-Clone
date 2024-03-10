import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

const UserSchema = new Schema<User>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String }
});

const UserModel = mongoose.models.PayTmUser || mongoose.model<User>('PayTmUser', UserSchema);

export type { User };
export { UserModel };
