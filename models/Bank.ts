import mongoose, { Document, Schema,ObjectId } from "mongoose";

interface Accounts extends Document {
    userId: ObjectId | string;
    username: String;
    balance: number;
}

const accountSchema = new Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PayTmUser',
        required: true
    },
    username:{
        type: String,
        required: true
    },
    balance : {
        type: Number,
        required: true
    }
});

const AccountModels = mongoose.models.Accounts || mongoose.model<Accounts>('Accounts', accountSchema);

export type { Accounts };
export { AccountModels };

